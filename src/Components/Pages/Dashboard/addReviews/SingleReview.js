import React from 'react';
import './Reviews.css';
const SingleReview = ({review}) => {
    const{name,email,description,rating,_id}= review;

    const handleDelete = () => {

        const url = `https://young-shore-30046.herokuapp.com/reviews/${_id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(_id)
            })



    }
    console.log(_id)
    return (
        <div className="prodcuts-details-manage col-md-3">
            <div className="my-order-title">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Rating: {rating}</p>
                <p>Description: {description}</p>
                <button  className="review-delete" onClick={() => handleDelete(_id)}>delete</button>
                </div>
    </div>
    );
};

export default SingleReview;