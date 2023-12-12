import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes, Link, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import API_Constants from "./constants/API_Constants";
import Homepage from "./pages/Homepage";
import HospitalState from "./context/hospital/HospitalState";

function App() {
  const { LOCAL } = API_Constants;
  return (
    <>
      <HospitalState>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                localStorage.getItem(LOCAL.ISLOGGED) ? (
                  <Navigate to="/home" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path="/signup"
              element={
                localStorage.getItem(LOCAL.ISLOGGED) ? (
                  <Navigate to="/home" />
                ) : (
                  <Signup />
                )
              }
            />
            <Route
              exact
              path="/home"
              element={
                localStorage.getItem(LOCAL.ISLOGGED) ? (
                  <Homepage />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </HospitalState>
    </>
  );
}

export default App;
