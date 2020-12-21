import UsersPage from "../pages/admin/UsersPage";
import PermissionsPage from "../pages/admin/PermissionsPage";
import DashboardPage from "../pages/admin/DashboardPage";

const indexPath = '/admin';

export default [
    { path: indexPath, exact: true, component: DashboardPage },
    { path: indexPath + '/users', exact: true, component: UsersPage },
    { path: indexPath + '/permissions', exact: true, component: PermissionsPage },
]