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

const publicRoutes = [
    { path: "/", component: LoginPage, layout: UserLayout },
    { path: "/login", component: LoginPage, layout: UserLayout },
];

const privateRoutes = [
    { path: "/register", component: RegisterPage, layout: UserLayout },
    { path: "/booking", component: Booking, layout: UserLayout },
    { path: "/bookingQR", component: BookingQR, layout: UserLayout },
    { path: "/receipts/:id", component: Receipt, layout: UserLayout },
    { path: "/user", component: UserContent, layout: UserLayout },
    { path: "/booking-preview", component: BookingPreview, layout: UserLayout },
];

export { publicRoutes, privateRoutes };
