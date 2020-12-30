import * as React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import SidebarMenu from "../components/layout/SidebarMenu";

class AdminLayout extends React.Component {
    render() {
        return (
            <div className="bg-gray-100 font-family-karla flex nover-admin-layout">
                <SidebarMenu/>
                <div className="w-full flex flex-col h-screen overflow-y-hidden">
                    <div className="w-full overflow-x-hidden border-t flex flex-col">
                        <Header/>
                        <main className="w-full flex-grow p-6">
                            {this.props.children}
                        </main>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLayout;