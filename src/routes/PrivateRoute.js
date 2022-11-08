import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext/UserContext';





const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=useContext(AuthContext);

    if(loading){
        return  <div className='my-10 w-20 h-20 flex items-center justify-center rounded-full bg-blue-800 mx-auto animate-ping'>LOADING</div>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children
   
};

export default PrivateRoute;