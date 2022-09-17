import React from "react";
import axios from 'axios';

const DeleteButton = (props) => {
    const {productId, successCallback} = props;

    const handleDelete = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {successCallback()})
        .catch(err => console.error(err));
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteButton;