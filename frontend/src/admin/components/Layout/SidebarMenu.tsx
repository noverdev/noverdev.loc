import * as React from "react";
import Logo from "./Logo";
import Menu from "../Sidebar/Menu";
import menuItems from "../../store/sidebar/menuItems";

type Props = {}

type State = {}

class SidebarMenu extends React.Component<Props, State> {
    render() {
        return (
            <aside className="relative bg-gray-700 h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-4 flex items-center bg-gray-600">
                    <Logo/>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <Menu items={menuItems}/>
                </nav>
                <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
                >
                    Copyright &#169; <a target="_blank" href="/" className="underline ml-1">NoverDev</a>.
                </a>
            </aside>
        );
    }
}

export default SidebarMenu;