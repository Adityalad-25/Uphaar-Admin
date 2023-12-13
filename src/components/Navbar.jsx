import React from "react";
import API_Constants from "../constants/API_Constants";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem(API_Constants.LOCAL.ISLOGGED);
    navigate("/");
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img
          style={{ height: "60px", width: "60px" }}
          src="uphaar-logo.jpeg"
          alt="Logo"
        />
      </Link>
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
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item p-sm-3">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item p-sm-3">
            <Link className="nav-link" to="/hospital">
              Hospitals
            </Link>
          </li>
          <li className="nav-item p-sm-3">
            <Link className="nav-link" to="/firestation">
              Fire Stations
            </Link>
          </li>
          <li className="nav-item p-sm-3">
            <Link className="nav-link" to="/police">
              Police Stations
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-success" onClick={logOut}>
            Log Out
          </button>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
