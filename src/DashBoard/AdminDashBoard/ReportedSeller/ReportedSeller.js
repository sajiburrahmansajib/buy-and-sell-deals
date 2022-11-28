import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedSeller = () => {

    const { data: reports = [] } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/admin/reports');
            const data = await res.json();
            return data
        }
    });
    return (
        <div>


            {
                reports.length === 0 ? <h1 className='text-center mt-14 text-4xl text-red-600 font-bold'>No Report found  !!!</h1> :

                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>Report Number</th>
                                    <th>Seller Name</th>
                                    <th>Seller Product Name</th>
                                    <th>Reported User</th>
                                    <th>Reported Message</th>
                                    <th>reportTime</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reports.map((report, i) => <tr>
                                        <th>{i + 1}</th>
                                        <td>{report.seller}</td>
                                        <td>{report.productName}</td>
                                        <td>{report.reportedUser}</td>
                                        <td>{report.reportMessage}</td>
                                        <td>{report.reportTime}</td>

                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
            }


        </div>
    );
};

export default ReportedSeller;