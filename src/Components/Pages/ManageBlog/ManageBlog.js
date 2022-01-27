import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React from 'react';
import { useForm } from 'react-hook-form';



function ManageBlog({ blog }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const fileInput = React.createRef();
    const { _id, title, subtitle, Location, dec, category, cost, rating, image } = blog

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        let image = fileInput.current.files[0]
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]); // formdata doesn't take objects
        }
        formData.append('image', image)
        fetch(`http://localhost:4000/blogs/${_id}`, {
            method: "PUT",
            body: formData
        })
            .then((res) => res.json())
            .then((result) => {

                reset()
            });
    }
    const handleDelete = (id) => {

        const url = `http://localhost:4000/blogs/${id}`
        fetch(url, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
              
            })

}
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div >
            <div className="card " style={{ width: '18rem', marginBottom: "30px" }}  >
                <img className="card-img-top " style={{ height: '120px' }} src={`data:image/png;base64,${image}`}  alt={title} />
                <div className="card-body">
                    <h5 style={{ fontSize: "14px" }}>
                        <p>{title}</p>
                    </h5>
                </div>
                <div>
                    <Button onClick={handleOpen}>Edit</Button>
                    <Button onClick={() => handleDelete(_id)}>Delete</Button>
                </div>
            </div>
            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                                <form className="row " onSubmit={handleSubmit(onSubmit)}>
                                    <p className="product-details">Blogs Update </p>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Blogs Title</label>
                                        <input type="title" className="form-control"  defaultValue={title} {...register("title", { required: true })} />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Subtitle</label>
                                        <textarea  type="Categories" className="form-control" defaultValue={subtitle} {...register("subtitle", { required: true })} />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Categories</label>
                                        <textarea  type="Categories" className="form-control" defaultValue={category} {...register("category", { required: true })} />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Location</label>
                                        <input type="text" className="form-control" defaultValue={Location}  {...register("Location", { required: true })} />
                                    </div>
                             
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Cost</label>
                                        <input type="number" className="form-control" defaultValue={cost}  {...register("cost", { required: true })} />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Blogs description</label>
                                        <textarea id="w3review" name="w3review" rows="4" cols="50"className="form-control"  defaultValue={dec} {...register("dec", { required: true })} />
                                    </div>
                        
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Rating </label>
                                        <input type="number"className="form-control"  defaultValue={rating} {...register("rating", { required: true })} />
                                    </div>
                        
                                    <div className="col-md-12 mt-5">
                                        <label className="form-label">Upload Image </label>
                                        <input type="file" className="form-control " accept='image/*'  id="inputCity" ref={fileInput} required />
                                    </div>
                                   
                        

                                    <div className="col-12 mt-3">
                                        <input type="submit" value="Submit" className="btn btn-primary" />

                                    </div>
                                </form>
                         
                    </Box>
                </Modal>
            </div>


        </div>
    );
}

export default ManageBlog;