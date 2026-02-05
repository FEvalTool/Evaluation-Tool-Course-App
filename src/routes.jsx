import { lazy } from "react";

import MainLayout from "./layouts/MainLayout";

// lazy load pages for code splitting
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "dashboard",
                element: <DashboardPage />,
            },
        ],
    },
];
