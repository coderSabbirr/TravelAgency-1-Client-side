import React, { useEffect, useState } from 'react';
import Manageblog from './ManageBlog';
function ManageBlogs(props) {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
 
    return (
        <div>
            <div>
                {
                    blogs.map(blog=><Manageblog
                        
                        key={blog._id}
                        blog={blog}
                        />)
                }

            </div>
        </div>
    );
}

export default ManageBlogs;