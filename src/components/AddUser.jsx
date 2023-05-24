import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import "../styles/AddUser.css";

function AddUserForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.user) {
      setUsername(props.user.first_name);
      setEmail(props.user.email);
      setRegistrationDate(props.user.registrationDate);
      setIsAdmin(props.user.isAdmin);
    }
  }, [props.user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username,
      email,
      registrationDate,
      isAdmin,
    };
    props.onSave(newUser);
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        props.addUser(data);
        setUsername("");
        setEmail("");
        setRegistrationDate("");
        setIsAdmin(false);
      })
      .catch((error) => console.error(error));
  };

  const handleShow = () => {
    setShow(!show);
    window.location.reload();
  };

  return (
    show ? (
      <UserTable />
    ) : (
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div className="form-header">Add User</div>

          <div className="form-body">
            <div className="horizontal-group">
              <div className="form-group left">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <br />
                <label htmlFor="name">Last Name:</label>
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <br />
              </div>
              <div className="form-group right">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-input"
                  type="text"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br />
              </div>

              <div className="form-group left">
                <label htmlFor="registrationDate">Registration Date:</label>
                <input
                  className="form-input"
                  type="date"
                  id="registrationDate"
                  value={registrationDate}
                  onChange={(event) =>
                    setRegistrationDate(event.target.value)
                  }
                />
                <br />
              </div>
              <div className="form-group right">
                <label htmlFor="isAdmin">Is Admin:</label>
                <input
                  className="form-input"
                  type="checkbox"
                  id="isAdmin"
                  checked={isAdmin}
                  onChange={(event) => setIsAdmin(event.target.checked)}
                />
                <br />
              </div>
            </div>
            <div className="form-footer">
              <button
                className="save_add"
                type="submit"
                onClick={handleShow}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
}

export default AddUserForm;