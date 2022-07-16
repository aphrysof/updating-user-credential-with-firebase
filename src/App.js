import { Login, Home, Profile, PrivateRoute } from "./routes";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
