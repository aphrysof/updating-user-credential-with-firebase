import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Modal from '../../component/modal'
const Index = () => {
  const { userDetails } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
    console.log("open modal");
  };

  const navigate = useNavigate();
  return (
    <>
      <button className="profile_button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {userDetails &&
        userDetails.map((profile) => (
          <div key={profile.uid} className="profile_card">
            <div className="profile_details">
              <img src={profile.photoURL} alt="profile" />
              <ul>
                <li>Username: {profile.displayName}</li>
                <li>Email: {profile.email}</li>
              </ul>
              <button className="update_button" onClick={openModal}>
                update profile
              </button>
            </div>
          </div>
        ))}
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </>
  );
};

export default Index;
