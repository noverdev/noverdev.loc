import * as React from "react";
import {
    Adjustments,
    ChevronDown,
    ChevronUp,
    ClipboardCheck,
    ClipboardList,
    Home,
    UserGroup,
    Users
} from "heroicons-react";
import {MenuTypes} from "./types";

const indexPath = '/work-space';
const adminPath = indexPath + '/admin';

export default [
    {
        type: MenuTypes.itemTitle,
        title: 'Main'
    },
    {
        type: MenuTypes.itemMenu,
        path: indexPath,
        icon: Home,
        title: "Dashboard",
    },
    {
        type: MenuTypes.itemMenuCounter,
        path: indexPath + '/my-tasks',
        icon: ClipboardCheck,
        title: "My Tasks",
        counter: 4,
    },
    {
        type: MenuTypes.itemMenu,
        path: indexPath + '/tasks',
        icon: ClipboardList,
        title: "Tasks",
    },
    {
        type: MenuTypes.itemTitle,
        title: 'Admin Menu'
    },
    {
        type: MenuTypes.itemMenuDropdown,
        icon: Adjustments,
        title: "Administration",
        dropDownIcons: {
            up: ChevronUp,
            down: ChevronDown,
        },
        children: [
            {
                type: MenuTypes.itemMenuCounter,
                path: adminPath + '/users',
                icon: Users,
                title: "Users",
                counter: 4,
            },
            {
                type: MenuTypes.itemMenu,
                path: adminPath + '/roles',
                icon: UserGroup,
                title: "Roles",
            },
            {
                type: MenuTypes.itemMenu,
                path: adminPath + '/permissions',
                icon: Adjustments,
                title: "Permissions",
            },
        ]
    }
];