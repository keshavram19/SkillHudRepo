import React, { useEffect, useState } from "react";
import SideMenu from "../sidebar/SideMenu";
import "./user.css";
import axios from "axios";
import { MdClose } from "react-icons/md";
// import Userform from "./Userform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiTrash, BiEdit } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Users = () => {
  const accessPeriod = ["3 Months", "6 Months"];
  const [addSection, setAddSection] = useState(false);
  const [inputUser, setInputUser] = useState({
    institutions: "",
    batchYear: "",
    batch: "",
    firstName: "",
    lastName: "",
    email: "",
    regdID: "",
    mobile: "",
    userPassword: "",
    accessPeriod: "",
  });

  const handleChange = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await axios.post(
      "http://localhost:4446/user/createuser",
      inputUser
    );
    console.log(res);
    fetchAllUser();
  };

  const [userData, setUserData] = useState([]);
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:4446/user/readalluser");
    // console.log(res);
    setUserData(res.data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:4446/user/delete/${id}`);
    if (res.status === 200) {
      fetchAllUser();
    }
  };

  return (
    <>
      <div className="main_container1">
        <SideMenu />
        <div className="childContainer1">
          <div className="textbox1">
            <h3>Fiter User</h3>
            <div className="Btn-box2">
              <button
                className="createUser"
                onClick={() => setAddSection(true)}
              >
                Create User
              </button>
              <button className="extendUser">Extend User</button>
            </div>
          </div>
          <div className="filterSection">
            <div className="filterData">
              <select>
                <option>helo</option>
              </select>
              <label htmlFor="dropdown">Select Instituions</label>
              <select>
                <option>helo</option>
              </select>
              <label htmlFor="dropdown">Select Batch Year</label>
              <select>
                <option>helo</option>
              </select>
              <label htmlFor="dropdown">Select Batch</label>
            </div>
            <div className="filterBtn">
              <button>GO</button>
            </div>
          </div>
          {addSection && (
            <div className="addContainer">
              <form onSubmit={handleSubmit}>
                <div className="close-icon">
                  <MdClose />
                </div>
                <label htmlFor="institutions">Institution :</label>
                <input
                  type="text"
                  id="institutions"
                  name="institutions"
                  onChange={handleChange}
                  value={inputUser.institutions}
                  placeholder="Institution Name"
                />

                <label htmlFor="Batch Year">Batch Year:</label>
                <input
                  type="text"
                  id="batchYear"
                  name="batchYear"
                  onChange={handleChange}
                  value={inputUser.batchYear}
                  placeholder="Batch Year"
                />
                <div>
                  <label htmlFor="Batch">Batch:</label>
                  <input
                    type="text"
                    id="batch"
                    name="batch"
                    onChange={handleChange}
                    value={inputUser.batch}
                    placeholder="Batch"
                  />
                  <label htmlFor="firstName">firstName:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={inputUser.firstName}
                    placeholder="firstName"
                  />

                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={inputUser.lastName}
                    placeholder="lastName"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={inputUser.email}
                    placeholder="email"
                  />

                  <label htmlFor="regdID">regdID:</label>
                  <input
                    type="text"
                    id="regdID"
                    name="regdID"
                    onChange={handleChange}
                    value={inputUser.regdID}
                    placeholder="regdID"
                  />
                </div>
                <div>
                  <label htmlFor="mobile">mobile:</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    onChange={handleChange}
                    value={inputUser.mobile}
                    placeholder="mobile"
                  />
                </div>

                <div>
                  <label htmlFor="dropdown">Access Period:</label>
                  <select
                    type="dropdown"
                    id="accessPeriod"
                    name="accessPeriod"
                    onChange={handleChange}
                    value={inputUser.accessPeriod}
                  >
                    {accessPeriod.map((accessPeriod, index) => (
                      <option key={index} value={accessPeriod}>
                        {accessPeriod}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    onChange={handleChange}
                    value={inputUser.userPassword}
                    placeholder="Password"
                  />
                </div>
                <button className="btn-Submit" onClick={handleSubmit}>
                  Create
                </button>
              </form>
            </div>
          )}
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Primary Email</th>
                  <th>REGD </th>
                  <th>Mobile</th>
                  <th> Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.email}</td>
                      <td>{item.regdID}</td>
                      <td>{item.Status}</td>
                      <td>{item.ExpDate}</td>
                      <td className="edit-icons">
                        <NavLink>
                          <BiEdit />
                        </NavLink>

                        <BiTrash onClick={() => handleDelete(item._id)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
