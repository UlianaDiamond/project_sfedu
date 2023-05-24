import React, { useState, useMemo } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import Pagination from '../Pagination';
import data from './data/mock-data.json';
import '../styles/UserTable.css';
import { FaPlus } from "react-icons/fa";
import AddUserForm from './AddUser';


let PageSize = 10;

export default function UseTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortBy, setSortBy] = useState(""); // New state for sorting
  const [showAddForm, setShowAddForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state for dropdown

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    let sortedData = [...data]; // Copy the original data

    if (sortBy === "isAdmin") {
      sortedData.sort((a, b) => a.isAdmin.localeCompare(b.isAdmin));
    } else if (sortBy === "registrationDate") {
      sortedData.sort(
        (a, b) => new Date(a.registrationDate) - new Date(b.registrationDate)
      );
    }

    return sortedData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sortBy]);

  const handleDeleteUser = (id) => {
    fetch(`/api/users/${id}`, { method: "DELETE" })
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== id)
        );
      })
      .catch((error) => console.error(error));


  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  const handleCanselAddForm = () => {
    setShowAddForm(false);
    window.location.reload();

}
const handleSaveUser = (user) => {
  fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
  })
      .then((response) => response.json())
      .then((data) => {
          setUsers([...users, data]);
          setShowAddForm(false);
      })
      .catch((error) => console.error(error));
};

  if (showAddForm) {
    return (
        <div>
            <AddUserForm onSave={handleSaveUser} onCancel={handleCanselAddForm} />
        </div>
    );
}

  if (selectedUser) {
    return (
        <div>
            <AddUserForm user={selectedUser} onSave={(updateUser) => handleEditUser(selectedUser.id, updateUser)} />
        </div>
    );
}

  return (
    <>
      <h1>Users Table</h1>
      <div className="filter-container">
        <button
          className={`filter-button ${isOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          Sort By
          <span className="arrow">▾</span>
        </button>
        {isOpen && (
          <ul className="dropdown">
            <li onClick={() => setSortBy("title")}>Admin state</li>
            <li onClick={() => setSortBy("registrationDate")}>Registration Date</li>
          </ul>
        )}
      </div>
      <button className="addUser" type="submit" onClick={handleShowAddForm}>Add</button>
     

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
                    <button className='edit' onClick={() => handleSelectUser(item)}>Edit</button>
                    <button className='delete' onClick={() => handleDeleteUser(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
     

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

    </>

  );
}
