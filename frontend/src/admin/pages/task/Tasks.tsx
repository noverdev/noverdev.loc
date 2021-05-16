import * as React from "react";
import {Link} from "react-router-dom";
import {
    Add as AddIcon
} from '@material-ui/icons';
import PageTitle from "../../components/Commons/PageTitle";
import Items from "../../components/Tasks/Items";
import Navigation from "../../components/Commons/Navigation";

export const Tasks: React.FC = () => {
    return (
        <div>
            <PageTitle>Tasks</PageTitle>
            <div>
                <div>
                    <div>
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <div>
                            <span>
                                <svg viewBox="0 0 24 24">
                                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387
                                    5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"/>
                                </svg>
                            </span>
                        <input placeholder="Search"/>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to={'/admin/tasks/create'}>
                            <AddIcon style={{fontSize: 20}}/>
                            <span>Create Task</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div>
                    <div>
                        <div>
                            <Items tasks={[]}/>
                        </div>
                    </div>
                    <Navigation/>
                </div>
            </div>
        </div>
    );
}
