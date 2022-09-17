import React, {useState} from "react";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

 const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const handleSubmit = e => {
        e.preventDefault();
       onSubmitProp({title,price,description});
        
    }

    return (
        <div>
            <h1>Product Manager</h1>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Submit</button>
        </form>  
        </div>
        
    )
}
export default ProductForm;