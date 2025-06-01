import express from 'express';
// const express = require('express');
const app = express();
import { getProducts,createProduct,getProduct,deleteProduct,updateProduct} from './Application/product.js';
// import { getProduct4 } from './api/product.js';

app.use(express.json()); // For parsing JSON requests

// const sendHello = (req, res) => res.send('Hello world!')
// app.get('/hello', sendHello);
//product routering....it's in route product.js

 const productRouter=express.Router()
 productRouter.route('/').get(getProducts).post(createProduct)
//router define
productRouter.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct)
//import { productRouter } from './Route/product.js';
app.use('/products',productRouter) 

// app.get('/products',getProducts)
// app.post('/products',createProduct)

//app.get('/product/:id',getProduct)

//delete
//app.delete('/product/:id',deleteProduct)

//app.patch('/product/:id',updateProduct)

//  app.delete('/product/:id',deleteProducts4)

app.listen(8000, () => console.log(`Server running on port ${8000}`));