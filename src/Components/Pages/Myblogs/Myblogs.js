import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import '../../Pages/ManageBlog/ManageBlogs.css';
import Spinner from '../../Spinner/Spinner';
import Myblog from './Myblog';

function Myblogs(props) {
    const{user}=useAuth()
    const [isloading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`https://stormy-mountain-53016.herokuapp.com/myblogs/${user.email}`)
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
                blogs.map(blog => <Myblog

                    key={blog._id}
                    blog={blog}
                />)
            }

        </div>
    </div>
);
        }
}

export default Myblogs;