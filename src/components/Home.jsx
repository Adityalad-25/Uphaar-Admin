import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import API_Constants from "../constants/API_Constants";
import Navbar from "./Navbar";
import HospitalContext from "../context/hospital/HospitalContext";

function Home() {
  const cxt = useContext(HospitalContext);
  const { data } = cxt;

  return (
    <div className="containerr">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Pin Code</th>
            <th scope="col">Map</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
