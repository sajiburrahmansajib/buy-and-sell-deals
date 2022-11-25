import React from 'react';

const PhoneDetails = ({ phone }) => {
    console.log(phone)
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
                    <p>Resale Price : {phone.resalePrice}</p>
                    <p>Resale Price : {phone.resalePrice}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                    <button className="btn btn-primary">Report</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;