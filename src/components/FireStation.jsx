import React, { useContext, useEffect, useRef, useState } from "react";
import FireContext from "../context/firestation/FireContext";
import FireStationRow from "./FireStationRow";

function FireStation() {
  const cxt = useContext(FireContext);
  const {
    fireStations,
    fetchAllFireStation,
    addFireStation,
    updateFireStation,
    deleteFirestation,
  } = cxt;
  const openRef = useRef(null);
  const closeRef = useRef(null);
  const closeAddRef = useRef(null);

  const [newFireStation, setNewFire] = useState({});
  const [editFireStation, setEditFire] = useState({});

  const submitNewFireStation = (e) => {
    e.preventDefault();
    addFireStation(newFireStation);
    closeAddRef.current.click();
    document.getElementById("newfirestnform").reset();
  };

  const submitEditfireStation = (e) => {
    e.preventDefault();
    updateFireStation(editFireStation);
    closeRef.current.click();
  };

  const openUpdateModal = (record) => {
    openRef.current.click();
    setEditFire(record);
  };

  const handleChange = (e) => {
    setNewFire({ ...newFireStation, [e.target.id]: e.target.value });
  };
  const editHandleChange = (e) => {
    setEditFire({ ...editFireStation, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    fetchAllFireStation();
  }, []);

  const [search, setSearch] = useState("");
  return (
    <>
      {/* <h1 className="text-center">Firestations</h1> */}

      <div className="d-flex justify-content-sm-around align-items-center ">
        <form className="form-group form-group-lg">
          <input
            type="text"
            style={{ width: 1000 }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="p-2 form-control m-lg5"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search Fire Stations"
          />
        </form>

        <button
          type="button"
          className="btn btn-primary mt-2 p-2 m-lg-3 mb-3 "
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add New
        </button>
      </div>

      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add{" "}
              </h5>
              <button
                type="button"
                ref={closeAddRef}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form id="newfirestnform" onSubmit={submitNewFireStation}>
              <div className="modal-body">
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="fname" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    onChange={handleChange}
                    required
                    className="form-control"
                    name="fname"
                    id="fname"
                  />
                </div>
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="faddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    required
                    className="form-control"
                    id="faddress"
                    name="faddress"
                  />
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="fcity"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="fstate"
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
                      id="flat"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Latitude"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="flong"
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
                      id="fpincode"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="fphone"
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

      <button
        type="button"
        ref={openRef}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        update
      </button>

      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Modal
              </h5>
              <button
                type="button"
                ref={closeRef}
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={submitEditfireStation}>
              <div className="modal-body">
                <input type="hidden" id="_id" value={editFireStation._id} />
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="fname" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    onChange={editHandleChange}
                    required
                    className="form-control"
                    name="fname"
                    value={editFireStation.fname}
                    id="fname"
                  />
                </div>
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="faddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    onChange={editHandleChange}
                    required
                    className="form-control"
                    id="faddress"
                    name="faddress"
                    value={editFireStation.faddress}
                  />
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="fcity"
                      onChange={editHandleChange}
                      required
                      className="form-control"
                      value={editFireStation.fcity}
                      placeholder="City"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="fstate"
                      onChange={editHandleChange}
                      required
                      className="form-control"
                      value={editFireStation.fstate}
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="flat"
                      onChange={editHandleChange}
                      required
                      className="form-control"
                      value={editFireStation.flat}
                      placeholder="Latitude"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="flong"
                      onChange={editHandleChange}
                      required
                      className="form-control"
                      value={editFireStation.flong}
                      placeholder="Longitude"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="fpincode"
                      onChange={editHandleChange}
                      required
                      className="form-control"
                      value={editFireStation.fpincode}
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="fphone"
                      onChange={editHandleChange}
                      required
                      className="form-control"
                      value={editFireStation.fphone}
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

      <table className="table m-auto" style={{'width':'90%'}}>
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
        <tbody className="mt-10px table-group-divider">
          {fireStations
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : JSON.stringify(item)
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            .map((item, i) => {
              return (
                <FireStationRow
                  key={i}
                  item={item}
                  openUpdateModal={openUpdateModal}
                  i={i}
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default FireStation;
