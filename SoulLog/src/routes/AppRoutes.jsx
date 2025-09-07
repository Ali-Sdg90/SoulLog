import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../constants/routes";
import { Spin } from "antd";

const AppRoutes = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <Spin
                        size="large"
                        className="loading-token-spinner full-page-loading"
                    />
                }
            >
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRoutes;
