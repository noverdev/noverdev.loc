import * as React from "react";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";

type Props = {}

type State = {}

class Navigation extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <ChevronLeft/>
                    </div>
                    <div>
                        <div>1
                        </div>
                        <div>...
                        </div>
                        <div>3
                        </div>
                        <div>4
                        </div>
                        <div>5
                        </div>
                        <div>...
                        </div>
                        <div>15
                        </div>
                        <div>4
                        </div>
                    </div>
                    <div>
                        <ChevronRight/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;