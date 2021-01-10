import * as React from "react";
import DashboardPage from "../pages/dasboard/DashboardPage";
import NotFoundPage from "../pages/other/NotFoundPage";
import MyTasks from "../pages/task/MyTasks";
import Tasks from "../pages/task/Tasks";
import Users from "../pages/user/Users";

const indexPath = '/admin';

export default [
    {
        path: indexPath,
        exact: true,
        component: DashboardPage
    },
    {
        path: indexPath + '/my-tasks',
        component: MyTasks,
    },
    {
        path: indexPath + '/tasks',
        component: Tasks,
    },
    {
        path: indexPath + '/users',
        component: Users,
    },
    {
        component: NotFoundPage
    },
];