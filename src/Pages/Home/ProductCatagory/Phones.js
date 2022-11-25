import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneDetails from './PhoneDetails';

const Phones = () => {
    const data = useLoaderData();
    return (
        <div className='mb-7 mt-7'>
            {
                data.map(d => <PhoneDetails
                    phone={d}
                ></PhoneDetails>)
            }

        </div>
    );
};

export default Phones;