import { useQuery } from '@tanstack/react-query';
import { FaTrash } from "react-icons/fa";
import React from 'react';

const AllUsers = () => {
    const { data: allUser = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers');
            const data = await res.json();
            return data
        }
    });
    console.log('admin', allUser)



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
                            <td>{user?.role === 'Seller' ? user.role : <button className="btn btn-sm">Make Seller</button>}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;