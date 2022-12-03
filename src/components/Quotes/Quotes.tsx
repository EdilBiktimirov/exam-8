import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Quote from "../Quote/Quote";
import Spinner from "../Spinner/Spinner";
import type {QuotesType, QuoteType} from "../../types";

interface Props {
  category?: string;
}

const Quotes: React.FC<Props> = ({category}) => {
  const [quotes, setQuotes] = useState<QuoteType[]>([])
  const [loading, setLoading] = useState(false);

  const getQuotes = useCallback(async (params: string) => {
    try {
      setLoading(true);
      const response = await axiosApi.get<QuotesType>(params);
      if (response.data !== null) {
        const quotesArray = Object.keys(response.data).map((elem) => {
          const test = response.data[elem];
          test.id = elem;
          return test;
        });
        setQuotes(quotesArray);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchQuotes = useCallback(async () => {
    if (category) {
      getQuotes('quotes.json?orderBy="category"&equalTo="' + category + '"').catch(console.error)
    } else {
      getQuotes('/quotes.json').catch(console.error)
    }
  }, [category, getQuotes]);

  const removeQuote = useCallback(async (id: string) => {
    try {
      await axiosApi.delete('/quotes/' + id + '.json');
      setQuotes([]);
      fetchQuotes().catch(console.error);
    } catch (e) {
      console.log(e)
    }
  }, [fetchQuotes]);

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