import * as React from "react";
import {Task} from "../../store/task/types";
import {ItemTable} from "./ItemTable";

type Props = {
    tasks: Task[];
};

type State = {};

class Items extends React.Component<Props, State> {
    render() {
        return (
            <table className="min-w-full">
                <thead>
                <tr>
                    {/*<th className="p-2 border-b border-gray-200 bg-gray-50 tracking-wider"/>*/}
                    <th>
                        ID
                    </th>
                    <th>
                        Actions
                    </th>
                    <th>
                        Task
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Time
                    </th>
                    <th>
                        Executor
                    </th>
                    <th>
                        Initiator
                    </th>
                    <th>
                        Created At
                    </th>
                    <th>
                        Updated At
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white">
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                </tbody>
            </table>
        );
    }
}

export default Items;
