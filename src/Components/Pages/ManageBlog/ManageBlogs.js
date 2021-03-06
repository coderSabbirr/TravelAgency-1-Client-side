import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import Manageblog from './ManageBlog';
import './ManageBlogs.css';

function ManageBlogs(props) {
    const [isloading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://stormy-mountain-53016.herokuapp.com/manageblog')
        
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setIsLoading(false))
    }, [])
if (isloading) {
    return (

        <div className="container" style={{ marginTop: '50px' }}>
            <Spinner />
        </div>
    )

} 
else {
return (
    <div>
        <div className="blogsmanage" >
            {
                blogs?.map(blog => <Manageblog

                    key={blog._id}
                    blog={blog}
                />)
            }

        </div>
    </div>
);
        }
}

export default ManageBlogs;