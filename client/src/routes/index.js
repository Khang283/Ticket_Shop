import DefaultLayout from "../components/Layout/DefaultLayout/defaultLayout";
import AdminLayout from "../components/Layout/AdminLayout/adminLayout";
import UserLayout from "../components/Layout/UserLayout/userLayout";

import LoginPage from "../pages/LoginPage/loginPageIndex";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import RegisterPage from "../pages/RegisterPage/registerPageIndex";
import Booking from "../views/booking/Booking";

import User from "../views/User/User";

const publicRoutes = [
    { path: "/", component: NotFoundPage, layout: UserLayout },
    { path: "/home", component: NotFoundPage, layout: UserLayout },
    { path: "/about", component: NotFoundPage, layout: UserLayout },
    { path: "/login", component: LoginPage, layout: DefaultLayout },
    { path: "/booking", component: Booking, layout: UserLayout },
    { path: "/contact", component: NotFoundPage, layout: UserLayout },
    { path: "/register", component: RegisterPage, layout: DefaultLayout },
    { path: "/setting", component: NotFoundPage, layout: UserLayout },
    { path: "/profile", component: NotFoundPage, layout: UserLayout },
];

const privateRoutes = [
    { path: "/user", component: User, layout: AdminLayout },
];




export { publicRoutes, privateRoutes };