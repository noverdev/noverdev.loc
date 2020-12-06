import * as React from "react";
import {Link} from "react-router-dom";
import {
    Adjustments,
    ChevronDown,
    Fire,
    Logout,
    Search,
    User
} from "heroicons-react";

type Props = {}

type State = {
    isShowUserMenu: boolean;
}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isShowUserMenu: false,
        }
    }

    render() {
        let {isShowUserMenu} = this.state;
        return (
            <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
                <div className="flex flex-wrap items-center">
                    <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                        <Link to={'/admin'} className="flex md:w-48 justify-center items-center uppercase">
                            <Fire size={40} fill={'rgba(217, 119, 6, var(--tw-bg-opacity))'}/>
                            <span className="font-bold">NoverDev</span>
                        </Link>
                    </div>
                    <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                        <span className="relative w-full">
                            <input type="search" placeholder="Search"
                                   className={'w-full bg-gray-900 text-white transition border' +
                                   ' border-transparent focus:outline-none focus:border-gray-400 rounded' +
                                   ' py-3 px-2 pl-10 appearance-none leading-normal'}/>
                            <div className="absolute search-icon" style={{top: '1rem', left: '.8rem'}}>
                                <Search size={20} className="fill-current pointer-events-none text-white"/>
                            </div>
                        </span>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <Link
                                    to="/"
                                    className="inline-block text-white hover:text-green-500 py-2 px-4">Site</Link>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <Link
                                    to="/admin"
                                    className="inline-block text-white hover:text-green-500 py-2 px-4">Admin
                                    Panel</Link>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block">
                                    <button
                                        className="flex items-center drop-button text-white focus:outline-none"
                                        onClick={() => this.setState({
                                            isShowUserMenu: !isShowUserMenu,
                                        })}>
                                        <span
                                            className={'hover:text-green-500 pr-1'
                                            + (isShowUserMenu ? ' text-green-500' : '')}
                                        >Hi, Anton</span>
                                        <ChevronDown
                                            size={20}
                                            transform={(isShowUserMenu ? 'rotate(180)' : '')}/>
                                    </button>
                                    <div className={'w-60 transition-opacity absolute bg-gray-800 text-white right-0' +
                                    ' mt-3 p-3 overflow-auto z-30' + (isShowUserMenu ? '' : ' hidden')}
                                         onMouseEnter={() => this.setState({
                                             isShowUserMenu: true,
                                         })}
                                         onMouseLeave={() => this.setState({
                                             isShowUserMenu: false,
                                         })}>
                                        <Link to={'#profile'}
                                              className={'flex items-center text-left py-2 hover:text-green-500' +
                                              ' text-white text-sm no-underline hover:no-underline block'}>
                                            <User size={25} className="pr-2"/>Profile
                                        </Link>
                                        <Link to={'#profile'}
                                              className={'flex items-center text-left py-2 hover:text-green-500' +
                                              ' text-white text-sm no-underline hover:no-underline block'}>
                                            <Adjustments size={25} className="pr-2"/>Settings
                                        </Link>
                                        <hr/>
                                        <Link to={'#profile'}
                                              className={'flex items-center text-left py-2 hover:text-green-500' +
                                              ' text-white text-sm no-underline hover:no-underline block'}>
                                            <Logout size={25} className="pr-2"/> Log Out
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;