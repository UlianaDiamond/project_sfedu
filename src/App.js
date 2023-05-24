import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import Pagination from './Pagination';
import data from './components/data/mock-data.json';

import {FaPlus } from "react-icons/fa";
import Sidebar from './components/Sidebar';
import UserTable from './components/UserTable.jsx';
import Admin from './components/Admin';
import SnippetTable from './components/SnippetTable.jsx';

/*let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
};

const handleShowAddForm = () => {
  setShowAddForm(!showAddForm);

}



const handleEditUser = (id, updateUser) => {
  fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
  })
      .then((response) => response.json())
      .then((data) => {
          setUsers((prevUsers) =>
              prevUsers.map((user) => (user.id === id ? data : user))
          );
          setSelectedUser(null);
      })
      .catch((error) => console.error(error));
};

  return (
    <>
    <h1>Users Table</h1>
       <button className="add" type="submit" onClick={handleShowAddForm}  ><FaPlus/></button>
            {(showAddForm || selectedUser) ? (<AddUserForm user={selectedUser} onSave={(updateUser) => handleEditUser(selectedUser.id, updateUser)} />) : (
                     
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Date of Registration</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.registrationDate}</td>
                <td>{item.isAdmin ? 'Yes' : 'No'}</td>
                <td>
                <button onClick={() => handleSelectUser(item)}>Edit</button>
                <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
            )}

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <Sidebar />
    </>
  );
}*/

function App() {

/*const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<UserTable />} />
    <Route path="/SnippetTable" element={<SnippetTable />} />
  </Route>
  )
);*/

  return (
    <div className="App">
      <Admin />
    </div>
    
  );
}

/*const Root = () => {
  <>
  <div>
    <Link to="UserTable"> Users </Link>
    <Link to="SnippetTable"> Snippets </Link>
  </div>

  <div>
    <Outlet />
  </div>
  </>
}*/

export default App;
