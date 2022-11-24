import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1>Total data : {data.length}</h1>

        </div>
    );
};

export default Phones;