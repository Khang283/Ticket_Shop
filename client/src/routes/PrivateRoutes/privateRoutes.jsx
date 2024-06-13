import React from "react";

import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "..";
import AuthGuard from "../AuthGuard/AuthGuard";
export default function PrivateRoutes() {

    return (
        <>
            <Routes>
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = route.layout;
                    return (
                        <Route exact element={<AuthGuard />}>
                            <Route
                                key={index}
                                path={route.path}
                                element={

                                    <Layout>
                                        <Page />
                                    </Layout>



                                }
                            /></Route>
                    );
                })}
            </Routes>
        </>
    )


}