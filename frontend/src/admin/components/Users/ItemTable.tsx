import * as React from "react";
import { format } from "date-fns";
import {User, UserCircle} from "heroicons-react";
import Checkbox from "../Commons/Checkbox";

type Props = {};

type State = {};

class ItemTable extends React.Component<Props, State> {
    render() {
        return (
            <tr className="bg-white hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <Checkbox/>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                        <div>
                            <div className="text-sm leading-5 text-blue-500 font-bold">12231</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 cursor-pointer"
                    onClick={() => console.log("click tr")}>
                    <div className="flex items-center leading-5 text-blue-900">
                        <div className="flex justify-center items-center mr-2 h-10 w-10 rounded-full border border-b-2">
                            <UserCircle size={40}/>
                        </div>
                        <span className="font-bold">Anet Noriko</span>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    Admin
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    View Users, Delete Users, Add Users
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    {format(new Date(), 'dd MMMM yyyy HH:mm')}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
                    {format(new Date(), 'dd MMMM yyyy HH:mm')}
                </td>
            </tr>
        );
    }
}

export default ItemTable;
