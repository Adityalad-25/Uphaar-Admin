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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid flex">
        <a class="navbar-brand" href="#">
          <img
            style={{ height: "60px", width: "60px" }}
            src="uphaar-logo.jpeg"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="nav-itemss d-flex align-items-center justify-content-space-between mb-2">
              <Link
                className="nav-item p-3"
                style={{ textDecoration: "none" }}
                to="/home">
                <h5 style={{ color: "black" }}>Uphaar-Admin Panel</h5>
              </Link>
            </div>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-primary" onClick={logOut}>
              Log Out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
