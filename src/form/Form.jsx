import React, { useState } from "react";
import "./form.css";
import { FormControlLabel, Radio } from "@mui/material";
const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [active, setActive] = useState("");
  const [copyArray, setCopyArray] = useState([]);

  const firstName = (event) => {
    setFname(event.target.value);
  };
  const lastName = (event) => {
    setLname(event.target.value);
  };
  const checkActive = (event) => {
    setActive(event.target.value);
  };
  const saveMe = () => {
    if (fname && lname && active) {
      let newArray = {
        fname: fname,
        lname: lname,
        active: active,
      };
      setCopyArray([...copyArray, newArray]);
      alert("Save Successfully");
    } else {
      alert("Please fill in the blanck");
    }
  };
  const handleDelete = (index) => {
    // let copydata = [...copyArray];
    // copyArray.splice(index, 1);
    // setCopyArray(copydata);
    setCopyArray("");
  };
  return (
    <div>
      <div className="formWrapper">
        FirstName:{" "}
        <input type="text" placeholder="FirstName" onChange={firstName} />
        <br />
        LastName:{" "}
        <input type="text" placeholder="LastName" onChange={lastName} />
        <br />
        <div className="divStyle">
          <span className="spanStyle">Status : </span>
          <div onChange={checkActive}>
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <br />
            <FormControlLabel
              value="inactive"
              control={<Radio />}
              label="Inactive"
            />
          </div>
        </div>
      </div>
      <button onClick={saveMe} className="saveStyle">
        Save Contact
      </button>

      <div>
        {copyArray.map((item, index) => {
          return (
            <div className="formSaveStyle">
              <div>FirstName: {item.fname}</div>
              <div>LastName :{item.lname}</div>
              <div>Status : {item.active}</div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
