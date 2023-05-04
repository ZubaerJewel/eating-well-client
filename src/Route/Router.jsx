import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Login from "../LoginReg/Login";
import Registration from "../LoginReg/Registration";
import PrivateRoute from "./PrivateRoute";
import LoginLayout from "../Layout/LoginLayout";
import ViewRecipe from "../Pages/ViewRecipe";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import ErrorPage from "../Shared/ErrorPage";
 

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
     
                loader:()=>fetch('https://eating-well-server-zubaerjewel.vercel.app/chef/')
            },
            {
                path:'/viewRecipe/:id',
                element: <PrivateRoute><ViewRecipe></ViewRecipe> </PrivateRoute>  ,
                loader:({params})=>fetch(`https://eating-well-server-zubaerjewel.vercel.app/chef/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    },

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            }
        ]
    }
])

export  default router;