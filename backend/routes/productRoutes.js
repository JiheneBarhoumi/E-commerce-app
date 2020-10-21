import express from 'express';
const router =express.Router();
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

router.get("/", asyncHandler(async(req, res) => {
    const products=await Product.find({}) //va importer tous les produits de la base
    res.json(products);
  }) );
  
  router.get('/:id', asyncHandler(async(req, res) => {
      const id=req.params.id;
        const product = await Product.findById(id)
        if(product){
            res.json(product) 
        }else{
        res.status(404)
        throw new Error('product not found')
        }
      }
   
  ));


export default router;