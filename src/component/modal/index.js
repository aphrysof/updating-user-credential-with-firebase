import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import "./modal.css";

const Index = ({setShowModal}) => {
  const { user } = useContext(AuthContext);

  const handleClose = () => {
    setShowModal(false);
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal_container">
        <div className="modal">
          <div className="modal_title">
            <p>Update profile</p>
          </div>
          <div className="modal_input">
            <label htmlFor="title">Username: </label>
            <input type="text" name="username" />
          </div>
          <div className="modal_input">
            <label htmlFor="title">Email: </label>
            <input type="email" name="email" />
          </div>
          <div className="modal_buttons">
            <button className="button" type="submit">
              Update
            </button>
            <button className="button" onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Index;
