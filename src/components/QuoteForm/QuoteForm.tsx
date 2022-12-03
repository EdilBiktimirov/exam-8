import React, {ReactEventHandler, useState} from 'react';
import Quotes from "../Quotes/Quotes";
import {QuoteType} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import Quote from "../Quote/Quote";
import axiosApi from "../../axiosApi";

interface Props {
 existingQuote?: QuoteType;
}

const QuoteForm: React.FC<Props> = ({existingQuote}) => {



  const {id} = useParams();
  const navigate = useNavigate();

  const initialState = existingQuote ? {
    ...existingQuote
  } : {
    category: '',
    author: '',
    text: '',
    id: '',
  };

  const [quote, setQuote] = useState<QuoteType>(initialState);


const onUserChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
  const {name, value} = e.target;

  setQuote((prev) => ({
    ...prev,
    [name]: value,
  }));
}

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!id) {
      try {
        await axiosApi.post('/quotes.json', quote);
      } finally {
        navigate('/');
      }
    } else {
      try {
        await axiosApi.put('/quotes/' + id + '.json', quote);
      } finally {
        navigate('/');
      }
    }
  };

  return (

    <form onSubmit={onFormSubmit} className="container-fluid">
      <h3>{existingQuote ? 'Edit quote:' : 'Submit new quote:'}</h3>
      <select
        className="form-select mb-2 w-75"
        id={"category"}
        name={"category"}
        value={quote.category}
        onChange={onUserChange}
        required>
        <option disabled value=''>Select category</option>
        <option value={"star-wars"}>Star Wars</option>
        <option value={"famous-people"}>Famous People</option>
        <option value={"saying"}>Saying</option>
        <option value={"humour"}>Humour</option>
        <option value={"motivational"}>Motivational</option>
      </select>
      <input
        className="form-control mb-2"
        id={"author"}
        name={"author"}
        type={"text"}
        value={quote.author}
        onChange={onUserChange}
        placeholder={"Enter author:"}
      />
      <textarea
        className="form-control mb-2"
        id={"text"}
        name={"text"}
        value={quote.text}
        onChange={onUserChange}
        placeholder={"Enter quote:"}
      />
      <button type="submit" className="btn btn-success w-25 mx-auto mb-2">{existingQuote ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default QuoteForm;