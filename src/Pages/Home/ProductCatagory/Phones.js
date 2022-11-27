import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import PhoneDetails from './PhoneDetails';

const Phones = () => {
    // const data = useLoaderData();
    const [phoneSelected, setPhoneSelected] = useState(null);
    const url = window.location.href;
    const n = url.split('/');
    const catagory = n[4];

    const { data: phones = [], refetch } = useQuery({
        queryKey: ['phoneSelected', url],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/productcatagory/${catagory}`);
            const data = await res.json();
            return data
        }
    });
    console.log(phones)
    return (
        <div className='mb-7 mt-7'>
            {
                phones.map(d => <PhoneDetails
                    phone={d}
                    setPhoneSelected={setPhoneSelected}
                ></PhoneDetails>)
            }
            {
                phoneSelected &&
                <BookingModal
                    phoneSelect={phoneSelected}
                    refetch={refetch}
                ></BookingModal>

            }

        </div>
    );
};

export default Phones;