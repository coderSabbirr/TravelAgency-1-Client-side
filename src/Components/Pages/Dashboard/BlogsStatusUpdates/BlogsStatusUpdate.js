import React from 'react';

function BlogsStatusUpdate({ statu }) {
    const formData = new FormData();
    const status = 'approved';
    const updateStatus = (id) => {
        formData.append('status', 'approved')
        const url = `https://stormy-mountain-53016.herokuapp.com/status/${id}`;
        fetch(url, {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    let stutesbar = [];
    if (statu.status === "pandding") {
        stutesbar = "Pandding";
    }
    else{
        stutesbar=status
    }
    return (
        <tbody>
            <tr>
                <td>{statu?.name}</td>
                <td>{statu.title}</td>
                <td>${statu.cost}</td>
                <td>{statu.useremail}</td>
                {statu.status === "pandding" &&
                    <td> <button className="btn btn-primary " onClick={() => updateStatus(statu._id)} >{stutesbar}</button></td>
            }
        </tr>
    </tbody >
    );
}

export default BlogsStatusUpdate;