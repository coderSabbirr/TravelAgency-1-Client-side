import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';
import './Blogs.css';

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const[page,setPage]=useState(0)
    const [pageCount,setpageCount]=useState(0)
    const [isloading, setIsLoading] = useState(true);
    const size=10;

    useEffect(() => {
        fetch(`https://stormy-mountain-53016.herokuapp.com/blogs?page=${page}&&size=${size}`)
        // fetch(`https://stormy-mountain-53016.herokuapp.com/blogs/approved`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
               const count=data.count
               const pageNumber=Math.ceil(count/size)
               setpageCount(pageNumber)
            })
            .finally(() => setIsLoading(false))

    }, [page])

   
    
    if (isloading) {
        return (

            <div className="container" style={{ marginTop: '50px' }}>
                <Spinner />
            </div>
        )

    }
    else {

        return (
            <div className="" style={{ marginTop: '50px' }}>
                <div className="text-center mb-5">
                    <h3>Blogs</h3>
                </div>
                <div className="container">
                    <div className="blogs-card" >
                        {blogs.blogs.map((pd, index) => (
                            <div className="card " style={{ width: '18rem', marginBottom: "30px" }} key={pd._id} >
                                <Link to={`/blogsView/${pd._id}`}><img style={{ height: '192px', width: '285px' }} src={`data:image/png;base64,${pd.image}`} alt={pd.title} /></Link>
                                <div className="card-body">
                                    <h5 style={{ fontSize: "14px" }}>
                                        <Link className="card-text" to={`/blogsView/${pd._id}`} style={{ textDecoration: "none", color: 'black' }}>{pd.title}</Link>
                                    </h5>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                    <div className="pagitaion" style={{ marginLeft: '50px' }}>
                            {
                                [...Array(pageCount).keys()].map(number => <button  onClick={()=> setPage(number)} className={number ===page ? 'selected':''} key={number}>{number}</button>)
                            }

                        </div>

                </div>
            </div>
        );
    }
}

export default Blogs;