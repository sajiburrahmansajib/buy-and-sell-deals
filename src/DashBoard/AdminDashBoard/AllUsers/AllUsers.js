import { useQuery } from '@tanstack/react-query';
import { FaTrash } from "react-icons/fa";
import React from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";

const AllUsers = () => {
    // const { data: allUser = [], refetch } = useQuery({
    //     queryKey: [''],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/allUsers');
    //         const data = await res.json();
    //         return data
    //     }
    // });


    const { data: allUser = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/allUsers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleMakeSeller = (id) => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Seller Successful.')
                    refetch();
                }
            })
    };

    const handleVerifyUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User Verification Successful.')
                    refetch();
                }
            })
    }



    return (
        <div className="overflow-x-auto mt-7">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>

                        <th>Option</th>
                        <th>Make Seller</th>
                        <th><FcApproval className='text-4xl'></FcApproval></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((user, i) => user.role !== 'Admin' && <tr>
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-20 rounded">
                                        <img src={user.image} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>
                                <FaTrash className='text-2xl text-red-600'></FaTrash>
                            </td>
                            <td>{user?.role === 'Seller' ? user.role : <button onClick={() => handleMakeSeller(user._id)} className="btn btn-sm">Make Seller</button>}</td>
                            <td>
                                {
                                    user?.verification ? <h1 className='text-xl text-success'>{user?.verification}</h1> : <button onClick={() => handleVerifyUser(user._id)} className='btn btn-xs btn-accent'>Verify User</button>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;