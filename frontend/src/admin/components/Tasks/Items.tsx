import * as React from "react";
import {Task} from "../../store/task/types";
import ItemTable from "./ItemTable";

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
                    <th className="p-2 border-b border-gray-200 bg-gray-50 tracking-wider"/>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Task
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Time
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Executor
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Initiator
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
                        Created At
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 text-gray-500 uppercase tracking-wider">
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
