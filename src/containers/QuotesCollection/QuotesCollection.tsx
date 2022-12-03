import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Quotes from "../../components/Quotes/Quotes";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import AddQuote from "../../components/AddQuote/AddQuote";
import EditQuote from "../../components/EditQuote/EditQuote";
import axiosApi from "../../axiosApi";
import {QuotesType} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const INFO = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Famous People', id: 'famous-people'},
  {title: 'Saying', id: 'saying'},
  {title: 'Humour', id: 'humour'},
  {title: 'Motivational', id: 'motivational'},
];

const QuotesCollection = () => {

  // const navigate = useNavigate();



  return (
    <div>
      {/*<Spinner/>*/}
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
        {/*<Route path={INFO[0].id} element={(*/}
        {/*  <Quotes category={INFO[0].id}/>*/}
        {/*)}/>*/}
        {/*<Route path={INFO[1].id} element={(*/}
        {/*  <Quotes category={INFO[1].id}/>*/}
        {/*)}/>*/}
        {/*<Route path={INFO[2].id} element={(*/}
        {/*  <Quotes category={INFO[2].id}/>*/}
        {/*)}/>*/}
        {/*<Route path={INFO[3].id} element={(*/}
        {/*  <Quotes category={INFO[3].id}/>*/}
        {/*)}/>*/}
        {/*<Route path={INFO[4].id} element={(*/}
        {/*  <Quotes category={INFO[4].id}/>*/}
        {/*)}/>*/}

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