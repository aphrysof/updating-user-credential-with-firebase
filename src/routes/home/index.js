import React, { useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./home.css";
import { AuthContext } from "../../context/context";
import { SignOut } from "../../firebase";
const Index = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="homepage">
      <p>Hey, {user.displayName} </p>
      <p>
        <Link to="/profile">Click Here</Link> to edit your Profile
      </p>
      <button onClick={SignOut}>Sign Out</button>
    </div>
  );
};

export default Index;
