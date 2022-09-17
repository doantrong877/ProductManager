import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DeleteButton from "./ProductDelete";
const ProductList = (props) => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(res => {
            setProduct(res.data);
        })
        .catch(err => console.error(err));
    },[]);


     const removeFromDom = productId => {
        setProduct(products.filter(product=> product._id !== productId));
    }


    
    return (

        <div>

            <h1>All Product</h1>
            {products.map((product, i) =>
                <div  key={i}>
                    <Link to={`/${product._id}`}>{product.title}</Link>
                    <Link to={`/edit/${product._id}`}>Update</Link>
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)}/>
                </div>

            )}
        </div>
    )



}
export default ProductList;