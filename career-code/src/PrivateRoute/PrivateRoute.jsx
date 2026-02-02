
import React, { use } from 'react'
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
   
    const {user} = use(AuthContext)
    const {pathname} = useLocation()
    if (!user) {
    return <Navigate to={"/login"} state={pathname}/>
    }
    return children;
}

export default PrivateRoute;
