/*const Admin = () => {


    return (
        <div>
            <UserTable />
            <Sidebar />
        
        </div>

    );
};
export default Admin;*/


/*import React, {useState} from "react"*/
import { Routes, Route, Link } from "react-router-dom"
import SnippetTable from "./SnippetTable"
import UserTable from "./UserTable"
import { slide as Menu } from 'react-burger-menu';
import '../styles/Admin.css'

function Admin() {

  return (
    <div className="sidebar">
      
        <Menu>
        <div className="sidebarHeader">
        <h2>Menu</h2> 
      </div >
            <Link to="UserTable" className="menu-item">Users</Link>
          
            <Link to="SnippetTable" className="menu-item">Snippets</Link>

            <Link to="MainPage" className="menu-item">Back to Main page</Link>
        </Menu>

      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="UserTable" element={<UserTable />}></Route>
          <Route path="SnippetTable" element={<SnippetTable />}></Route>
          {/* <Route path="MainPage" element={<MainPage />}></Route> */}
        </Routes>
      </div>
    </div>
  )
}

export default Admin



/*import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import UserTable from "./UserTable";
import SnippetTable from "./SnippetTable";
import Sidebar from "./Sidebar";
//import "./styles/App.css";

const Admin = () => {


const AppLayout = () => {
    <>
    <Sidebar />
    <Outlet />
    </>
};

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [

  {
    path: "/",
    element: <UserTable />
    },
  {
    path: "snippets",
    element: <SnippetTable />,
  },
],
    },

]);
}

export default Admin;*/