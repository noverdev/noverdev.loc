import * as React from "react";

type Props = {}

type State = {}

class Checkbox extends React.Component<Props, State> {
    render() {
        return (
            <input
                type="checkbox"
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600
                checked:border-transparent focus:outline-none"/>
        );
    }
}

export default Checkbox;