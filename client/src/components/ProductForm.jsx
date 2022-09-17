import React, {useState} from "react";
import axios from 'axios';


export default () => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input onChange={e => setDescription(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
        </form>  
        </div>
        
    )
}