import React from "react";
import "./complier.css";

import SideMenu from "../../sidebar/SideMenu";

const ComplierTest = () => {
  const options = [
    "C",
    "C++",
    "JavaScript",
    "React",
    "Node",
    "Java",
    "Python",
    "Angular",
  ];
  return (
    <>
      <div className="main_price">
        <div className="side-box">
          <SideMenu />
        </div>
        <div className="content-box">
          <div className="content-box_dropdown">
            <form>
              <h1 className="complier_heading">COMPILER TEST</h1>
              <div className="dropdown-container">
                <label htmlFor="dropdown" className="dropdown-label">
                  Languages:
                </label>
                <select id="dropdown" className="dropdown-select">
                  {options.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      className="dropdown-option"
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <div className="textarea-col">
                  <label htmlFor="text-code">Code</label>
                  <textarea
                    rows={5}
                    cols={140}
                    placeholder="Write your code..."
                    className="complier-text"
                  ></textarea>
                </div>
                <div className="textarea-col">
                  <label htmlFor="text-code">STDIN</label>
                  <textarea
                    rows={5}
                    cols={140}
                    placeholder="STDIN"
                    className="complier-text"
                  ></textarea>
                </div>
              </div>
              <div className="btn-container">
                <button type="submit" className="btn-box1">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComplierTest;
