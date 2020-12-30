import * as React from "react";
import {Adjustments, ChevronDown, ChevronUp, ClipboardCheck, ClipboardList, Fire, Home} from "heroicons-react";

type Props = {}

type State = {
    isAdminMenu: boolean;
}

class SidebarMenu extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isAdminMenu: false,
        }
    }

    render() {
        return (
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6 flex items-center">
                    <Fire size={30} color={'orange'}/>
                    <a href="/"
                       className="text-white text-2xl font-semibold uppercase hover:text-gray-300">NoverDev</a>
                </div>
                <hr/>
                <nav className="text-white text-base font-semibold pt-3">
                    <a href="/" className="flex items-center active-nav-link text-white py-3 pl-6 nav-item">
                        <Home size={20} className="mr-3"/>
                        Dashboard
                    </a>
                    <a href="#"
                       className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item">
                        <ClipboardCheck size={20} className="mr-3"/>
                        My Tasks <span
                        className="rounded-min text-white bg-yellow-500 px-2 py-1 text-xs font-bold ml-3 flex items-center">4</span>
                    </a>
                    <a href="#"
                       className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item">
                        <ClipboardList size={20} className="mr-3"/>
                        Tasks
                    </a>
                    <hr/>
                    <a href="#"
                       className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item"
                       onClick={() => this.setState({isAdminMenu: !this.state.isAdminMenu})}
                    >
                        <Adjustments size={20} className="mr-3"/>
                        Admin Panel {this.renderAdminChevron()}
                    </a>
                    <div className={`absolute right-0 w-full origin-top-right ${this.state.isAdminMenu ? '' : 'hidden'}`}>
                        <div className="py-2 rounded-md shadow-sm">
                            <hr/>
                            <a className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item"
                               href="#">Users</a>
                            <a className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item"
                               href="#">Roles</a>
                            <a className="flex items-center text-white hover:opacity-100 py-3 pl-6 nav-item"
                               href="#">Permissions</a>
                            <hr/>
                        </div>
                    </div>
                </nav>
                <a href="#"
                   className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                    Copyright &#169; <a target="_blank" href="/" className="underline ml-1">NoverDev</a>.
                </a>
            </aside>
        );
    }

    renderAdminChevron() {
        if (this.state.isAdminMenu) {
            return <ChevronUp size={20} className="ml-3"/>;
        }
        return <ChevronDown size={20} className="ml-3"/>;
    }
}

export default SidebarMenu;