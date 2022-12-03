import React, {useCallback, useEffect, useState} from 'react';
import Quote from "../Quote/Quote";
import axiosApi from "../../axiosApi";
import type {QuotesType, QuoteType} from "../../types";

interface Props {
  category?: string;
}


const Quotes: React.FC<Props> = ({category}) => {
  const [quotes, setQuotes] = useState<QuoteType[]>([])


  const fetchQuotes = useCallback(async () => {
    try {
      if (category) {
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
    }finally {

    }


  }, [category]);

  useEffect(() => {
    fetchQuotes().catch(console.error);
  }, [fetchQuotes]);





  return (
    <div>
      {quotes.map((quote) => (
        <Quote text={quote.text} author={quote.author} key={quote.id} id={quote.id}/>
      ))}
    </div>
  );
};

export default Quotes;