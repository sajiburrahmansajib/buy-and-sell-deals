import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FcApproval } from "react-icons/fc";

const PhoneDetails = ({ phone, setPhoneSelected, handleReport }) => {

    const { data: users = [] } = useQuery({
        queryKey: [phone],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/${phone.userEmail}`);
            const data = await res.json();
            return data
        }
    });


    return (
        <div className="card lg:card-side bg-base-100 lg:w-1/2 mx-auto mb-8 shadow-xl">
            <figure><img src={phone.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{phone.productName}</h2>
                <p>{phone.sellerMessage}</p>
                <div>
                    <div>
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src={phone.userImage} alt="Tailwind-CSS-Avatar-component" />
                            </div>
                            {
                                users?.verification === 'Verified' &&
                                <FcApproval className='ml-4 text-2xl'></FcApproval>
                            }
                        </div>
                        <div>
                            <p className='text-2xl text-green-700'>Seller Name : {phone.userName}</p>
                        </div>
                    </div>

                    <p>Post Time : {phone.postTime}</p>
                    <p>Brand Name : {phone.brandName}</p>
                    <p>Condition : {phone.condition}</p>
                    <p>Location : {phone.location}</p>
                    <p>Resale Price : {phone.resalePrice}</p>
                    <p>Used Year : {phone.usedYear}</p>
                    <p>Original Price : {phone.originalPrice}</p>
                </div>
                <div className="card-actions justify-end">
                    {/* The button to open modal */}
                    <label htmlFor="report-modal" onClick={() => handleReport(users, phone)} className="btn btn-primary">Report</label>

                    {/* The button to open modal */}
                    <label onClick={() => setPhoneSelected(phone)} htmlFor="booking-modal" className="btn">Book Now</label>

                    {/* Put this part before </body> tag */}

                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;