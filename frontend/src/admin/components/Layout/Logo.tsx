import * as React from "react";
import WhatshotIcon from '@material-ui/icons/Whatshot';

type Props = {}

type State = {}

class Logo extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <WhatshotIcon style={{fontSize: 30, color: "orange"}}/>
                <span>NoverDev</span>
            </React.Fragment>
        );
    }
}

export default Logo;