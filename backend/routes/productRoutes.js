import express from 'express';
import asyncHandler from 'express-async-handler'
// This is to avoid having to create a try and catch for every route.
import Product from '../models/productModel.js';

const router = express.Router();

//@desc FETCH all products
//@route GET API/Products
//@acess Public

router.get('/', asyncHandler( async(req, res) => {
    const products = await Product.find({})
    res.json(products);
}))

//@desc FETCH single product
//@route GET API/Products/:id
//@acess Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
        if (product) {
            res.json(product);
        } else {
            res.status(404)
            throw new Error("Product not found")
        }
    
}))

export default router;