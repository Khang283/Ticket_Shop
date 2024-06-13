import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { privateRoutes } from "..";

export default function PrivateRoutes() {
    const user = true
    const navigate = useNavigate()
    if (!user) {
        console.log("Navigate to Login Page")
        navigate('./login')
    } else {
        return (
            <>
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = route.layout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={

                                    <Layout>
                                        <Page />
                                    </Layout>

                                }
                            />
                        );
                    })}
                </Routes>
            </>
        )
    }

}