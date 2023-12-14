import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes, Link, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import API_Constants from "./constants/API_Constants";
import Homepage from "./pages/Homepage";
import HospitalState from "./context/hospital/HospitalState";
import HospitalPage from "./pages/HospitalPage";
import FireState from "./context/firestation/FireState";
import FirePage from "./pages/FirePage";
import PoliceState from "./context/police/PoliceState";
import PolicePage from "./pages/PolicePage";

function App() {
  const { LOCAL } = API_Constants;
  return (
    <>
      <FireState>
        <HospitalState>
          <PoliceState>
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

                <Route
                  exact
                  path="/hospital"
                  element={
                    localStorage.getItem(LOCAL.ISLOGGED) ? (
                      <HospitalPage />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
                <Route
                  exact
                  path="/firestation"
                  element={
                    localStorage.getItem(LOCAL.ISLOGGED) ? (
                      <FirePage />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                /> <Route
                  exact
                  path="/police"
                  element={
                    localStorage.getItem(LOCAL.ISLOGGED) ? (
                      <PolicePage />
                    ) : (
                      <Navigate to="/" />
                    )
                  }
                />
              </Routes>
            </BrowserRouter>
          </PoliceState>
        </HospitalState>
      </FireState>
    </>
  );
}

export default App;
