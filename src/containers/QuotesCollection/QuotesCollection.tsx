import React from 'react';
import {Route, Routes} from "react-router-dom";
import Quotes from "../../components/Quotes/Quotes";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AddQuote from "../../components/AddQuote/AddQuote";
import EditQuote from "../../components/EditQuote/EditQuote";

const INFO = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous People', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humour', id: 'humour'},
  {title: 'Motivational', id: 'motivational'},
];

const QuotesCollection = () => {

  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={(
          <Quotes/>
        )}/>
        {INFO.map((elem) => (
          <Route path={elem.id} key={elem.id + elem.title} element={(
            <Quotes category={elem.id}/>
          )}/>
        ))}
        <Route path={'/add-quote'} element={(
          <AddQuote/>
        )}/>
        <Route path={'/quotes/:id/edit'} element={(
          <EditQuote/>
        )}/>
      </Routes>
    </div>
  );
};

export default QuotesCollection;