import { lazy } from "react";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./middlewares/ProtectedRoute";

// lazy load pages for code splitting
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CallbackPage = lazy(() => import("./pages/CallbackPage"));

export const routes = [
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage />,
                    },
                ],
            },
            {
                path: "callback",
                element: <CallbackPage />,
            },
        ],
    },
];
