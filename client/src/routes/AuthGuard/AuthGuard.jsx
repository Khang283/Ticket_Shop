import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ component }) => {
    const auth = (window.localStorage.getItem("accesToken")) ? true : false;

    // If has token, return outlet in other case return navigate to login page
    console.log(component)
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthGuard