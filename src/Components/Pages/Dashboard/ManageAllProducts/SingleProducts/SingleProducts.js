import React from 'react';
import Swal from 'sweetalert2';
import './SingleProducts.css';
const SingleProducts = ({ product }) => {
    const { title, price, image, _id } = product;
    const handleDelete = () => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure to delete this order?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://young-shore-30046.herokuapp.com/products/${_id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "", "success");
                            window.location.reload()
                        }
                    })
            }
        })


    }

    return (
        <div className="prodcuts-details-manage">
            <div className="d-flex ">
                <div className="my-order-img">
                    <img src={`data:image/png;base64,${image}`} alt="" />
                </div>
                <div className="my-order-title">
                    <p>{title}</p>
                    <div>
                        <button className="order-cancel-btn" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
                <div className="myprder-price">
                    <p>${price}</p>
                </div>
                {/* <div>
                    <p className="status">{status.status}</p>
                </div> */}
                {/* <div>
                    <button className="order-cancel-btn" onClick={() => handleDelete(_id)}>Cancel</button>
                </div> */}
            </div>
        </div>
    );
};

export default SingleProducts;