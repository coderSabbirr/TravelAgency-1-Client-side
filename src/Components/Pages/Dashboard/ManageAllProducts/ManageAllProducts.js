import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts/SingleProducts';

const ManageAllProducts = () => {
    const [manageProduct, setMaganeProduct] = useState([])
    useEffect(() => {
        fetch('https://young-shore-30046.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setMaganeProduct(data))
    }, [])
    return (
        <div className="" style={{ backgroundColor: '#EFF0F5' }}>
            <h1 className="manage-all-product">All Product</h1>
            <div className="container">
                <div className="manage-products">
                    {
                        manageProduct.map(product => <SingleProducts
                            product={product}
                            key={product._id}

                        ></SingleProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllProducts;