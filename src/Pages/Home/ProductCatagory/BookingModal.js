import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ phoneSelect }) => {
    console.log('phonemodal', phoneSelect);
    const { user } = useContext(AuthContext);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-pink-600 mb-4">{phoneSelect.productName}</h3>
                    <form>
                        <input type="text" defaultValue={user?.email} readOnly disabled className="input input-bordered w-full max-w-xs mb-4" />
                        <input type="text" defaultValue={user?.displayName} readOnly disabled className="input input-bordered w-full max-w-xs mb-4" />
                        <label className="label">
                            <span className="label-text">Meeting Point</span>
                        </label>
                        <input type="text" placeholder="Type here" required className="input input-bordered w-full max-w-xs mb-4" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder="Type here" required className="input input-bordered w-full max-w-xs mb-4" />

                        <button type="submit">Book</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;