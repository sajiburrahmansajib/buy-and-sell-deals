import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const BookedItems = () => {
    const { user } = useContext(AuthContext);

    useTitle('Booked Items')
    const { data: items = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            try {
                const res = await fetch(`https://buy-and-sell-deals-server.vercel.app/buyerDashboard/bookedItems?email=${user?.email}`, {
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
                items.length === 0 ? <h1 className='text-3xl font-bold text-center text-red-700'>You don't have booked any products yet ...</h1> :

                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Brand Name</th>
                                <th>Meeting Point</th>
                                <th>Seller Email</th>
                                <th>Booking Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                items.map((item, i) => <tr>
                                    <th>{i + 1}</th>

                                    <td>{item.productName}</td>
                                    <td>{item.brandName}</td>
                                    <td>{item.meetingPoint}</td>
                                    <td>{item.sellerEmail}</td>
                                    <td>{item.bookingTime}</td>

                                </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div >
    );
};

export default BookedItems;