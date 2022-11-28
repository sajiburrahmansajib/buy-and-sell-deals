import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SellerProduct = () => {
    const { user } = useContext(AuthContext);
    useTitle('My Products')


    const { data: productData = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            try {
                const res = await fetch(`https://buy-and-sell-deals-server.vercel.app/sellerDashboard/products?email=${user?.email}`, {
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


    return (
        < div className="overflow-x-auto mt-16" >
            {
                productData.length === 0 ? <h1 className='text-3xl font-bold text-center text-red-700'>You don't post any product</h1> :

                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Brand</th>
                                <th>Selling Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                productData.map((product, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded">
                                                <img src={product.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>{product.brandName}</td>
                                    <td>{product.resalePrice}</td>
                                    <td>Pending</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div >


    );

};

export default SellerProduct;