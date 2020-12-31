import * as React from "react";
import {SidebarItem} from "../../store/sidebar/types";

type Props = {
    item: SidebarItem;
}

type State = {}

class MenuItemCounter extends React.Component<Props, State> {
    render() {
        let {item} = this.props;
        let icon = null;
        if (item.icon) {
            icon = <item.icon size={20} className="mr-3"/>;
        }
        return (
            <a href={item.path}
               className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item bg-gray-700 hover:bg-gray-900">
                {icon} {item.title} {this.renderCounter(item.counter)}
            </a>
        );
    }

    renderCounter(counter: number) {
        if (counter === 0) {
            return null;
        }
        return (
            <span
                className="rounded-min text-white bg-yellow-500 px-2 py-1 text-xs font-bold ml-3 flex items-center">
                    {counter}
                </span>
        );
    }
}

export default MenuItemCounter;