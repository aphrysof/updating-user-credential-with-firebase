import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { AuthContext } from "../../context/context";
import "./modal.css";

const Index = ({ setShowModal }) => {
  const { updateDisplayName, updateUserEmail } = useContext(AuthContext);

  //closing the popup modal
  const handleClose = () => {
    setShowModal(false);
  };

  //setting state of the values
  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  //update user details
  const handleSubmit = () => {
    updateDisplayName(values.username);
    updateUserEmail(values.email);
  };

  //updating the values state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal_container">
        <div className="modal">
          <div className="modal_title">
            <p>Update profile</p>
          </div>
          <div className="modal_input">
            <label htmlFor="title">Username: </label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="modal_input">
            <label htmlFor="title">Email: </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="modal_buttons">
            <button className="button" type="submit" onClick={handleSubmit}>
              Update
            </button>
            <button className="button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Index;
