import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
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
                return fetch ('http://localhost:5000/services')
            },
            element: <Home></Home>
        },
        {
            path:'/viewdetails/:id',
            element: <ViewDetails></ViewDetails>,
            loader:({params}) => {
                return fetch( `http://localhost:5000/services/${params.id}`)
            }
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
