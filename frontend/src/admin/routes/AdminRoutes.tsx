import * as React from "react";
import {DefaultLayout} from "../layouts";
import DashboardPage from "../pages/dasboard/DashboardPage";
import NotFoundPage from "../pages/other/NotFoundPage";

const indexPath = '/admin';

export default [
    {
        path: indexPath,
        exact: true,
        layout: DefaultLayout,
        component: DashboardPage
    },
    {
        component: NotFoundPage
    },
]