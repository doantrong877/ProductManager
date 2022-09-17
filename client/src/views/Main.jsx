import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, {useEffect, useState} from "react";
import axios from 'axios';
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const createProduct = productTemp => {
        axios.post('http://localhost:8000/api/products/new', productTemp)
        .then(res=>{setProduct([...product, res.data]);})
        .catch(err=>console.log(err))
    }

    const removeFromDom = productId => {
        setProduct(product.filter(product=> product._id !== productId));
    }



    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" inititalPrice="" initialDescription=""/>
            <hr/>
            {loaded && <ProductList products={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;