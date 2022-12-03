import React, {useCallback, useEffect, useState} from 'react';
import Quote from "../Quote/Quote";
import axiosApi from "../../axiosApi";
import type {QuotesType, QuoteType} from "../../types";
import {useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Navbar from "../Navbar/Navbar";

interface Props {
  category?: string;
  // onBtnClick: (id: string) => void;
}


const Quotes: React.FC<Props> = ({category}) => {
  const [quotes, setQuotes] = useState<QuoteType[]>([])
  const [loading, setLoading] = useState(false);

  // const {id} = useParams();

  const fetchQuotes = useCallback(async () => {
    try {
      if (category) {
        setLoading(true);
        const response = await axiosApi.get<QuotesType>('quotes.json?orderBy="category"&equalTo="' + category + '"');
        if (response.data !== null) {
          const quotesArray = Object.keys(response.data).map((elem) => {

            const test = response.data[elem];
            test.id = elem;
            return test;
          });
          setQuotes(quotesArray);
        }
      } else {
        setLoading(true);
        const response = await axiosApi.get<QuotesType>('/quotes.json');
        if (response.data !== null) {
          const quotesArray = Object.keys(response.data).map((elem) => {

            const test = response.data[elem];
            test.id = elem;
            return test;
          });
          setQuotes(quotesArray);
        }
      }
    } finally {
      setLoading(false);
    }

  }, [category]);


  const removeQuote = useCallback(async (id: string) => {
    try{
      await axiosApi.delete('/quotes/' + id + '.json');
      setQuotes([]);
      fetchQuotes().catch(console.error);

    } catch (e) {
      console.log(e)
    }

  }, [fetchQuotes]);

  // const removeQuote1 = async (id: string) => {
  //   await axiosApi.delete('/quotes/' + id + '.json');
  //   await axiosApi.get<QuotesType>('/quotes.json');
  //   }


  useEffect(() => {
    fetchQuotes().catch(console.error);
  }, [fetchQuotes]);

  let quotesBlock = (
    <div className="position-relative container-fluid">

    {quotes.map((quote) => (
      <Quote
        text={quote.text}
        author={quote.author}
        key={quote.id} id={quote.id}
        onDeleteBtnClick={() => removeQuote(quote.id)}/>
    ))}
  </div>
  )

  if (loading) {
    quotesBlock = <Spinner/>
  }


  return (
    <>
      {quotesBlock}
    </>
  );

};

export default Quotes;