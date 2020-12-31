import HomePage from "../pages/dashboard/HomePage";
import NotFoundPage from "../pages/other/NotFoundPage";

const indexPath = '/';

export default [
    {
        path: indexPath,
        exact: true,
        component: HomePage
    },
    {
        component: NotFoundPage
    },
];