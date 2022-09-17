const Product = require("../controllers/product.controller");
module.exports = app => {
    app.get("/api/products", Product.findAllProducts);
    app.post("/api/products/new", Product.createProduct);
};