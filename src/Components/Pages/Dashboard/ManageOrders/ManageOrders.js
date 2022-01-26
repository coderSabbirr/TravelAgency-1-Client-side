import React, { useEffect, useState } from 'react';
import './SingleOrder.css';
import SingleOrder from './SingleOrder/SingleOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://young-shore-30046.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="manageorder">
            <h1>All Order</h1>
            <div className="container">
                <table className="table table-bordered border-dark ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Customer Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Statues</th>
                            <th scope="col">Cencel Order</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <SingleOrder

                            order={order}
                            key={order._id}
                        >

                        </SingleOrder>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;