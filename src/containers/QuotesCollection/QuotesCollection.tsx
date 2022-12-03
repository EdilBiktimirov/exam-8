import React from 'react';
import {Route, Routes} from "react-router-dom";
import Quotes from "../../components/Quotes/Quotes";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AddQuote from "../../components/AddQuote/AddQuote";

const INFO = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous People', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humor', id: 'humor'},
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
        <Route path={INFO[0].id} element={(
          <Quotes category={INFO[0].id}/>
        )}/>
        <Route path={INFO[1].id} element={(
          <Quotes category={INFO[1].id}/>
        )}/>
        <Route path={INFO[2].id} element={(
          <Quotes category={INFO[2].id}/>
        )}/>
        <Route path={INFO[3].id} element={(
          <Quotes category={INFO[3].id}/>
        )}/>
        <Route path={INFO[4].id} element={(
          <Quotes category={INFO[4].id}/>
        )}/>
        <Route path={'/add-quote'} element={(
          <AddQuote/>
        )}/>
      </Routes>
    </div>
  );
};

export default QuotesCollection;