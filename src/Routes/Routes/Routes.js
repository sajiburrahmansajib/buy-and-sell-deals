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
        element: <SellerDashBoard></SellerDashBoard>,
        children: [
            {
                path: '/sellerDashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/sellerDashboard/products',
                element: <SellerProduct></SellerProduct>
            },
            {
                path: '/sellerDashboard/MyBuyers',
                element: <Buyer></Buyer>
            },
        ]
    },
    {
        path: '/adminDashboard',
        element: <AdminDashBoard></AdminDashBoard>,
        children: [
            {
                path: '/adminDashboard/users',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/adminDashboard/products',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/adminDashboard/reportedSeller',
                element: <ReportedSeller></ReportedSeller>
            }
        ]
    },
    {
        path: '/buyerDashboard',
        element: <BuyerDashBoard></BuyerDashBoard>,
        children: [
            {
                path: '/buyerDashboard/bookedItems',
                element: <BookedItems></BookedItems>
            }
        ]
    }

])

export default Routes;