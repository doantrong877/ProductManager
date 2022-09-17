const Product = require("../controllers/product.controller");
module.exports = app => {
    app.get("/api/products", Product.findAllProducts);
    app.get("/api/products/:id", Product.getProduct);
    app.post("/api/products/new", Product.createProduct);
    
};