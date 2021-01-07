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
               className="relative flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                {icon} {item.title} {this.renderCounter(item.counter)}
            </Link>
        );
    }

    renderCounter(counter: number) {
        if (counter === 0 || !counter) {
            return null;
        }
        return (
            <span className="absolute right-2 rounded-min text-white orange px-2 py-1 text-xs font-bold ml-3 flex items-center">
                [<span className="text-green-600 mx-1">{counter}</span>/<span className="text-white-600 mx-1">{counter}</span>]
            </span>
        );
    }
}

export default MenuItem;