import * as React from "react";
import {Link} from "react-router-dom";
import {Adjustments, ClipboardList, DotsHorizontal, Home, UserAdd, UserAddOutline, Users} from "heroicons-react";

type Props = {}

type State = {}

class SidebarMenu extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10' +
            ' w-full md:w-48'}>
                <div className={'md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start' +
                ' text-left justify-between'}>
                    <ul className={'list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center' +
                    ' md:text-left'}>
                        <li className="mr-3 flex-1">
                            <Link to={'/admin'}
                                  className={'flex py-1 md:py-2 pl-1 align-middle text-white no-underline' +
                                  ' hover:text-white border-b-2 border-gray-800 hover:border-pink-500'}>
                                <Home size={20} className="pr-2"/>
                                <span className={'pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400' +
                                ' block md:inline-block'}>Dashboard</span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to={'#Users'}
                                  className={'flex py-1 md:py-2 pl-1 align-middle text-white no-underline' +
                                  ' hover:text-white border-b-2 border-gray-800 hover:border-pink-500'}>
                                <Users size={20} className="pr-2"/>
                                <span className={'pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400' +
                                ' block md:inline-block'}>Users</span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to={'#Permissions'}
                                  className={'flex py-1 md:py-2 pl-1 align-middle text-white no-underline' +
                                  ' hover:text-white border-b-2 border-gray-800 hover:border-pink-500'}>
                                <UserAdd size={20} className="pr-2"/>
                                <span className={'pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400' +
                                ' block md:inline-block'}>Permissions</span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to={'#Settings'}
                                  className={'flex py-1 md:py-2 pl-1 align-middle text-white no-underline' +
                                  ' hover:text-white border-b-2 border-gray-800 hover:border-pink-500'}>
                                <Adjustments size={20} className="pr-2"/>
                                <span className={'pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400' +
                                ' block md:inline-block'}>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SidebarMenu;