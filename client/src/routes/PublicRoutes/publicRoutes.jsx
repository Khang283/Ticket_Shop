import React from "react";

import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "..";

export default function PublicRoutes() {
    return (
        <>
            <Routes>
                {publicRoutes.map((route, index) => {
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