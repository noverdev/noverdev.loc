import * as React from "react";
import {Bell, Menu, Search} from "heroicons-react";

type Props = {}

type State = {
    isOpenUserMenu: boolean;
    isOpenSearchInput: boolean;
}

class Header extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isOpenUserMenu: false,
            isOpenSearchInput: false,
        }
    }


    render() {
        let {isOpenUserMenu, isOpenSearchInput} = this.state;
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
                            <div className="flex-1">
                                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                                    <div className="md:flex">
                                        <div className="w-full p-3">
                                            <div className="relative">
                                                <Search className="absolute text-gray-400 top-4 left-4 pointer-events-none"/>
                                                <input type="text"
                                                       className="bg-white h-14 w-1/2 px-12 rounded-lg
                                                       focus:outline-none hover:cursor-pointer sm:w-full"
                                                       placeholder="Search...."
                                                       name=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static
                                sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    className="bg-gray-800 p-1 rounded-full ml-3 text-gray-400 hover:text-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
                                    focus:ring-white"
                                    onClick={() => this.setState({
                                        isOpenSearchInput: !isOpenSearchInput,
                                    })}>
                                    <span className="sr-only">View search field</span>
                                    <Search size={24} className="h-6 w-6"/>
                                </button>
                                <button
                                    className="bg-gray-800 p-1 rounded-full ml-3 text-gray-400 hover:text-white
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
                                            aria-haspopup="true"
                                            onClick={() => this.setState({
                                                isOpenUserMenu: !isOpenUserMenu,
                                            })}>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full"
                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                 alt=""/>
                                        </button>
                                    </div>
                                    <div className={isOpenUserMenu ? '' : 'hidden'}>
                                        <div
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg
                                        py-1 bg-white ring-1 ring-black ring-opacity-5"
                                            role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                            <a href="#"
                                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                               role="menuitem">Your Profile</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                               role="menuitem">Settings</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                               role="menuitem">Sign out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;