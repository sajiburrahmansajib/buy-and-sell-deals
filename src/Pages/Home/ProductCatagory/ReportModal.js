import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ReportModal = ({ reportUser, reportProduct }) => {
    console.log(reportUser)
    console.log(reportProduct)
    const { user } = useContext(AuthContext);

    const handleReport = (event) => {
        event.preventDefault();

        const d = new Date();
        let time = d.toLocaleString();
        const form = event.target;
        const message = form.message.value;

        const report = {
            // productName: productName,
            reportMessage: message,
            reportTime: time,
            reportedUser: user?.email,
            seller: reportUser.email,
            productName: reportProduct.productName
        }

        fetch('https://buy-and-sell-deals-server.vercel.app/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Report Submitted , Thanks for informing us... ');
                    form.reset();
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl text-red-600 font-bold mb-6">Report This User or Product</h3>
                    <p><span className='text-xl text-red-900 font-bold'>User : </span> {reportUser?.email}</p>
                    <p className='mb-5'> <span className='text-xl text-red-900 font-bold'>Product Name : </span> {reportProduct?.productName}</p>

                    <form onSubmit={handleReport}>

                        <input name='message' type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />

                        <br />
                        <br />
                        <button className='btn btn-secondary' type="submit">Submit</button>
                    </form>

                </div>
            </div>

        </>
    );
};

export default ReportModal;