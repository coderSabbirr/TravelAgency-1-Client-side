import React from 'react';
import Swal from 'sweetalert2';
import './Myorder.css';

const Myorder = ({ order }) => {
    const { title, price, image } = order.booking_deatils;
    const { time, order_id, status, _id } = order;

    const handleDelete = () => {

        Swal.fire({
            icon: "warning",
            title: "Are you sure to cancel this order?",
            showCancelButton: true,
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://young-shore-30046.herokuapp.com/orders/${_id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Canceled!", "", "success");
                            window.location.reload()
                        }
                    })

            }
        })
    }
    return (
        <div className="col-md-12 my-order-details">
            <div>
                <p className="order-id">Order <span style={{ color: '#1a9cb7' }} >#{order_id}</span></p>
                <p className="time-date">Placed on {time}</p>
            </div>
            <hr />
            <div className="d-flex align-items-center ">
                <div className="my-order-img">
                    <img src={`data:image/png;base64,${image}`}  alt="" />
                </div>
                <div className="d-flex">
                    <div className="my-order-title">
                        <p>{title}</p>
                    </div>
                    <div className="myprder-price">
                        <p>${price}</p>
                    </div>
                    <div>
                        <p className="status">{status.status}</p>
                    </div>
                    <div>
                        <button className="order-cancel-btn" onClick={() => handleDelete(_id)}>Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Myorder;