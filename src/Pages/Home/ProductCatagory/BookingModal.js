import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ phoneSelect, refetch }) => {
    // console.log('phonemodal', phoneSelect);
    const { user } = useContext(AuthContext);
    const { _id, brandName, productName, userEmail } = phoneSelect;


    const handleBooked = (event) => {
        event.preventDefault();
        const d = new Date();
        let time = d.toLocaleString();
        const form = event.target;
        const buyerEmail = form.userEmail.value;
        const buyerName = form.userName.value;
        const meetingPoint = form.meetingPoint.value;
        const buyerPhone = form.userPhone.value;
        // console.log(userEmail, userName, meetingPoint, userPhone)

        const booking = {
            productName: productName,
            brandName: brandName,
            buyerEmail,
            buyerName,
            meetingPoint,
            buyerPhone,
            productId: _id,
            sellerEmail: userEmail,
            bookingTime: time
        }

        fetch('https://buy-and-sell-deals-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    fetch(`https://buy-and-sell-deals-server.vercel.app/user/booking/${_id}`, {
                        method: 'PUT',
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                toast.success('Booking confirmed');
                                refetch();
                                form.reset();

                            }
                        })

                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-pink-600 mb-4">{phoneSelect.productName}</h3>
                    <form onSubmit={handleBooked}>
                        <input type="text" name='userEmail' defaultValue={user?.email} readOnly disabled className="input input-bordered w-full max-w-xs mb-4" />
                        <input type="text" name='userName' defaultValue={user?.displayName} readOnly disabled className="input input-bordered w-full max-w-xs mb-4" />
                        <label className="label">
                            <span className="label-text">Meeting Point</span>
                        </label>
                        <input type="text" name='meetingPoint' placeholder="Type here" required className="input input-bordered w-full max-w-xs mb-4" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='userPhone' placeholder="Type here" required className="input input-bordered w-full max-w-xs mb-4" />
                        <br />
                        <button className='btn btn-success' type="submit">Book</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;