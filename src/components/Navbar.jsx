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

  const currentRoute =window.location.pathname;
  
 
  return (
    <nav className="navbar navbar-expand-lg bg-body-white border-3">
      <div className="container-fluid">
        <NavLink className="text-decoration-none " to="/home" >
        <a className="navbar-brand" href="">
          <img
            style={{ height: "60px", width: "60px", borderRadius: "50%", fontWeight: "bold", fontSize: "50px!important" }}
            src="uphaar-logo.jpeg"
            className="fs-2"
            alt="Logo"
          ></img>
         <span className="fw-bold fs-4" > Uphaar Admin</span>
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
                className=" nav-item fs-4 fw-bold p-3 text-decoration-none"
                activeClassName="text-hover"
              >
                Home
              </NavLink>
              <NavLink
                to="/hospital"
                className="nav-item fs-4 fw-bold m-3 text-decoration-none"
                activeClassName="text-hover"
              >
                Hospital
              </NavLink>
              <NavLink
                to="/firestation"
                className="nav-item fs-4 fw-bold m-3 text-decoration-none"
                activeClassName="text-hover"
              >
                Firestation
              </NavLink>
              <NavLink
                to="/police"
                className="nav-item fs-4 fw-bold m-3 text-decoration-none"
                activeClassName="text-hover text-decoration-underline"
              >
                PoliceStation
              </NavLink>
            </div>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-danger p-2 m-3 fs-5" onClick={logOut}>
              <AiOutlineLogout /> Log out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
