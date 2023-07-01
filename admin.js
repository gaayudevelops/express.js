
const express=require('express');

const router=express.Router();

router.get('/add-product' , (req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><p>Enter the Product name:</p><input type="text" name="Product"><br><p>Enter the Size of the product: </p><input type="text" name="Size"><br><br><button type="submit">Add Product</button></form>');
    
 })
 router.post('/add-product',(req,res,next)=>{
     console.log(req.body);
     res.redirect('/shop/');
 })

 module.exports=router;