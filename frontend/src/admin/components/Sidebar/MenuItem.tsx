import * as React from "react";
import {SidebarItem} from "../../store/sidebar/types";

type Props = {
    item: SidebarItem;
}

type State = {}

class MenuItem extends React.Component<Props, State> {
    render() {
        let {item} = this.props;
        let icon = null;
        if (item.icon) {
            icon = <item.icon size={20} className="mr-3"/>;
        }
        return (
            <a href={item.path}
               className="flex items-center active-nav-link text-white py-3 pl-6 nav-item bg-gray-700 hover:bg-gray-900">
                {icon} {item.title}
            </a>
        );
    }
}

export default MenuItem;