import {createBrowserRouter} from "react-router-dom";
import AddAService from "../Component/AddAService/AddAService";
import Login from "../Component/Authentication/Login";
import Register from "../Component/Authentication/Register";
import Blog from "../Component/Blog/Blog";
import Home from "../Component/Home/Home";
import MyReview from "../Component/MyReviews/MyReview";
import Review from "../Component/Review/Review";

import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },{
                path:"/register",
                element:<Register></Register>
            },{
                path:"/add-a-service",
                element:<PrivateRoute><AddAService></AddAService></PrivateRoute>
            },{
                path:"/services/:id",
                element:<Review></Review>,
                loader:({params})=>fetch(`https://service-review-server-lalon147.vercel.app/services/${params.id}`)
            },{
                path:"/my-reviews",
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },{
                path:"/blogs",
                element:<Blog></Blog>
            },
            
           
        ]
    }
])