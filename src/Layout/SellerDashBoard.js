import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const SellerDashBoard = () => {

    const sellerMenus = <>

        <li><Link to='/sellerDashboard/addProduct'>Add Product</Link></li>
        <li><Link to='/sellerDashboard/products'>My Products</Link></li>
        <li><Link to='/sellerDashboard/addProduct'>My buyers</Link></li>

    </>
    return (
        <div>
            <Header></Header>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Seller Dashboard</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {sellerMenus}
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {sellerMenus}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SellerDashBoard;