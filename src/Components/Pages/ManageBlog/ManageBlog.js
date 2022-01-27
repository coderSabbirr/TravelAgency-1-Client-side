import React from 'react';

function ManageBlog({ blog }) {
    const { _id, title, subtitle, location, dec, category, cost, rating, img } = blog
    return (
        <div>
            <div className="card " style={{ width: '18rem', marginBottom: "30px" }}  >
                <img className="card-img-top" src={img} alt={title} />
                <div className="card-body">
                    <h5 style={{ fontSize: "14px" }}>
                        <p>{title}</p>
                    </h5>
                </div>
                <div>
                    <button className="Edit-btn">Edit</button>
                    <button className="Delete-btn">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ManageBlog;