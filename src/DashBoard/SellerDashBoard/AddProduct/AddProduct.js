import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const imageBBHostKey = process.env.REACT_APP_Imgbb_Key;


    const handleAddProduct = (data) => {
        const d = new Date();
        let time = d.toLocaleString();
        console.log(data)
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageBBHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const productInfo = {
                        productName: data.productName,
                        brandName: data.brandName,
                        condition: data.condition,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        usedYear: data.yearOfUse,
                        userEmail: user?.email,
                        userName: user?.displayName,
                        userImage: user?.photoURL,
                        postTime: time,
                        image: imgData.data.url,
                        sellerMessage: data.message
                    }
                    saveProduct(productInfo)

                }
            })
    }

    const saveProduct = (productData) => {
        fetch('http://localhost:5000/sellerDashboard/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Successfully Added');
            })
    }



    return (
        <div className='h-[900px] flex justify-center items-center'>
            <div className='p-7'>
                <h2 className='text-xl text-center'>Add Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full  flex flex-row gap-24">
                        <div>
                            <label className="label"> <span className="label-text">Product name</span></label>
                            <input type="text" {...register("productName", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Picture</span></label>
                            <input type="file" {...register("picture", {
                                required: "Picture is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="form-control w-full  flex flex-row gap-24">
                        <div>
                            <label className="label"> <span className="label-text">Resale price</span></label>
                            <input type="text" {...register("resalePrice", {
                                required: "Resale price is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Original price</span></label>
                            <input type="text" {...register("originalPrice", {
                                required: "Original Price is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="form-control w-full  flex flex-row gap-24">
                        <div>
                            <label className="label"> <span className="label-text">Years of use</span></label>
                            <input type="text" {...register("yearOfUse", {
                                required: "yearOfUse is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Location</span></label>
                            <select defaultValue='Choose One' {...register("location", {
                                required: 'Location is Required'
                            })}
                                className="select select-bordered w-full">
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Barisal</option>
                                <option>Khulna</option>
                                <option>Mymensingh</option>
                                <option>Rajshahi</option>
                                <option>Sylhet</option>
                                <option>Rangpur</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-full  flex flex-row gap-24">
                        <div>
                            <label className="label"> <span className="label-text">Condition type</span></label>
                            <select defaultValue='Choose One' {...register("condition", {
                                required: 'role is Required'
                            })}
                                className="select select-bordered w-full">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Brand Name</span></label>
                            <select defaultValue='samsung' {...register("brandName", {
                                required: 'Brand Name is Required'
                            })}
                                className="select select-bordered w-full">
                                <option>Samsung</option>
                                <option>Oppo</option>
                                <option>Vivo</option>
                                <option>OnePlus</option>
                                <option>Realme</option>
                                <option>Xiaomi</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea   {...register("message", {
                                required: 'Message is Required'
                            })}
                                className="textarea textarea-bordered h-24" placeholder=""></textarea>

                        </div>
                    </div>
                    <input className='btn bg-cyan-500 w-full mt-4' value="Submit" type="submit" />

                </form>


            </div >
        </div >
    );
};

export default AddProduct;