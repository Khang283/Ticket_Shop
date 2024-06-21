import DefaultLayout from "../components/Layout/DefaultLayout/defaultLayout";
import AdminLayout from "../components/Layout/AdminLayout/adminLayout";
import UserLayout from "../components/Layout/UserLayout/userLayout";

import LoginPage from "../pages/LoginPage/loginPageIndex";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import RegisterPage from "../pages/RegisterPage/registerPageIndex";
import Booking from "../views/booking/Booking";
import BookingQR from "../views/booking_QR/BookingQR";
import Receipt from "../views/receipt/Receipt";
import UserContent from "../pages/UserProfile/UserProf"; 
import BookingPreview from "../pages/Booking/BookingPreview";
import Receipts from "../views/admin/receipt/Receipts";

import User from "../views/User/User";
import Dashboard from "../views/dashboard/Dashboard";

const publicRoutes = [
    { path: "/", component: NotFoundPage, layout: UserLayout },
    { path: "/home", component: NotFoundPage, layout: UserLayout },
    { path: "/about", component: NotFoundPage, layout: UserLayout },
    { path: "/login", component: LoginPage, layout: DefaultLayout },
    // { path: "/booking", component: Booking, layout: UserLayout },
    { path: "/contact", component: NotFoundPage, layout: UserLayout },
    { path: "/register", component: RegisterPage, layout: DefaultLayout },
    { path: "/setting", component: NotFoundPage, layout: UserLayout },
    { path: "/profile", component: UserContent, layout: UserLayout },
    { path: "/register", component: RegisterPage, layout: UserLayout },
];

const privateRoutes = [
    { path: "/user", component: User, layout: AdminLayout },
    { path: "/ticket", component: NotFoundPage, layout: AdminLayout },
    // { path: "/admin", component: NotFoundPage, layout: AdminLayout },
    { path: "/dashboard", component: Dashboard, layout: AdminLayout },
    { path: "/booking", component: Booking, layout: UserLayout },
    { path: "/bookingQR", component: BookingQR, layout: UserLayout },
    { path: "/receipts/:id", component: Receipt, layout: UserLayout },
    // { path: "/user", component: UserContent, layout: UserLayout },
    { path: "/booking-preview", component: BookingPreview, layout: UserLayout },
    
    { path: "/receipts", component: Receipts, layout: AdminLayout},
];

export { publicRoutes, privateRoutes };
