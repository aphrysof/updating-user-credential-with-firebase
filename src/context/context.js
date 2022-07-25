import { onAuthStateChanged, updateEmail, updateProfile } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

//create the global state AuthContext
const AuthContext = createContext({
  user: null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    // Use onAuthStateChanged as an observable to check the state of the user
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserDetails(user);
        console.log(user);
      } else {
        setUser(null);
        setUserDetails([]);
      }
    });
  }, []);

  //updating the Username
  const updateDisplayName = (displayName) => {
    updateProfile(user, { displayName })
      .then(() => {
        console.log("displayName updated");
      })
      .catch((err) => console.log(err));
  };
  //updating the email
  const updateUserEmail = (email) => {
    updateEmail(user, email)
      .then(() => {
        console.log("email updated");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userDetails,
        setUserDetails,
        updateDisplayName,
        updateUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
