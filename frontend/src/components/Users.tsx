import * as React from "react";

type Props = {};

type State = {
    users: User[];
    loading: boolean;
}

interface User {
    id: number;
    imageURL: string;
    name: string;
    description: string;
}

class Users extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        if (!this.state.loading) {
            this.setState({
                loading: true,
            });
        }
        fetch(`/api/users`)
            .then(res => res.json())
            .then(result => this.setState({
                users: result.users,
                loading: false,
            }))
    }

    render() {
        let {loading, users} = this.state;
        return (
            <section className="row-section">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center"><span>List of users</span></h2>
                    </div>
                    {loading ? (
                        <div className={'row text-center'}>
                            <span className="fa fa-spin fa-spinner fa-4x"/>
                        </div>
                    ) : (<div className={'row'}>
                            {users.map(user =>
                                <div className="col-md-10 offset-md-1 row-block" key={user.id}>
                                    <ul id="sortable">
                                        <li>
                                            <div className="media">
                                                <div className="media-left align-self-center">
                                                    <img className="rounded-circle"
                                                         src={user.imageURL} alt="User Image"/>
                                                </div>
                                                <div className="media-body">
                                                    <h4>{user.name}</h4>
                                                    <p>{user.description}</p>
                                                </div>
                                                <div className="media-right align-self-center">
                                                    <a href="#" className="btn btn-default">Contact Now</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default Users;