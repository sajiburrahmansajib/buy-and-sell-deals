import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken';
import useTitle from '../../../hooks/useTitle';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    useTitle('SignUp');
    const [signUpError, setSignUPError] = useState('');
    const { createUser, updateUserInformation } = useContext(AuthContext);
    const imageBBHostKey = process.env.REACT_APP_Imgbb_Key;

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        const { email, password, name, role } = data;
        console.log(data)
        const image = data.image[0];
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
                    const userInfo = {
                        displayName: data.name,
                        photoURL: imgData.data.url
                    }
                    createUser(email, password)
                        .then(() => {
                            updateUserInformation(userInfo)
                                .then(() => {
                                    saveUser(name, email, imgData.data.url, role)
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        })
                        .catch(error => {
                            console.log(error);
                            setSignUPError(error.message)
                        })
                }
            })
    }


    const saveUser = (name, email, image, role) => {
        const user = { name, email, image, role };
        fetch('https://buy-and-sell-deals-server.vercel.app/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)
                toast.success('Successfully Sign Up');
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: 'Email is Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Image</span></label>
                        <input type="file" {...register("image", {
                            required: 'Image is Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.file && <p className='text-red-500'>{errors.file.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Are you </span></label>
                        <select defaultValue='Choose One' {...register("role", {
                            required: 'role is Required'
                        })}
                            className="select select-bordered w-full max-w-xs">

                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>


                        {errors.file && <p className='text-red-500'>{errors.file.message}</p>}
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-cyan-500 w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;