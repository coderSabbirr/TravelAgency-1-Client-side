import React from 'react';
import { useForm } from 'react-hook-form';
import { useStars } from "stars-rating-react-hooks";
import useAuth from '../../../Hook/useAuth';
import Footer from '../../../Shared/Footer/Footer';

const ReviewForm = () => {
    const{user}= useAuth();
    const { register, handleSubmit, reset, setValue } = useForm();
    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: "★",
        renderEmpty: "☆"
    };

    const { stars, getStarProps, getStarWrapperProps } = useStars(config);

    const onSubmit = (data) => {
        data.name=user.displayName
        data.email=user.email
        fetch('https://young-shore-30046.herokuapp.com/reviews', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {

                reset()
            });
    }

    return (
        <div className="">
            <h3 className="page-title">WRITE A REVIEW</h3>
            <div className="container ">
                <form className="row  addproduct-from" onSubmit={handleSubmit(onSubmit)}>

                    <div className="col-md-6 mt-5">
                        <input type="text" placeholder={user.displayName} className="form-control"
                            disabled />
                    </div>

                    <div className="col-md-6 mt-5">
                        <input type="email" className="form-control" placeholder={user.email}
                          disabled/>
                    </div>

                    <div className="col-md-12">
                        <input type="description" className="form-control h-100" placeholder='Write Feedback'
                            {...register("description", { required: true })} />
                    </div>

                    <div className="col-md-6 text-start">
                        <label className="form-label fs-3 fw-bold mt-3">Rating</label>
                        <span
                            {...getStarWrapperProps({
                                style: {
                                    cursor: "pointer"
                                }
                            })}
                        >
                            {stars?.map((star, i) => (
                                <span
                                    key={i}
                                    {...getStarProps(i, {
                                        style: {
                                            fontSize: "40px",
                                            color: "gold"
                                        },
                                        onClick: (event, ratedValue) => {
                                            setValue("rating", ratedValue, {
                                                shouldValidate: true,
                                                shouldDirty: true
                                            })
                                        }
                                    })}
                                >
                                    {star}
                                </span>
                            ))}
                        </span>


                    </div>

                    <div className="col-12">
                        <input type="submit" value="Submit" className="btn btn-primary" />

                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ReviewForm;
