import React, { useContext, useEffect, useState } from "react";
import HospitalContext from "../context/hospital/HospitalContext";
import HospitalTableRow from "./HospitalTableRow";

import Modal from "react-modal";

Modal.setAppElement("#root");


function Hospital() {

  const { setHospitals, hospitals, fetchAllHospitals, addHospital } =
    useContext(HospitalContext);

  const [hospData, setHosp] = useState({});
  const handleChange = (e) => {
    setHosp({ ...hospData, [e.target.id]: e.target.value });
  };

  const submitNewHospital = (e) => {
    e.preventDefault();
    addHospital(hospData);
  };
  const addTeamMember = () => {};
  useEffect(() => {
    fetchAllHospitals();
    // console.log(hosps)
    // console.log(hospitals)
  }, []);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addModal">
        Add New
      </button>
      <input
        type="text"
        className="filters mb-3"
        placeholder="Filter by City..."
      />
      <input
        type="text"
        className="filters mb-3 "
        placeholder="Filter by State..."
      />

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



    const { setHospitals, hospitals, fetchAllHospitals, addHospital } = useContext(HospitalContext)

    const [hospData, setHosp] = useState({})
    const handleChange = (e) => {
        setHosp({ ...hospData, [e.target.id]: e.target.value })

    }

    const submitNewHospital = (e) => {
        e.preventDefault();
        addHospital(hospData)
    }
    const addTeamMember = () => {

    }
    useEffect(() => {
        fetchAllHospitals()
        // console.log(hosps)
        // console.log(hospitals)
    }, []);
    return (
        <>

            
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                Add New
            </button>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submitNewHospital} >
                            <div className="modal-body">

                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="hname" className="form-label">Name</label>
                                    <input type="name" onChange={handleChange} required className="form-control" name="hname" id="hname" />
                                </div>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="haddress" className="form-label">Address</label>
                                    <input type="text" onChange={handleChange} required className="form-control" id="haddress" name="haddress" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hcity" onChange={handleChange} required className="form-control" placeholder="City" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hstate" onChange={handleChange} required className="form-control" placeholder="State" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hlat" onChange={handleChange} required className="form-control" placeholder="Latitude" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hlong" onChange={handleChange} required className="form-control" placeholder="Longitude" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hpincode" onChange={handleChange} required className="form-control" placeholder="Pincode" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hphone" onChange={handleChange} required className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">

                                <button type="submit" className="btn btn-primary">Save</button>
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
                        {

                            hospitals.map((item, i) => {

                                return <HospitalTableRow key={item._id} item={item} i={i} />
                            })

                        }
                    </tbody>
                </table>



            </div>
            <form onSubmit={submitNewHospital}>
              <div className="modal-body">
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="hname" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    onChange={handleChange}
                    required
                    className="form-control"
                    name="hname"
                    id="hname"
                  />
                </div>
                <div className="mb-3" style={{ textAlign: "left" }}>
                  <label htmlFor="haddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    required
                    className="form-control"
                    id="haddress"
                    name="haddress"
                  />
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input
                      type="text"
                      id="hcity"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="hstate"
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
                      id="hlat"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Latitude"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="hlong"
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
                      id="hpincode"
                      onChange={handleChange}
                      required
                      className="form-control"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      id="hphone"
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
            {hospitals.map((item, i) => {
              return <HospitalTableRow key={item._id} item={item} i={i} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Hospital;
