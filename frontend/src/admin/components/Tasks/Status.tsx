import * as React from "react";
import {TaskStatus} from "../../store/task/types";

type Props = {
    taskStatus: TaskStatus;
}

type State = {}

class Status extends React.Component<Props, State> {
    render() {
        let {taskStatus} = this.props;

        return (
            <span>
                <span aria-hidden/>
                <span>{taskStatus.statusName}</span>
            </span>
        );
    }
}

export default Status;