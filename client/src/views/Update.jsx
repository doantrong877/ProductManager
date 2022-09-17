import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res =>{ setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setLoaded(true);}
                    )
    }, []);

   

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/products/"+id, product)
        .then(res => {console.log(res); navigate('/')})
        .catch(err => console.error(err));
    }
    return (
        <div>
            <h1>Update {title}</h1>
           {loaded && (<ProductForm onSubmitProp={updateProduct} initialTitle={title} inititalPrice={price} initialDescription={description}/>)} 
        </div>
    )
}

export default Update;