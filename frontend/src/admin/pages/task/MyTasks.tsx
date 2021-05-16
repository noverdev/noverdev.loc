import * as React from "react";
import PageTitle from "../../components/Commons/PageTitle";
import Items from "../../components/Tasks/Items";
import Navigation from "../../components/Commons/Navigation";

type Props = {};

type State = {};

class MyTasks extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <PageTitle>My Tasks</PageTitle>
                <div>
                    <div>
                        <div>
                            <div>
                                <Items tasks={[]}/>
                            </div>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyTasks;
