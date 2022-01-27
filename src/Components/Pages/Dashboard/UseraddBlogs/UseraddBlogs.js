import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
function UseraddBlogs(props) {
    const { user } = useAuth()
    const fileInput = React.createRef();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        let image = fileInput.current.files[0]
        const status='pandding'
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]); // formdata doesn't take objects
        }
        formData.append('image', image)
        formData.append('status',status )
        formData.append('useremail',user.email )
        formData.append('username',user.displayName )
        fetch(`http://localhost:4000/blogs`, {
            method: "POST",
            body: formData
        })
            .then((res) => res.json())
            .then((result) => {
                reset()
            });
    }
    return (
        <div className="w-50 mx-auto mb-5">
        <form className="row " onSubmit={handleSubmit(onSubmit)}>
                               <p className="product-details">Blogs Update </p>
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Blogs Title</label>
                                   <input type="title" className="form-control"   {...register("title", { required: true })} />
                               </div>
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Subtitle</label>
                                   <textarea  type="Categories" className="form-control"  {...register("subtitle", { required: true })} />
                               </div>
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Categories</label>
                                   <input  type="Categories" className="form-control"  {...register("category", { required: true })} />
                               </div>
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Location</label>
                                   <input type="text" className="form-control"   {...register("Location", { required: true })} />
                               </div>
                        
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Cost</label>
                                   <input type="number" className="form-control"  {...register("cost", { required: true })} />
                               </div>
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Blogs description</label>
                                   <textarea id="w3review" name="w3review" rows="4" cols="50"className="form-control"   {...register("dec", { required: true })} />
                               </div>
                   
                               <div className="col-md-12 mb-2">
                                   <label className="form-label">Rating </label>
                                   <input type="number"className="form-control"  {...register("rating", { required: true })} />
                               </div>
                   
                               <div className="col-md-12 mt-5">
                                   <label className="form-label">Upload Image </label>
                                   <input type="file" className="form-control " accept='image/*' id="inputCity" ref={fileInput}  required/>
                               </div>
                              
                   

                               <div className="col-12 mt-3">
                                   <input type="submit" value="Submit" className="btn btn-primary" />

                               </div>
                           </form>
   </div>
    );
}

export default UseraddBlogs;