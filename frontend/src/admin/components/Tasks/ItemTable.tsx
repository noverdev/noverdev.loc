import * as React from "react";
import {CheckCircle, Pause, Play} from "heroicons-react";
import { format } from "date-fns";
import Status from "./Status";
import taskStatuses from "../../store/task/taskStatuses";

type Props = {};

type State = {
    isStartTask: boolean;
};

class ItemTable extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isStartTask: false,
        };
    }

    render() {
        return (
            <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border-b border-gray-200 bg-red-400"/>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        <div>
                            <div className="text-sm leading-5 text-blue-800 font-bold">12231</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <div className="flex items-center">
                        {this.renderActionButtons()}
                    </div>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-200 cursor-pointer"
                    onClick={() => console.log("click tr")}>
                    <div className="text-sm leading-5 text-blue-900">Issue: Agent stuck on ringing</div>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-sm leading-5">
                    <Status taskStatus={taskStatuses[Math.floor(Math.random() * taskStatuses.length)]}/>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5">
                    {format(new Date(0, 0,0, 2, 19), 'HH:mm')}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    Anton
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    Natalia
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    {format(new Date(), 'dd MMMM yyyy HH:mm')}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    {format(new Date(), 'dd MMMM yyyy HH:mm')}
                </td>
            </tr>
        );
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    renderActionButtons() {
        let {isStartTask} = this.state;
        let startOrStopButton = {
            classes: "border-green-500 border text-green-500 rounded-full transition duration-300 hover:bg-green-500 hover:text-white focus:outline-none",
            icon: <Play size={30}/>
        };
        if (isStartTask) {
            startOrStopButton = {
                classes: "border-yellow-500 border text-yellow-500 rounded-full transition duration-300 hover:bg-yellow-500 hover:text-white focus:outline-none",
                icon: <Pause size={30}/>,
            };
        }
        return (
            <React.Fragment>
                <button className={startOrStopButton.classes}
                        onClick={() => this.setState({isStartTask: !isStartTask,})}>
                    {startOrStopButton.icon}
                </button>
                <button className="border-green-500 border text-green-500 rounded-full transition duration-300 ml-2
                hover:bg-green-500 hover:text-white focus:outline-none">
                    <CheckCircle size={30}/>
                </button>
            </React.Fragment>
        );
    }
}

export default ItemTable;
