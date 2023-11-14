import './App.css';
import Products from './components/Products';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import Card from './components/Card';
import React, { useState, createContext } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

export const AddToCardProduct = createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/SingleProduct/:id' element={<SingleProduct />} />
          <Route path='/Card' element={<Card />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
