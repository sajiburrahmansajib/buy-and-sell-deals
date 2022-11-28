import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../../../Assets/logo/logo.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Log Out');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        {
            isAdmin &&
            <li><Link to="/adminDashboard">Admin DashBoard</Link></li>
        }
        {
            isSeller &&
            <li><Link to="/sellerDashboard">Seller DashBoard</Link></li>
        }
        {
            user?.uid && !isAdmin && !isSeller &&
            <li><Link to="/buyerDashboard">Buyer DashBoard</Link></li>
        }

    </>

    const userItems = <>
        {
            user?.uid ?
                <li>
                    <li onClick={handleLogOut}>Log Out</li>
                </li>
                :
                <>
                    <li><Link to="/login">LogIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">

                    <img src={logo} alt="website main logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end  md:mr-1 lg:mr-6 p-3">
                <div className="dropdown">
                    <label tabIndex={1}>
                        <div className="avatar online">
                            <div className="w-14 rounded-full cursor-pointer">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-4 -ml-24 p-2 shadow bg-base-100 rounded-box w-52">
                        {userItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;