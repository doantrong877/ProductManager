import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import e from "cors";
const ProductList = (props) => {
    const {removeFromDom} = props;
    const handleClick = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {removeFromDom(productId)})
        .catch(err => console.error(err));
    }
    return (

        <div>

            <h1>All Product</h1>
            {props.products.map((product, i) =>
                <div  key={i}>
                    <Link to={`/${product._id}`}>{product.title}</Link>
                    <Link to={`/edit/${product._id}`}>Update</Link>
                    <button onClick={(e) => {handleClick(product._id)}}>Delete</button>
                </div>

            )}
        </div>
    )



}
export default ProductList;