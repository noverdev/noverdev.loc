import * as React from "react";
import {Fire} from "heroicons-react";

type Props = {}

type State = {}

class Logo extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <Fire size={30} color={'orange'}/>
                <span className="text-white text-2xl mx-2 font-semibold uppercase">NoverDev</span>
            </React.Fragment>
        );
    }
}

export default Logo;