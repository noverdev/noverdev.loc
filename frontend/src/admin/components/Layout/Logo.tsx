import * as React from "react";
import {Fire} from "heroicons-react";

type Props = {}

type State = {}

class Logo extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <Fire size={30} color={'orange'}/>
                <a href="/" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">NoverDev</a>
            </React.Fragment>
        );
    }
}

export default Logo;