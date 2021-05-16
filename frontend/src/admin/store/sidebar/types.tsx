import * as React from "react";
import {SvgIconComponent} from "@material-ui/icons";

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
        up: SvgIconComponent;
        down: SvgIconComponent;
    };
    children?: SidebarItem[];
}