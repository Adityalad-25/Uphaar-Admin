import React from "react";
import API_Constants from "../constants/API_Constants";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "../css/Dashboard.css";

function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem(API_Constants.LOCAL.ISLOGGED);
    navigate("/");
    window.location.reload();
  };

  const currentRoute = window.location.pathname;

  const shadowCSS = {
    "box-shadow": "-2px 7px 20px -4px rgba(0,0,0,0.59)",
    "-webkit-box-shadow": "-2px 7px 20px -4px rgba(0,0,0,0.59)",
    "-moz-box-shadow": "-2px 7px 20px -4px rgba(0,0,0,0.59)",
    "border-radius": "0px 0px 20px 20px",
    "-webkit-border-radius": "0px 0px 18px 19px",
    "-moz-border-radius": "0px 0px 18px 19px",
    "margin-bottom": "20px"
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-white border-3"
      style={shadowCSS}
    >
      <div className="container-fluid">
        <NavLink className="text-decoration-none " to="/home">
          <a className="navbar-brand" href="">
            <img
              style={{
                height: "90px",
                width: "90px",
                borderRadius: "50%",
                fontWeight: "bold",
                fontSize: "0px!important",
              }}
              src="uphaar-logo.jpeg"
              className="fs-2"
              alt="Logo"
            ></img>
            <span className="fw-bold fs-4"> Uphaar Admin</span>
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="nav-items d-flex align-items-center">
              <NavLink
                to="/home"
                className=" nav-item fs-5  p-3 text-decoration-none"
                activeClassName="text-hover"
                style={{
                  color: currentRoute === "/home" ? "orange" : "black",
                  fontWeight: currentRoute === "/home" ? "bold" : "regular",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/hospital"
                className="nav-item fs-5  m-3 text-decoration-none"
                activeClassName="text-hover"
                style={{
                  color: currentRoute === "/hospital" ? "orange" : "black",
                  fontWeight: currentRoute === "/hospital" ? "bold" : "regular",
                }}
              >
                Hospital
              </NavLink>
              <NavLink
                to="/firestation"
                className="nav-item fs-5  m-3 text-decoration-none"
                activeClassName="text-hover"
                style={{
                  color: currentRoute === "/firestation" ? "orange" : "black",
                  fontWeight:
                    currentRoute === "/firestation" ? "bold" : "regular",
                }}
              >
                Fire Station
              </NavLink>
              <NavLink
                to="/police"
                className="nav-item fs-5  m-3 text-decoration-none"
                activeClassName="text-hover text-decoration-underline"
                style={{
                  color: currentRoute === "/police" ? "orange" : "black",
                  fontWeight: currentRoute === "/police" ? "bold" : "regular",
                }}
              >
                Police Station
              </NavLink>
            </div>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-danger p-2 m-3 fs-6" onClick={logOut}>
              <AiOutlineLogout /> Log out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
