import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../../DashBoard/SellerDashBoard/AddProduct/AddProduct';
import SellerProduct from '../../DashBoard/SellerDashBoard/SellerProduct';
import Main from '../../Layout/Main';
import SellerDashBoard from '../../Layout/SellerDashBoard';
import Login from '../../Pages/Authentication/Login/Login';
import Signup from '../../Pages/Authentication/Signup/Signup';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';

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
            }
        ]
    }

])

export default Routes;