import React from "react";
import Sidebar from "../../Sidebar/sidebar";

function AdminLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout