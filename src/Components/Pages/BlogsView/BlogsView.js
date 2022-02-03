import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Spinner from '../../Spinner/Spinner';
import './BlogsView.css';
function BlogsView(props) {
    let { blogsId } = useParams()
    const [blogs, setBlogs] = useState([])
    const [isloading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://stormy-mountain-53016.herokuapp.com/blogsview/${blogsId}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setIsLoading(false))


    }, [])
    console.log(blogs)
    const ratingNumber = parseInt(blogs?.rating)
    if (isloading) {
        return (
            <>
                <Header />
                <div className="container" style={{ marginTop: '50px' }}>
                    <Spinner />
                </div>
            </>
        )

    }
    else {
        return (
            <>
                <Header />
                <div className="blogs" style={{ paddingTop: "60px" }}>
                    <div className="container">
                        <div className="d-flex bllgsview-content">
                            <div className="image-dev" style={{ width: "65%" }}>
                                <img style={{ width: "95%" }} src={`data:image/png;base64,${blogs.image}`} alt="" />
                            </div>
                            <div style={{ width: "35%" }} className="conten-dev">
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
}

export default BlogsView;