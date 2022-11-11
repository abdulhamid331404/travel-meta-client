import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllServices from "../../pages/Home/AllServices/AllServices";
import Home from "../../pages/Home/Home";
import LogIn from "../../pages/Home/LogIn/LogIn";
import SignUp from "../../pages/Home/SignUp/SignUp";
import ViewDetails from "../../pages/ViewDetails/ViewDetails";



const router = createBrowserRouter([
    {
       path:'/',
       element: <Main></Main>,
       children:[
        {
            path:'/',
            loader: async ()=> {
                return fetch ( 'https://travel-meta-server.vercel.app/services ')
            },
            element: <Home></Home>
        },
        {
            path:'/viewdetails/:id',
            element: <ViewDetails></ViewDetails>,
            loader:({params}) => {
                return fetch( `https://travel-meta-server.vercel.app/services/${params.id}`)
            }
        },
        {
            path:'/login',
            element: <LogIn></LogIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/allservices',
            loader: async ()=> {
                return fetch ( 'https://travel-meta-server.vercel.app/services ')
            },
            element: <AllServices></AllServices>
        }
       ]
    }
]);

export default router
