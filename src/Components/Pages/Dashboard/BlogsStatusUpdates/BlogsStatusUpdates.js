import React, { useEffect, useState } from 'react';
import BlogsStatusUpdate from './BlogsStatusUpdate';

function BlogsStatusUpdates(props) {
    const [status, setStatus] = useState([])

    useEffect(() => {
        fetch('https://stormy-mountain-53016.herokuapp.com/blogs/pandding')
            .then(res => res.json())
            .then(data => setStatus(data))
    }, [])

    return (
        <div className="manageorder">
            <h5 style={{textAlign: 'center' ,marginBottom:"30px"}}>Blogs Status Update</h5>
            <div className="container">
                <table className="table table-bordered border-dark ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Title</th>
                            <th scope="col">Cost</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Statues</th>

                        </tr>
                    </thead>
                    {status.map((statu => <BlogsStatusUpdate
                        statu={statu}
                        key={statu._id}
                    >

                    </BlogsStatusUpdate>

                    ))}
                </table>
            </div>
        </div>
    );
}

export default BlogsStatusUpdates;