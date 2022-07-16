import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
const PrivateRoute = () => {
    //displaying  ui based on the auth state of the user using Outlet
    const {user} = useContext(AuthContext)
    return (
        user ? <Outlet context={user} /> :
        <Navigate to = "/login" />
    );
}
export default PrivateRoute;