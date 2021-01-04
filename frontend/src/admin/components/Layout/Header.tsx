import * as React from "react";
import Logo from "./Logo";
import {Search} from "heroicons-react";

type Props = {}

type State = {}

class Header extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <header className="w-full flex items-center bg-white py-2 px-6 hidden sm:flex border-b-2 border-gray-100">
                    <div className="relative w-1/2 flex">
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                                <Search size={20}/>
                            </span>
                            <input
                                type="search" name="q" placeholder="Search..." autoComplete="off"
                                className="py-2 text-sm text-white bg-gray-200 rounded-md pl-7 focus:outline-none focus:bg-opacity-50 focus:text-black"
                            />
                        </div>
                    </div>
                    <div className="relative w-1/2 flex justify-end">
                        <button
                            className={'relative z-60 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400' +
                            'hover:border-gray-300 focus:border-gray-300 focus:outline-none'}>
                            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt=""/>
                        </button>
                        <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                            <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                            <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                            <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                        </div>
                    </div>
                </header>

                <header className="fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center sm:hidden">
                    <div className="flex items-center justify-between">
                        <Logo/>
                    </div>

                    <nav className="flex flex-col pt-4">
                        <a href="#"
                           className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"/>
                            Dashboard
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-sticky-note mr-3"/>
                            Blank Page
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-table mr-3"/>
                            Tables
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-align-left mr-3"/>
                            Forms
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-tablet-alt mr-3"/>
                            Tabbed Content
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-calendar mr-3"/>
                            Calendar
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-cogs mr-3"/>
                            Support
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-user mr-3"/>
                            My Account
                        </a>
                        <a href="#"
                           className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                            <i className="fas fa-sign-out-alt mr-3"/>
                            Sign Out
                        </a>
                        <button
                            className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-arrow-circle-up mr-3"/> Upgrade to Pro!
                        </button>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;