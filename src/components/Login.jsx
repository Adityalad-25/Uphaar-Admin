import React, { useState } from "react";
import CONSTANTS from "../constants/API_Constants";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
function Login() {
  const navigator = useNavigate();
  const { API_CONSTANTS, LOCAL } = CONSTANTS;
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // // console.log(e.target.value);
    setLoginData({ ...logindata, [e.target.id]: e.target.value });
    // console.log(logindata);
  };
  const signup = () => {
    navigator("/signup");
    window.location.reload();
  };
  const loginUser = async (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logindata),
    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.LOGIN, reqOptions);
    response = await response.json();
    if (response.success) {
      localStorage.setItem(LOCAL.TOKEN, response.token);
      localStorage.setItem(LOCAL.ISLOGGED, true);
      // alert("Login Successfull");
      navigator("/home");
      window.location.reload();
    } else {
      alert(response.message);
    }
  };

  return (
    // <>

    // <h1 className="d-flex align-items-center justify-content-center mt-5 mb-2">Login</h1>
    // <h6 className="d-flex align-items-center justify-content-center mb-3 p-2 ">Already have an Account ?<Link>Signup</Link></h6>

    // <div className="h-100 w-100 d-flex fl align-items-center justify-content-center ">

    //   <form>
    //     <div className="mb-3">
    //       <label htmlFor="email" className="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         onChange={handleChange}
    //         className="form-control"
    //         required
    //         name="email"
    //         id="email"
    //         aria-describedby="emailHelp"
    //       />
    //       <div id="emailHelp" className="form-text">
    //         We'll never share your email with anyone else.
    //       </div>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputPassword1" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         onChange={handleChange}
    //         className="form-control"
    //         name="password"
    //         id="password"
    //       />
    //     </div>
    //     <div className="mb-3 form-check">
    //       <input
    //         type="checkbox"
    //         className="form-check-input"
    //         id="exampleCheck1"
    //       />
    //       <label className="form-check-label" htmlFor="exampleCheck1">
    //         Check me out
    //       </label>
    //     </div>
    //     <div className="d-flex align-items-center justify-content-center" >

    //     <button className="btn btn-primary  d-flex align-items-center justify-content-center" type="submit" onClick={loginUser} >
    //       Submit
    //     </button>
    //     </div>
    //   </form>
    // </div>
    // </>

    <>
      <div className="main-container d-flex align-items-center justify-content-center mt-5 ">
        <div className="container">
          <img
            style={{ height: "80px", width: "80px" }}
            src="uphaar-logo.jpeg"
          ></img>
          <div className="heading">Login</div>
          <h6 style={{ color: "black", fontSize: "12px" }}>
            Don't have an account?
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={signup}
            >
              <span className="text-decoration-underline">Create Account</span>
            </button>
          </h6>
          <form action="" className="form">
            <input
              required=""
              className="input"
              type="email"
              onChange={handleChange}
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              required=""
              className="input"
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <span className="forgot-password">
              <a href="#">Forgot Password ?</a>
            </span>

            <input
              className="login-button"
              type="submit"
              onClick={loginUser}
              defaultValue="Sign In"
            />
          </form>
          {/* <div className="social-account-container">
      <span className="title">Or Sign in with</span>
      <div className="social-accounts">
        <button className="social-button google">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 488 512"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </button>
        <button className="social-button apple">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
        </button>
        <button className="social-button twitter">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </button>
      </div>
    </div> */}
          <span className="agreement">
            {/* <a href="#">Learn user licence agreement</a> */}
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
