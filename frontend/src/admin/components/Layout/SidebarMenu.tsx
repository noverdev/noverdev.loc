import * as React from "react";
import Logo from "./Logo";
import Menu from "../Sidebar/Menu";
import menuItems from "../../store/sidebar/menuItems";

type Props = {};

type State = {};

class SidebarMenu extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"/>
        <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
                <Logo/>
            </div>
          </div>
          <nav className="mt-10 pb-6">
            <Menu items={menuItems}/>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default SidebarMenu;
