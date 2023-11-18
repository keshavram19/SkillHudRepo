import React from "react";
import "./institutions.css";
import { MdClose } from "react-icons/md";

const FormUpdate = ({ handleSubmit, handleOnChange, handleClose, rest }) => {
  const institutionType = [
    "--Intitution Type--",
    "School",
    "College",
    "Education Society",
    "University",
    "Training Institute",
    "Ngo",
  ];
  const accessPlan = ["Exam_practice", "Exam_practice_lens"];
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-icon" onClick={handleClose}>
          <MdClose />
        </div>
        <label htmlFor="instituionName">Institution :</label>
        <input
          type="text"
          id="institutionName"
          name="instituionName"
          onChange={handleOnChange}
          value={rest.instituionName}
          placeholder="Institution Name"
        />

        <label htmlFor="headOfInstitutionName">Head Of Institution Name:</label>
        <input
          type="text"
          id="headOfInstitutionName"
          name="headOfInstitutionName"
          onChange={handleOnChange}
          value={rest.headOfInstitutionName}
          placeholder="Head Of Institution Name"
        />
        <div>
          <label htmlFor="primaryEmail">Primary Email:</label>
          <input
            type="email"
            id="primaryEmail"
            name="primaryEmail"
            onChange={handleOnChange}
            value={rest.primaryEmail}
            placeholder="Primary Email"
          />

          <label htmlFor="primaryContact">Primary Contact:</label>
          <input
            type="text"
            id="primaryContact"
            name="primaryContact"
            onChange={handleOnChange}
            value={rest.primaryContact}
            placeholder="Primary Contact"
          />
        </div>
        <div>
          <label htmlFor="secondaryEmail">Secondary Email:</label>
          <input
            type="email"
            id="secondaryEmail"
            name="secondaryEmail"
            onChange={handleOnChange}
            value={rest.secondaryEmail}
            placeholder="Secondary Email"
          />

          <label htmlFor="secondaryContact">Secondary Contact:</label>
          <input
            type="text"
            id="secondaryContact"
            name="secondaryContact"
            onChange={handleOnChange}
            value={rest.secondaryContact}
            placeholder="Secondary Contact"
          />
        </div>

        <label htmlFor="address">Address:</label>
        <textarea
          rows={5}
          column={3}
          type="address"
          id="address"
          name="address"
          onChange={handleOnChange}
          value={rest.address}
          placeholder="Address"
        />
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleOnChange}
            value={rest.city}
            placeholder="City"
          />

          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            onChange={handleOnChange}
            value={rest.state}
            placeholder="State"
          />

          <label htmlFor="institutionCode">Institution Code</label>
          <input
            type="text"
            id="institutionCode"
            name="institutionCode"
            onChange={handleOnChange}
            value={rest.institutionCode}
            placeholder="Institution Code"
          />
        </div>

        <div>
          <label htmlFor="dropdown">Institution Type:</label>
          <select
            type="dropdown"
            id="institutionType"
            name="institutionType"
            onChange={handleOnChange}
            value={rest.institutionType}
          >
            {institutionType.map((institutionType, index) => (
              <option key={index} value={institutionType}>
                {institutionType}
              </option>
            ))}
          </select>
          <label htmlFor="dropdown">Access Plan</label>
          <select
            type="dropdown"
            id="accessPlan"
            name="accessPlan"
            onChange={handleOnChange}
            value={rest.accessPlan}
          >
            {accessPlan.map((accessPlan, index) => (
              <option key={index} value={accessPlan}>
                {accessPlan}
              </option>
            ))}
          </select>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleOnChange}
            value={rest.password}
            placeholder="Password"
          />
        </div>
        <button className="btn-Submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default FormUpdate;
