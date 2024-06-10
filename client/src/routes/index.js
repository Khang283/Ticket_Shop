import DefaultLayout from "../components/Layout/DefaultLayout/defaultLayout";
import AdminLayout from "../components/Layout/AdminLayout/adminLayout";
import UserLayout from "../components/Layout/UserLayout/userLayout";

import LoginPage from "../pages/LoginPage/loginPageIndex";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import RegisterPage from "../pages/RegisterPage/registerPageIndex";


const publicRoutes = [
    { path: "/", component: LoginPage, layout: UserLayout },
    { path: "/login", component: LoginPage, layout: UserLayout },
];

const privateRoutes = [
    { path: "/register", component: RegisterPage, layout: UserLayout },
];




export { publicRoutes, privateRoutes };