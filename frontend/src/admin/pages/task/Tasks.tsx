import * as React from "react";
import PageTitle from "../../components/Commons/PageTitle";
import Items from "../../components/Tasks/Items";
import Navigation from "../../components/Commons/Navigation";

type Props = {};

type State = {};

class Tasks extends React.Component<Props, State> {
    render() {
        return (
            <div className="container mx-auto px-6 py-8">
                <PageTitle>Tasks</PageTitle>
                <div className="mt-4">
                    <div className="flex flex-col">
                        <div
                            className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                                className="align-middle inline-block min-w-full shadow overflow-hidden
                    sm:rounded-lg border-b border-gray-200">
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

export default Tasks;
