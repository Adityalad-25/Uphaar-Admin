import React, { useContext, useEffect, useState } from "react";
import PoliceContext from "../context/PoliceStation/PoliceContext";
import PoliceStationRow from "./PoliceStationRow";
const PoliceStation = () => {
  const cxt = useContext(PoliceContext);

  const { police, fetchAllPolice, addPolice } = cxt;
  const [policeData, setPolice] = useState({});
  const handleChange = (e) => {
    setPolice({ ...policeData, [e.target.id]: e.target.value });
  };

  const submitNewPolice = (e) => {
    e.preventDefault();
    addPolice(policeData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPolice();
        console.log("Data fetched successfully", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <div className="container-fluid">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addModal">
        Add New
      </button>
      <input type="text" className="filters mb-3" placeholder="Filter by City..."/>
      <input type="text" className="filters mb-3 " placeholder="Filter by State..."/>

    </div>
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <form onSubmit={submitNewPolice}>
              <div className="modal-body">
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="pname" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    onChange={handleChange}
                    required
                    className="form-control"
                    name="pname"
                    id="pname"
                  />
                </div>
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="paddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    required
                    className="form-control"
                    id="paddress"
                    name="paddress"
                  />
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="pcity"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="pstate"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="plat"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Latitude"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="plong"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Longitude"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="ppincode"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="pphone"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
            {police.map((item, i) => {
              // console.log("police data",police)

              return <PoliceStationRow key={item._id} item={item} i={i} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PoliceStation;
