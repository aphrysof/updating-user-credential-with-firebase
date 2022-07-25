import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../component/modal";
import { deleteUser } from "firebase/auth";

const Index = () => {
  const { userDetails, user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
    console.log("open modal");
  };

  //deleting a user Account
  const deleteUserAccount = () => {
    deleteUser(user)
      .then(() => {
        console.log("account deleted");
      })
      .catch((err) => console.log(err.message));
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="header_buttons">
        <button className="profile_button" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="profile_button" onClick={deleteUserAccount}>
          Delete Account
        </button>
      </div>

      <div key={userDetails.uid} className="profile_card">
        <div className="profile_details">
          <img src={userDetails.photoURL} alt="profile" />
          <ul>
            <li>Username: {userDetails.displayName}</li>
            <li>Email: {userDetails.email}</li>
          </ul>
          <button className="update_button" onClick={openModal}>
            update profile
          </button>
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Index;
