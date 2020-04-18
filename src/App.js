import React, { useState, useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js'
import ProductList from './components/ProductList.js'
import { Button, Container, Message, Title } from "rbx";
import Grid from '@material-ui/core/Grid';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const productid = Object.keys(data);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
        <ProductList products={products}/>
      </React.Fragment>
    
  );
};

export default App;
