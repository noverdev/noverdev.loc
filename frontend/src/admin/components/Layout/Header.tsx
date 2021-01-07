import * as React from "react";
import Logo from "./Logo";
import {Bell, Menu} from "heroicons-react";

type Props = {}

type State = {
    isOpenUserMenu: boolean;
}

class Header extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isOpenUserMenu: false,
        }
    }


    render() {
        let {isOpenUserMenu} = this.state;
        let classesUserMenu = `origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1' +
            'bg-white ring-1 ring-black ring-opacity-5 ${isOpenUserMenu ? '' : 'hidden'}`;
        return (
            <React.Fragment>
                <nav className="bg-gray-800">
                    <div className="px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button className="inline-flex items-center justify-center p-2 rounded-md
                                text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2
                                focus:ring-inset focus:ring-white" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <Menu className="block h-6 w-6" size={24}/>
                                </button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Logo/>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <a href="#"
                                           className="bg-gray-900 text-white px-3 py-2
                                           rounded-md text-sm font-medium"
                                        >Dashboard</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white
                                           px-3 py-2 rounded-md text-sm font-medium"
                                        >Team</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white
                                           px-3 py-2 rounded-md text-sm font-medium"
                                        >Projects</a>
                                        <a href="#"
                                           className="text-gray-300 hover:bg-gray-700 hover:text-white
                                           px-3 py-2 rounded-md text-sm font-medium"
                                        >Calendar</a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static
                                sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
                                    focus:ring-white">
                                    <span className="sr-only">View notifications</span>
                                    <Bell size={24} className="h-6 w-6"/>
                                </button>
                                <div className="ml-3 relative">
                                    <div>
                                        <button
                                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none
                                            focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            id="user-menu" aria-haspopup="true"
                                            onClick={() => this.setState({
                                                isOpenUserMenu: !isOpenUserMenu,
                                            })}>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full"
                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                 alt=""/>
                                        </button>
                                    </div>
                                    <div
                                        className={classesUserMenu}
                                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                           role="menuitem">Your Profile</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                           role="menuitem">Settings</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                           role="menuitem">Sign out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#"
                               className="bg-gray-900 text-white block px-3 py-2 rounded-md
                               text-base font-medium"
                            >Dashboard</a>
                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2
                               rounded-md text-base font-medium"
                            >Team</a>
                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2
                               rounded-md text-base font-medium"
                            >Projects</a>
                            <a href="#"
                               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2
                               rounded-md text-base font-medium"
                            >Calendar</a>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;