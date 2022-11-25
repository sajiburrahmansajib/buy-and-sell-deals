import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import PhoneDetails from './PhoneDetails';

const Phones = () => {
    const data = useLoaderData();
    const [phoneSelected, setPhoneSelected] = useState(null);
    return (
        <div className='mb-7 mt-7'>
            {
                data.map(d => <PhoneDetails
                    phone={d}
                    setPhoneSelected={setPhoneSelected}
                ></PhoneDetails>)
            }
            {
                phoneSelected &&
                <BookingModal
                    phoneSelect={phoneSelected}
                ></BookingModal>

            }

        </div>
    );
};

export default Phones;