import React, { useState } from "react";
import CONSTANTS from "../constants/API_Constants";

function Login() {
  const { API_CONSTANTS } = CONSTANTS;
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
    uname: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setLoginData({ ...logindata, [e.target.id]: e.target.value });
    console.log(logindata);
  };

  const signupUser = async (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logindata),
    };
    console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.SIGNUP, reqOptions);
    response = await response.json();
    if (response.success) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("isLogged", true);
      alert("User Created Successfull");
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center ">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Username
          </label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            required
            name="uname"
            id="uname"
            aria-describedby="emailHelp"
          />
        </div>
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
        <button type="submit" onClick={signupUser} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
