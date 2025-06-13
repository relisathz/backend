
import express from 'express';

const app = express();
import { productRouter } from './api/product.js';

app.use(express.json()); // For parsing JSON 
//middle ware function between serverpoint and productrouter
app.use ((req,res,next) => {
console.log("request received");
console.log(req.method,req.url);
next();


});

app.use('/products', productRouter)
//middleware function can add to this one also.it mean between productrouter and handler.only one can apply
//app.use ((req,res,next) => {
//console.log("request received");
//console.log(req.method,req.url);
//next();


//});


app.listen(8000, () => console.log(`Server running on port ${8000}`));