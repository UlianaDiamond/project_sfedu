/*import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


/*import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import UserTable from "./components/UserTable";
import SnippetTable from "./components/SnippetTable";
import Sidebar from "./components/Sidebar";
//import "./styles/App.css";

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

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);*/


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <App/>
  </BrowserRouter>
  </React.StrictMode>,
 
  document.getElementById('root')
);