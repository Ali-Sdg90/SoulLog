import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import AnalysisPage from "../pages/AnalysisPage";

// const HomePage = lazy(() => import("../pages/HomePage"));
// const AnalysisPage = lazy(() => import("../pages/AnalysisPage"));
// const SettingsPage = lazy(() => import("../pages/SettingsPage"));

export const routes = [
    // { path: "/login", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/analysis", element: <AnalysisPage /> },
    { path: "/settings", element: <SettingsPage /> },
    // { path: "/", element: <Navigate to="/login" replace /> },
    { path: "/", element: <Navigate to="/home" replace /> },
    // { path: "/page-not-found", element: <PageNotFound /> },
    // { path: "*", element: <Navigate to="/page-not-found" replace /> },
];
