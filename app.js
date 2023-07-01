
const express = require('express');
const bodyParser=require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product' , (req,res,next)=>{
   res.send('<form action="/product" method="POST"><p>Enter the Product name:</p><input type="text" name="Product"><br><p>Enter the Size of the product: </p><input type="text" name="Size"><br><br><button type="submit">Add Product</button></form>');
   
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express JS</h1>');
})

app.listen(3000);