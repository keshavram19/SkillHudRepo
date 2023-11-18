import React, { useEffect, useState } from "react";
import SideMenu from "../sidebar/SideMenu";
import "./institutions.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiTrash, BiEdit, BiPlus } from "react-icons/bi";

import axios from "axios";
import FormUpdate from "./FormUpdate";

axios.defaults.baseURL = "http://localhost:4446/api/";

const Institutions = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    instituionName: "",
    headOfInstitutionName: "",
    primaryEmail: "",
    primaryContact: "",
    secondaryEmail: "",
    secondaryContact: "",
    address: "",
    city: "",
    state: "",
    institutionCode: "",
    institutionType: "",
    accessPlan: "",
    password: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    instituionName: "",
    headOfInstitutionName: "",
    primaryEmail: "",
    primaryContact: "",
    secondaryEmail: "",
    secondaryContact: "",
    address: "",
    city: "",
    state: "",
    institutionCode: "",
    institutionType: "",
    accessPlan: "",
    password: "",
    _id: "",
  });

  const [dataList, setDataList] = useState([]);



  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getFetchData();
      setFormData({
        instituionName: "",
        headOfInstitutionName: "",
        primaryEmail: "",
        primaryContact: "",
        secondaryEmail: "",
        secondaryContact: "",
        address: "",
        city: "",
        state: "",
        institutionCode: "",
        institutionType: "",
        accessPlan: "",
        password: "",
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);

    if (data.data.success) {
      getFetchData();
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update/", formDataEdit);
    if (data.data.success) {
      getFetchData();
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setEditSection(false);
    }
  };

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target;
    setFormDataEdit((next) => {
      return {
        ...next,
        [name]: value,
      };
    });
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };
  return (
    <>
      <div className="main_container">
        <SideMenu />
        <div className="childContainer">
          <div className="textbox">
            <h1>Institutions</h1>

            <button className="btn" onClick={() => setAddSection(true)}>
              <BiPlus className="plus_icon" />
              Create Institution
            </button>
          </div>
          {addSection && (
            <FormUpdate
              handleSubmit={handleSubmit}
              handleOnChange={handleOnChange}
              handleClose={() => setAddSection(false)}
              rest={formData}
            />
          )}
          {editSection && (
            <FormUpdate
              handleSubmit={handleUpdate}
              handleOnChange={handleEditOnChange}
              handleClose={() => setEditSection(false)}
              rest={formDataEdit}
            />
          )}

          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Primary Email</th>
                  <th>Head </th>
                  <th>Users</th>
                  <th> Code</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((el,index) => {
                  return (
                    <tr key={index}>
                      <td>{index +1}</td>
                      <td>{el.instituionName}</td>
                      <td>{el.primaryEmail}</td>
                      <td>{el.headOfInstitutionName}</td>
                      <td>{el.users}</td>
                      <td>{el.institutionCode}</td>
                      <td className="edit-icons">
                        <BiEdit onClick={() => handleEdit(el)} />
                        <BiTrash onClick={() => handleDelete(el._id)} />
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

export default Institutions;
