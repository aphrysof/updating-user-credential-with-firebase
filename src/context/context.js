import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

//create the global state
const AuthContext = createContext({
  user: null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userDetails, setUserDetails] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if(user) {
      const userData = user.providerData;
      setUserDetails(userData);
      console.log(userData);
    }else {
      setUserDetails([]);
    }
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userDetails,
        setUserDetails
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
