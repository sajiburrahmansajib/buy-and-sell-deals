import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';

const AllProducts = () => {


    const { data: products = [], refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data
        }
    });

    const handleDeleteProduct = (id) => {
        const accept = window.confirm('Are you sure , You want to delete this Product');
        if (accept) {
            fetch(`http://localhost:5000/product${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error("Successfully Delete")
                        refetch();
                    }
                })
        }
    }

    console.log('all product', products)
    return (
        <div className="overflow-x-auto mt-7">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Brand Name</th>
                        <th>Phone Name</th>
                        <th>Seller Info</th>
                        <th>Post Date</th>
                        <th>Option</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) => <tr>
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-20 rounded">
                                        <img src={product.image} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </td>
                            <td>{product.brandName}

                            </td>
                            <td>{product.productName}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-12 rounded">
                                        <img src={product.userImage} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <br />
                                {product.userName} <br />
                                {product.userEmail}
                            </td>
                            <td>{product.postTime}</td>

                            <td>
                                <FaTrash onClick={() => handleDeleteProduct(product._id)} className='text-2xl text-red-600'></FaTrash>
                            </td>


                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;