import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res =>{ setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);}
                    )
    }, []);

   

    const updateProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/"+id, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
    return (
        <div>
            <h1>Update {title}</h1>
            <form onSubmit={updateProduct}>
            <div>
                <label htmlFor="">Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <button type="submit">Update</button>
        </form>  
        </div>
    )
}

export default Update;