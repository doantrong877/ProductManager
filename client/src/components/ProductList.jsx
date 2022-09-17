import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductList = (props) => {
    return (

        <div>

            <h1>All Product</h1>
            {props.products.map((product, i) =>
                <div>
                    <Link to={`/${product._id}`} key={i}>{product.title}</Link>
                    <Link to={`/update/${product._id}`} key={`update${i}`}>Update</Link>
                </div>

            )}
        </div>
    )



}
export default ProductList;