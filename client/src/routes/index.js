import DefaultLayout from "../components/Layout/DefaultLayout/defaultLayout";
import AdminLayout from "../components/Layout/AdminLayout/adminLayout";
import UserLayout from "../components/Layout/UserLayout/userLayout";

import LoginPage from "../pages/LoginPage/loginPageIndex";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import RegisterPage from "../pages/RegisterPage/registerPageIndex";
import Booking from "../views/booking/Booking";

import User from "../views/User/User";
import BookingQR from "../views/booking_QR/BookingQR";
import Receipt from "../views/receipt/Receipt";
import UserContent from "../pages/UserProfile/UserProf"; 
import BookingPreview from "../pages/Booking/BookingPreview";
import UserSettings from "../pages/UserProfile/UserSettings";

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
    { path: "/ticket", component: NotFoundPage, layout: AdminLayout },
    { path: "/register", component: RegisterPage, layout: UserLayout },
    { path: "/booking", component: Booking, layout: UserLayout },
    { path: "/bookingQR", component: BookingQR, layout: UserLayout },
    { path: "/receipts/:id", component: Receipt, layout: UserLayout },
    { path: "/user", component: UserContent, layout: UserLayout },
    { path: "/booking-preview", component: BookingPreview, layout: UserLayout },
    { path: "/user-settings", component: UserSettings, layout: UserLayout},
];

export { publicRoutes, privateRoutes };
