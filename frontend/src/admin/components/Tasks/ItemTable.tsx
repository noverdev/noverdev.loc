import * as React from "react";
import {format} from "date-fns";
import {
    PlayCircleOutline as PlayIcon,
    PauseCircleOutline as PauseIcon,
    CheckCircleOutline as CheckIcon
} from '@material-ui/icons';
import Status from "./Status";
import taskStatuses from "../../store/task/taskStatuses";
import {useState} from "react";

export const ItemTable: React.FC = () => {
    const [isStartTask, setIsStartTask] = useState<boolean>(false);

    const renderActionButtons = () => {
        let startOrStopButton = {
            icon: <PlayIcon style={{fontSize: 30}}/>
        };
        if (isStartTask) {
            startOrStopButton = {
                icon: <PauseIcon style={{fontSize: 30}}/>,
            };
        }
        return (
            <React.Fragment>
                <button onClick={() => setIsStartTask(!isStartTask)}>
                    {startOrStopButton.icon}
                </button>
                <button>
                    <CheckIcon style={{fontSize: 30}}/>
                </button>
            </React.Fragment>
        );
    }

    return (
        <tr>
            <td>
                <div>
                    <div>
                        <div>12231</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    {renderActionButtons()}
                </div>
            </td>
            <td onClick={() => console.log("click tr")}>
                <div>Issue: Agent stuck on ringing</div>
            </td>
            <td>
                <Status taskStatus={taskStatuses[Math.floor(Math.random() * taskStatuses.length)]}/>
            </td>
            <td>
                {format(new Date(0, 0, 0, 2, 19), 'HH:mm')}
            </td>
            <td>
                Anton
            </td>
            <td>
                Natalia
            </td>
            <td>
                {format(new Date(), 'dd MMMM yyyy HH:mm')}
            </td>
            <td>
                {format(new Date(), 'dd MMMM yyyy HH:mm')}
            </td>
        </tr>
    );
}
