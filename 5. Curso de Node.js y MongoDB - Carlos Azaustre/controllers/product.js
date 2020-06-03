'use strict'
const Product = require('../models/product');

function getProduct(req, res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{
        if(err) return res.status(500).send({message: 'Error del servidor'});
        if(!product) return res.status(404).send({message: 'El producto no existe'});

        res.status(200).send({product:product});
    });
}

function getProducts(req, res){
    Product.find({}, (err, products)=>{
        if(err) return res.status(500).send({message: 'Error del servidor'});
        if(!products) return res.status(404).send({message: 'No existe productos'});
        
        res.send(200, {products: products});
    });
}

function updateProduct(req, res){
    let productId = req.params.productId;
    let update = req.body;

    Product.findByIdAndUpdate(productId, update, (err, productUpdate)=>{
        if(err) return res.status(500).send({message: 'Error del servidor'});

        res.status(200).send({product:productUpdate});
    });
}

function deleteProduct(req, res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{
        if(err) return res.status(500).send({message: 'Error del servidor'});

        product.remove(err =>{
            if(err) return res.status(500).send({message: 'Error del servidor'});
            res.status(200).send({message: 'El producto se elimino'});
        });
    });
}

function saveProduct(req, res){
    //Guardando el producto
    let product = new Product();

    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    //Procesando el resultado de la Base de Datos
    product.save((err, productStore)=>{
        if (err) res.status(500).send({message: 'Error al guardar en la base de datos'});
        res.status(200).send({product: productStore});
    });
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}