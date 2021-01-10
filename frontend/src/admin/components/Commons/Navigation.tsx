import * as React from "react";
import {ChevronLeft, ChevronRight} from "heroicons-react";

type Props = {}

type State = {}

class Navigation extends React.Component<Props, State> {
    render() {
        return (
            <div className="flex flex-col items-center mt-6 mb-24">
                <div className="flex text-gray-700">
                    <div
                        className="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                        <ChevronLeft size={20}/>
                    </div>
                    <div className="flex h-8 font-medium rounded-full bg-gray-200">
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1
                        </div>
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...
                        </div>
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3
                        </div>
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-pink-600 text-white ">4
                        </div>
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">5
                        </div>
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...
                        </div>
                        <div
                            className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15
                        </div>
                        <div
                            className="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-pink-600 text-white">4
                        </div>
                    </div>
                    <div
                        className="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                        <ChevronRight size={20}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;