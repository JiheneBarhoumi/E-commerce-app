const express=require('express');
const app=express();
const products=require('./data/products')
//creating the routes
app.get('/',(req,res)=>{
    res.send('api is running')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find(product=>product._id===req.params.id)
    res.json(product)
})

//run the server
app.listen(5000,(err)=>
(err)? console.log('error in server running',err):console.log("server is running")
)