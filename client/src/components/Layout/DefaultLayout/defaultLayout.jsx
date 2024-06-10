import React from "react";

function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout