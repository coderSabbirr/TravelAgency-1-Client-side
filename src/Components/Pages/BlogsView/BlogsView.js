import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './BlogsView.css';
function BlogsView(props) {
    let { blogsId } = useParams()
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${blogsId}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            

    }, [])
    const ratingNumber =parseInt(blogs?.rating)
    return (
        <>
            <Header />
            <div className="blogs" style={{ paddingTop: "60px" }}>
                <div className="container">
                    <div className="d-flex">
                        <div className="" style={{ width: "65%" }}>
                            <img style={{ width: "95%" }} src={blogs.img} alt="" />
                        </div>
                        <div style={{ width: "35%" }}>
                            <h5 className="title">{blogs.title}</h5>
                            <h5 className="category">Category: {blogs.category}</h5>
                            <div className="d-flex">
                                <h5 className="cost">Cost: <span className="cost-value">${blogs.cost}</span></h5>
                                <h5 style={{ fontSize: "16px" }}>
                                    {[...Array(ratingNumber)]?.map(star => {
                                        return <i
                                            className="fas rating fa-star" />

                                    })}
                                </h5>
                            </div>
                            <h5 style={{ fontSize: "16px", color: "grey" }}>Location: {blogs.Location}</h5>
                        </div>
                    </div>
                    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
                        <hr />
                    </div>
                    <div className="w-75" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <div >
                            <p style={{ fontSize: "21px", fontWeight: "500" }}>{blogs.subtitle}</p>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <p>{blogs.dec}</p>
                        </div>
                        <div className="book-now">
                            <Link to={`/contact`}>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogsView;