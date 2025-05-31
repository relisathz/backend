import express from 'express';
// const express = require('express');
const app = express();
import { getProducts,createProduct } from './Application/product.js';

app.use(express.json()); // For parsing JSON requests

// const sendHello = (req, res) => res.send('Hello world!')

// app.get('/hello', sendHello);

app.get('/products',getProducts)
app.post('/products',createProduct)



app.listen(8000, () => console.log(`Server running on port ${8000}`));