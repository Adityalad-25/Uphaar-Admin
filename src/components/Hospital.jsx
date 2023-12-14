import React, { useContext, useEffect, useState, useRef } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'
import HospitalTableRow from './HospitalTableRow';
import Modal from 'react-modal';


Modal.setAppElement("#root");

function Hospital() {


    const { setHospitals, hospitals, fetchAllHospitals, addHospital, updateHospital } = useContext(HospitalContext)



    const [hospData, setHosp] = useState({})
    const [editHospData, setEditHospData] = useState({ hname: "", haddress: "", hcity: "", hstate: "", hlat: "", hlong: "", hpincode: "", hphone: "" })
    const handleChange = (e) => {
        setHosp({ ...hospData, [e.target.id]: e.target.value })

    }
    const editHandleChange = (e) => {
        setEditHospData({ ...editHospData, [e.target.id]: e.target.value })
        console.log(editHospData)

    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateHospital(editHospData)
        refClose.current.click()
    }
    const submitNewHospital = (e) => {
        e.preventDefault();
        addHospital(hospData)
        refAddClose.current.click();
    }

    useEffect(() => {
        fetchAllHospitals()
    }, []);


    const ref = useRef(null)
    const refClose = useRef(null)
    const refAddClose = useRef(null)

    const updateModalOpen = (record) => {
        ref.current.click()
        // // console.log(record)
        // setEditHospData({ hname:"",haddress:"",hcity:"",hstate:"",hlat:"",hlong:"",hpincode:"",hphone:"" })
        setEditHospData(record)
    }

    return (
        <>


            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                Add New
            </button>

            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add </h5>
                            <button type="button" ref={refAddClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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



            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editModal">
                update
            </button>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Modal</h5>
                            <button type="button" ref={refClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleUpdateSubmit} >
                            <div className="modal-body">
                                <input type='hidden' id='_id' value={editHospData._id} />
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="hname" className="form-label">Name</label>
                                    <input type="name" onChange={editHandleChange} required className="form-control" name="hname" value={editHospData.hname} id="hname" />
                                </div>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="haddress" className="form-label">Address</label>
                                    <input type="text" onChange={editHandleChange} required className="form-control" id="haddress" name="haddress" value={editHospData.haddress} />
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hcity" onChange={editHandleChange} required className="form-control" value={editHospData.hcity} placeholder="City" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hstate" onChange={editHandleChange} required className="form-control" value={editHospData.hstate} placeholder="State" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hlat" onChange={editHandleChange} required className="form-control" value={editHospData.hlat} placeholder="Latitude" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hlong" onChange={editHandleChange} required className="form-control" value={editHospData.hlong} placeholder="Longitude" />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hpincode" onChange={editHandleChange} required className="form-control" value={editHospData.hpincode} placeholder="Pincode" />
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hphone" onChange={editHandleChange} required className="form-control" value={editHospData.hphone} placeholder="Phone" />
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

                                return <HospitalTableRow key={item._id} item={item} i={i} updateModalOpen={updateModalOpen} />
                            })

                        }
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default Hospital
