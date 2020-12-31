import * as React from "react";
import {SidebarItem} from "../../store/sidebar/types";

type Props = {
    item: SidebarItem;
}

type State = {}

class MenuItemTitle extends React.Component<Props, State> {
    render() {
        let {item} = this.props;
        return (
            <div className="py-3 pl-6">
                <span className="text-2xl text-gray-50">{item.title}</span>
            </div>
        );
    }
}

export default MenuItemTitle;