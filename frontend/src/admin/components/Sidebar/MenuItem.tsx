import * as React from "react";
import {SidebarItem} from "../../store/sidebar/types";
import {
    Link,
} from "react-router-dom";

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
            <Link to={item.path}
               className="flex items-center active-nav-link text-white py-3 pl-6 nav-item bg-gray-700 hover:bg-gray-900">
                {icon} {item.title}
            </Link>
        );
    }
}

export default MenuItem;