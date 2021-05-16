import * as React from "react";
import Items from "../../components/Users/Items";
import PageTitle from "../../components/Commons/PageTitle";
import Navigation from "../../components/Commons/Navigation";

type Props = {};

type State = {};

class Users extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <PageTitle>Users</PageTitle>
                <div>
                    <div>
                        <div>
                            <select>
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                        </div>
                        <div>
                            <select>
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387
                                5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"/>
                            </svg>
                        </span>
                        <input placeholder="Search"/>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <Items items={[]}/>
                            </div>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
