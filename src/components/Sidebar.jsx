import { Routes, Route, Link } from "react-router-dom"
import SnippetTable from "./SnippetTable"
import UserTable from "./UserTable"
import { slide as Menu } from 'react-burger-menu';

import '../styles/Sidebar.css'

const Sidebar = () => {

    return (
        <div>
            <Menu>
                <div className="sidebarHeader">
                    <h2>Menu</h2>
                </div>
                <Link to="UserTable" className="li">Users</Link>

                <Link to="SnippetTable" className="li">Snippets</Link>

                <Link to="MainPage" className="li">Back to Main page</Link>
            </Menu>
            <div className="li">
                {/* Define all the routes */}
                <Routes>
                    <Route path="UserTable" element={<UserTable />}></Route>
                    <Route path="SnippetTable" element={<SnippetTable />}></Route>
                    {/* <Route path="MainPage" element={<MainPage />}></Route> */}
                </Routes>
            </div>
        </div>

    );
};

export default Sidebar;