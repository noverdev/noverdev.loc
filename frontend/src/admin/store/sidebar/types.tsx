import * as React from "react";
import ForwardRef from "heroicons-react/build/IconType";

export enum MenuTypes {
    itemTitle = 'itemTitle',
    itemMenu = 'itemMenu',
    itemMenuCounter = 'itemMenuCounter',
    itemMenuDropdown = 'itemMenuDropdown',
}

export interface SidebarItem {
    type: MenuTypes;
    path?: string;
    // @ts-ignore
    icon?: ForwardRef;
    title: string;
    counter?: number;
    dropDownIcons?: {
        // @ts-ignore
        up: ForwardRef;
        // @ts-ignore
        down: ForwardRef;
    };
    children?: SidebarItem[];
}