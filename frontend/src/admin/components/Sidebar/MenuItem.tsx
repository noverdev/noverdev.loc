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
            <Link to={item.path}>
                {icon} {item.title} {this.renderCounter(item.counter)}
            </Link>
        );
    }

    renderCounter(counter: number) {
        if (counter === 0 || !counter) {
            return null;
        }
        return (
            <span>
                [<span>{counter}</span>/<span>{counter}</span>]
            </span>
        );
    }
}

export default MenuItem;