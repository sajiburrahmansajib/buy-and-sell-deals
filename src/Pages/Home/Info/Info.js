import React from 'react';
import image from '../../../Assets/Images/mobile.jpg'

const Info = () => {
    return (
        <div>
            <div className="hero bg-base-200 mb-8 mt-24">
                <div className="hero-content flex-col lg:flex-row gap-14">
                    <img src={image} alt='mobile feature' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Our Mobile apps  is coming sooon</h1>
                        <p className="py-6">Mobile apps are software applications designed to run on mobile devices such as smartphones and tablet computers. While they may be small in functionality (but don't have to be), they deliver a high-quality service or experience to users.</p>
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;