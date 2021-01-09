import * as React from "react";
import {TaskStatus} from "../../store/task/types";

type Props = {
    taskStatus: TaskStatus;
}

type State = {}

class Status extends React.Component<Props, State> {
    render() {
        let {taskStatus} = this.props;
        let classesBg = "relative inline-block px-3 py-1 font-semibold text-"+taskStatus.color+"-900 leading-tight";
        let classesText = "absolute inset-0 bg-"+taskStatus.color+"-200 opacity-50 rounded-full";

        return (
            <span className={classesBg}>
                <span aria-hidden className={classesText}/>
                <span className="relative text-xs">{taskStatus.statusName}</span>
            </span>
        );
    }
}

export default Status;