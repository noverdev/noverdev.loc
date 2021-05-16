import {MenuTypes} from "./types";
import {
    Home,
    Tune,
    People,
    Assignment,
    AssignmentTurnedIn,
    KeyboardArrowUp,
    KeyboardArrowDown,
    Settings,
} from "@material-ui/icons";

const indexPath = '/admin';

export default [
    {
        type: MenuTypes.itemMenu,
        path: indexPath,
        icon: Home,
        title: "Dashboard",
    },
    {
        type: MenuTypes.itemMenu,
        path: indexPath + '/tasks',
        icon: Assignment,
        title: "Tasks",
    },
    {
        type: MenuTypes.itemMenu,
        path: indexPath + '/my-tasks',
        icon: AssignmentTurnedIn,
        title: "My Tasks",
        counter: 234,
    },
    {
        type: MenuTypes.itemMenuDropdown,
        icon: Tune,
        title: "Administration",
        dropDownIcons: {
            up: KeyboardArrowUp,
            down: KeyboardArrowDown,
        },
        children: [
            {
                type: MenuTypes.itemMenu,
                path: indexPath + '/users',
                icon: People,
                title: "Users",
                counter: 4,
            },
            {
                type: MenuTypes.itemMenu,
                path: indexPath + '/permissions',
                icon: Settings,
                title: "Permissions",
            },
        ]
    }
];