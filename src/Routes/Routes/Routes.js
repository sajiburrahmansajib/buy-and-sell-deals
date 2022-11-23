import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
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
    }

])

export default Routes;