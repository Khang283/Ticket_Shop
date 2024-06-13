import React from "react";

import PublicRoutes from "./PublicRoutes/publicRoutes";
import PrivateRoutes from "./PrivateRoutes/privateRoutes";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout/defaultLayout";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import UserLayout from "../components/Layout/UserLayout/userLayout";
import UserContent from "../pages/UserProfile/UserProf";
export default function AppRoutes() {


    return (

        <div className="App">
            <PublicRoutes />
            <PrivateRoutes />
        </div>
    )
}