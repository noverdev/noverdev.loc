import * as React from "react";
import Header from "../../components/admin/Header";
import SidebarMenu from "../../components/admin/SidebarMenu";

type Props = {}

type State = {}

class UsersPage extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="flex flex-col md:flex-row">
                    <SidebarMenu/>
                    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                        <div className="bg-gray-800 pt-3">
                            <div className={'rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4' +
                            ' shadow text-2xl text-white'}>
                                <h3 className="font-bold pl-2">Users Page</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UsersPage;