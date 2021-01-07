import * as React from "react";
import Header from "../components/layout/Header";
import SidebarMenu from "../components/layout/SidebarMenu";

class AdminLayout extends React.Component {
    render() {
        return (
            <div className="w-full h-screen overflow-hidden flex items-center justify-center"
                 style={{backgroundColor: "#edf2f7"}}>
                <div className="w-full flex h-screen bg-gray-200">
                    <SidebarMenu/>
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Header/>
                        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayout;
