import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './services/context/CartContext'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Category from './components/ItemCategory/Category';

function App() {

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/detail/:id?'>
            <ItemDetailContainer />
          </Route>
          <Route path='/products/:category?'>
            <Category />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
