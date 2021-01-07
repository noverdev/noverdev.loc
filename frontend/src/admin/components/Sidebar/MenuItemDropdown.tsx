import * as React from "react";
import {SidebarItem} from "../../store/sidebar/types";
import Menu from "./Menu";

type Props = {
    item: SidebarItem;
}

type State = {
    isAdminMenu: boolean;
}

class MenuItemDropdown extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isAdminMenu: false,
        };
    }

    render() {
        let {item} = this.props;
        let icon = null;
        if (item.icon) {
            icon = <item.icon size={20} className="mr-3"/>;
        }
        return (
            <React.Fragment>
                <a href="#admin" onClick={() => this.setState({isAdminMenu: !this.state.isAdminMenu})}
                   className={`flex items-center mt-1 py-2 px-6 ${this.state.isAdminMenu ? 'bg-gray-700 bg-opacity-25 text-gray-100' : 'text-gray-500'} hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100`}
                >
                    {icon} {item.title} {this.renderAdminChevron()}
                </a>
                <div
                    className={`w-full origin-top-right ${this.state.isAdminMenu ? '' : 'hidden'}`}>
                    <div className="py-2 pl-2">
                        <Menu items={item.children}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderAdminChevron() {
        let {item} = this.props;
        let {isAdminMenu} = this.state;
        if (isAdminMenu) {
            return (
                <item.dropDownIcons.up size={20} className="mr-3"/>
            );
        }
        return (
            <item.dropDownIcons.down size={20} className="mr-3"/>
        );
    }
}

export default MenuItemDropdown;