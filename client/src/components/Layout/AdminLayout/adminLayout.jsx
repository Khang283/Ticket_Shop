import React from "react";
import Sidebar from "../../Sidebar/sidebar";

function AdminLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div class="p-4 sm:ml-64">
                {children}
            </div>
        </>
    )
}

export default AdminLayout