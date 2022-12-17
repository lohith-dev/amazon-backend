const express=require('express');
const data = require('./data.js');
const cors =require('cors');
const app=express();

app.use(cors({
    origin:'http://localhost:3000'
  }));

app.get('/api/products',(req,res)=>{
    
        res.send(data.products)
})

app.get('/api/products/slug/:slug',(req,res)=>{
    const product=data.products.find(x=>x.slug==req.params.slug);
    
  if(product){
    res.send(product)
  }else{
    res.status(404).send({message:'Product Not Found'})
  }
})


const PORT=8000;
app.listen(PORT,()=>{
    console.log("server is listening in 8000")
})
