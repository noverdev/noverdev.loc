import * as React from "react";
import MenuItemTitle from "./MenuItemTitle";
import {MenuTypes, SidebarItem} from "../../store/sidebar/types";
import MenuItem from "./MenuItem";
import MenuItemCounter from "./MenuItemCounter";
import MenuItemDropdown from "./MenuItemDropdown";

type Props = {
    items: SidebarItem[];
}

type State = {}

class Menu extends React.Component<Props, State> {
    render() {
        let {items} = this.props;
        if (items.length < 1) {
            return null;
        }
        return (
            <React.Fragment>
                {items.map((item, index) => {
                    if (item.type === MenuTypes.itemTitle) {
                        return <MenuItemTitle key={index} item={item}/>;
                    } else if (item.type === MenuTypes.itemMenu) {
                        return <MenuItem key={index} item={item}/>;
                    } else if (item.type === MenuTypes.itemMenuCounter) {
                        return <MenuItemCounter key={index} item={item}/>;
                    } else if (item.type === MenuTypes.itemMenuDropdown) {
                        return <MenuItemDropdown key={index} item={item}/>;
                    }
                })}
            </React.Fragment>
        );
    }
}

export default Menu;