import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default Detail;