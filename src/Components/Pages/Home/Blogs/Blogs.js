import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

function Blogs() {
    const[blogs,setBlogs]=useState([])

    useEffect(() => {
fetch('http://localhost:4000/blogs/approved')
.then(res => res.json())
.then(data => setBlogs(data))

    },[])
    return (
        <div className="" style={{marginTop:'50px'}}>
            <div className="text-center mb-5">
                <h3>Blogs</h3>
            </div>
            <div className="container">
                <div className="blogs-card" >
                {blogs.map((pd, index) => (
                    <div className="card " style={{ width: '18rem',marginBottom:"30px" }} key={pd._id} >
                        <Link to={`/blogsView/${pd._id}`}><img style={{height:'192px',width:'285px'}} src={`data:image/png;base64,${pd.image}`}  alt={pd.title}/></Link>
                        <div className="card-body">
                            <h5 style={{ fontSize: "14px" }}>
                                <Link className="card-text" to={`/blogsView/${pd._id}`} style={{ textDecoration: "none", color: 'black' }}>{pd.title}</Link>
                            </h5>
                        </div>
                    </div>
                      ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;