import * as React from "react";
import {format} from "date-fns";
import {CustomCheckbox} from "../Commons/Checkbox";
import {
    AccountCircle as AccountCircleIcon
} from '@material-ui/icons';

export const ItemTable: React.FC = () => {
    return (
        <tr>
            <td>
                <CustomCheckbox/>
            </td>
            <td>
                <div>
                    <div>
                        <div>12231</div>
                    </div>
                </div>
            </td>
            <td onClick={() => console.log("click tr")}>
                <div>
                    <div>
                        <AccountCircleIcon style={{fontSize: 40}}/>
                    </div>
                    <span>Anet Noriko</span>
                </div>
            </td>
            <td>
                Admin
            </td>
            <td>
                View Users, Delete Users, Add Users
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
