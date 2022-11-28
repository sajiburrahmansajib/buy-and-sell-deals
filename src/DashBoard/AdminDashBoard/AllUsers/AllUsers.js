import { useQuery } from '@tanstack/react-query';
import { FaTrash } from "react-icons/fa";
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcApproval } from "react-icons/fc";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const AllUsers = () => {
    const { userDelete } = useContext(AuthContext);
    useTitle('Users');

    const { data: allUser = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            try {
                const res = await fetch('https://buy-and-sell-deals-server.vercel.app/allUsers', {
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
        fetch(`https://buy-and-sell-deals-server.vercel.app/users/seller/${id}`, {
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
        fetch(`https://buy-and-sell-deals-server.vercel.app/users/${id}`, {
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
    };

    const handleDeleteUser = (email) => {
        userDelete(email)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
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
                        allUser.map((user, i) => user.role !== 'Admin' && <tr key={user._id}>
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
                                <FaTrash onClick={() => handleDeleteUser(user.email)} className='text-2xl text-red-600 cursor-pointer'></FaTrash>
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