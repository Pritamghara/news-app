import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News';


import Header from './components/Header';
import ArticleDetail from './components/ArticleDetail';
import Favorites from './components/Favorites';



const App = () => {
  return (

    <>
    <BrowserRouter>
    <Header/>
      
      
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/category/:category" element={<News/> }/>
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          
        </Routes>
      
    </BrowserRouter>
    </>
  );
};

export default App;
