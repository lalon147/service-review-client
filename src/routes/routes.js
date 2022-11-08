import {createBrowserRouter} from "react-router-dom";
import AddAService from "../Component/AddAService/AddAService";
import Login from "../Component/Authentication/Login";
import Register from "../Component/Authentication/Register";
import Home from "../Component/Home/Home";
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
            }
           
        ]
    }
])