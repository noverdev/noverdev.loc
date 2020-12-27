import * as React from "react";
import DashboardPage from "../pages/dasboard/DashboardPage";
import NotFoundPage from "../pages/other/NotFoundPage";

const indexPath = '/admin';

export default [
    {
        path: indexPath,
        exact: true,
        component: DashboardPage
    },
    {
        component: NotFoundPage
    },
]