import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";
import QuoteForm from "../QuoteForm/QuoteForm";
import type {QuoteType} from "../../types";

const EditQuote = () => {
  const {id} = useParams();
  const [editedQuote, setEditedQuote] = useState<QuoteType | null>(null);

  const fetchQuote = useCallback(async (id: string) => {
    try {
      const response = await axiosApi.get<QuoteType>('/quotes/' + id + '.json');
      response.data.id = id;
      setEditedQuote(response.data)
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchQuote(id).catch(console.error);
    }
  }, [fetchQuote, id]);

  return (
    <div>
      {editedQuote && (
        <QuoteForm existingQuote={editedQuote}/>
      )}
    </div>
  );
};

export default EditQuote;