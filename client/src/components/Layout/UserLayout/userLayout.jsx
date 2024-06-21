import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

function UserLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout