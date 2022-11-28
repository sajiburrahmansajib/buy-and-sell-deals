import { createBrowserRouter } from 'react-router-dom';
import AllProducts from '../../DashBoard/AdminDashBoard/AllProducts/AllProducts';
import AllUsers from '../../DashBoard/AdminDashBoard/AllUsers/AllUsers';
import ReportedSeller from '../../DashBoard/AdminDashBoard/ReportedSeller/ReportedSeller';
import BookedItems from '../../DashBoard/BuyerDashBoard/BookedItems';
import AddProduct from '../../DashBoard/SellerDashBoard/AddProduct/AddProduct';
import Buyer from '../../DashBoard/SellerDashBoard/Buyer';
import SellerProduct from '../../DashBoard/SellerDashBoard/SellerProduct';
import AdminDashBoard from '../../Layout/AdminDashBoard';
import BuyerDashBoard from '../../Layout/BuyerDashBoard';
import Main from '../../Layout/Main';
import SellerDashBoard from '../../Layout/SellerDashBoard';
import Login from '../../Pages/Authentication/Login/Login';
import Signup from '../../Pages/Authentication/Signup/Signup';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Phones from '../../Pages/Home/ProductCatagory/Phones';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/productcatagory/:brandName',
                element: <Phones></Phones>,
            }
        ]
    },
    {
        path: '/sellerDashboard',
        element: <SellerRoute><SellerDashBoard></SellerDashBoard></SellerRoute>,
        children: [
            {
                path: '/sellerDashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/sellerDashboard/products',
                element: <SellerRoute><SellerProduct></SellerProduct></SellerRoute>
            },
            {
                path: '/sellerDashboard/MyBuyers',
                element: <SellerRoute><Buyer></Buyer></SellerRoute>
            },
        ]
    },
    {
        path: '/adminDashboard',
        element: <AdminRoute><AdminDashBoard></AdminDashBoard></AdminRoute>,
        children: [
            {
                path: '/adminDashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/adminDashboard/products',
                element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
            },
            {
                path: '/adminDashboard/reportedSeller',
                element: <AdminRoute><ReportedSeller></ReportedSeller></AdminRoute>
            }
        ]
    },
    {
        path: '/buyerDashboard',
        element: <BuyerDashBoard></BuyerDashBoard>,
        children: [
            {
                path: '/buyerDashboard/bookedItems',
                element: <PrivateRoute><BookedItems></BookedItems></PrivateRoute>
            }
        ]
    }

])

export default Routes;