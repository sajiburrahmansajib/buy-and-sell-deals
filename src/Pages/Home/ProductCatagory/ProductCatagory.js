import React from 'react';
import samsung from '../../../Assets/Images/samsung.png'
import oppo from '../../../Assets/Images/oppo.jpg'
import oneplus from '../../../Assets/Images/oneplus.png'
import realme from '../../../Assets/Images/realme.png'
import xiamoi from '../../../Assets/Images/xiaomi.png'
import vivo from '../../../Assets/Images/vivo.jpg'
import { Link } from 'react-router-dom';

const ProductCatagory = () => {

    return (
        <div className='grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-7'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={samsung} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Samsung</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productcatagory/Samsung`}><button className="btn btn-primary">All phones</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={oppo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Oppo</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productcatagory/Oppo`}><button className="btn btn-primary">All phones</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={vivo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Vivo</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productcatagory/Vivo`}><button className="btn btn-primary">All phones</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={oneplus} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">OnePlus</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productcatagory/OnePlus`}><button className="btn btn-primary">All phones</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={xiamoi} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">xiaomi</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productcatagory/Xiaomi`}><button className="btn btn-primary">All phones</button></Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={realme} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Realme</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productcatagory/Realme`}><button className="btn btn-primary">All phones</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCatagory;