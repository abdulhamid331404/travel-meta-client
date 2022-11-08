import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Home/LogIn/LogIn";
import SignUp from "../../pages/Home/SignUp/SignUp";



const router = createBrowserRouter([
    {
       path:'/',
       element: <Main></Main>,
       children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <LogIn></LogIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
       ]
    }
]);

export default router
