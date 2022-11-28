import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import PhoneDetails from './PhoneDetails';
import ReportModal from './ReportModal';

const Phones = () => {
    // const data = useLoaderData();
    const [phoneSelected, setPhoneSelected] = useState(null);
    const [reportUser, setReportUser] = useState(null);
    const [reportProduct, setReportProduct] = useState(null);
    const url = window.location.href;
    const n = url.split('/');
    const catagory = n[4];

    const { data: phones = [], refetch } = useQuery({
        queryKey: ['phoneSelected', url],
        queryFn: async () => {
            const res = await fetch(`https://buy-and-sell-deals-server.vercel.app/productcatagory/${catagory}`);
            const data = await res.json();
            return data
        }
    });

    const handleReport = (user, product) => {
        setReportUser(user);
        setReportProduct(product)
    }
    // console.log(phones)
    return (
        <div className='mb-7 mt-7'>
            {
                phones.map(d => <PhoneDetails
                    phone={d}
                    setPhoneSelected={setPhoneSelected}
                    handleReport={handleReport}
                ></PhoneDetails>)
            }
            {
                phoneSelected &&
                <BookingModal
                    phoneSelect={phoneSelected}
                    refetch={refetch}
                ></BookingModal>

            }
            {
                reportUser &&
                <ReportModal
                    reportUser={reportUser}
                    reportProduct={reportProduct}
                ></ReportModal>

            }

        </div>
    );
};

export default Phones;