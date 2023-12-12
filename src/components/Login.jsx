import React, { useState } from "react";
import CONSTANTS from "../constants/API_Constants";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigator = useNavigate();
  const { API_CONSTANTS, LOCAL } = CONSTANTS;
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setLoginData({ ...logindata, [e.target.id]: e.target.value });
    console.log(logindata);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logindata),
    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.LOGIN, reqOptions);
    response = await response.json();
    if (response.success) {
      localStorage.setItem(LOCAL.TOKEN, response.token);
      localStorage.setItem(LOCAL.ISLOGGED, true);
      alert("Login Successfull");
      navigator("/home");
      window.location.reload();
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center ">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={handleChange}
            className="form-control"
            required
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            className="form-control"
            name="password"
            id="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={loginUser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
