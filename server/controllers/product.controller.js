const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json({product: newProduct}))
    .catch(err => res.status(400).json(err));
}

module.exports.getProduct = (req, res) =>{
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatePerson => res.json(updatePerson))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteInfo => res.json(deleteInfo))
    .catch(err => res.json(err))
}