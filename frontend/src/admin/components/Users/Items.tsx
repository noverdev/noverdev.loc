import * as React from "react";
import {ItemTable} from "./ItemTable";
import {CustomCheckbox} from "../Commons/Checkbox";
import {User} from "../../store/user/types";

type Props = {
    items: User[];
};

type State = {};

class Items extends React.Component<Props, State> {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th><CustomCheckbox/></th>
                    <th>ID</th>
                    <th>User</th>
                    <th>Role</th>
                    <th>Permissions</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                <ItemTable/>
                </tbody>
            </table>
        );
    }
}

export default Items;
