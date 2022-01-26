import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './AddNewProduct.css';
const fileInput = React.createRef();

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        let image = fileInput.current.files[0]
        const formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]); // formdata doesn't take objects
        }
        formData.append('image', image)
        console.log(data);

        fetch('https://young-shore-30046.herokuapp.com/products', {
            method: "POST",
            body: formData
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire("Product has been added!", "", "Success");
                    reset()
                }
                reset()
            });




    }
    return (
        <div className="add-prodcut">
            <h3 className="page-title">Add Your Product</h3>
            <div className="container ">
                <form className="row  addproduct-from" onSubmit={handleSubmit(onSubmit)}>
                    <p className="product-details">Product Deatils</p>
                    <div className="col-md-12">
                        <label className="form-label">Product Title</label>
                        <input type="title" className="form-control"  {...register("title", { required: true })} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Categories</label>
                        <input type="Categories" className="form-control"  {...register("Categories", { required: true })} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Price </label>
                        <input type="text" className="form-control"   {...register("price", { required: true })} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Products Fetures </label>
                        <input type="text" className="form-control"   {...register("desc1", { required: true })} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control"   {...register("desc2")} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control"   {...register("desc3")} />
                    </div>
                    <div className="col-md-12">

                        <input type="text" className="form-control"   {...register("desc4")} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Upload Image </label>
                        <input type="file" className="form-control " accept='image/*' id="inputCity" ref={fileInput} required />
                    </div>

                    <div className="col-12">
                        <input type="submit" value="Add Product" className="btn btn-primary" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;
