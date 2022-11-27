import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Buyer = () => {
    const { user } = useContext(AuthContext);

    const { data: buyerData = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerDashboard/buyer?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });

    console.log(buyerData)


    return (
        < div className="overflow-x-auto mt-16" >
            {
                buyerData.length === 0 ? <h1 className='text-3xl font-bold text-center text-red-700'>You don't post any product</h1> :

                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                buyerData.map((product, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>{product.buyerName}</td>
                                    <td>{product.buyerEmail}</td>
                                    <td>{product.buyerPhone}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div >
    );
};

export default Buyer;