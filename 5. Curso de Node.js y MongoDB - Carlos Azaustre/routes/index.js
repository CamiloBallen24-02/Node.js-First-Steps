'use strict'

const express = require('express');

const UserControllers = require('../controllers/user');
const ProductControllers = require('../controllers/product');
const auth = require('../middlewares/auth');


const api = express.Router();





api.get('/product', ProductControllers.getProducts);

api.get('/product/:productId', ProductControllers.getProduct);

api.post('/product', auth, ProductControllers.saveProduct);

api.put('/product/:productId', auth, ProductControllers.updateProduct);

api.delete('/product/:productId', auth, ProductControllers.deleteProduct);

api.post('/signup', UserControllers.signUp);

api.post('/singin', UserControllers.signIn);

api.get('/private', auth,  (req, res)=>{
    res.status(200).send({message: 'Tienes Acesso'});
});

module.exports = api