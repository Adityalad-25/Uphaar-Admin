import React, { useContext, useEffect, useState } from 'react'
import FireStationContext from '../context/firestation/FireStationContext'
import FireStationTable from './FireStationTable';

function FireStation() {


    const {deletefireStation,updateFirestation, setFireStations,firestations, fetchAllFireStations, addFireStation} = useContext(FireStationContext)

    const [fireData,setfire] = useState({})
    const handleChange = (e) => {
        setfire({...fireData,[e.target.id]:e.target.value})
        
    }

    const submitNewFStation = (e)=>{
        e.preventDefault();
        addFireStation(fireData)
    }
    const addTeamMember = () => {

    }
    useEffect(() => {
        fetchAllFireStations()
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
                        <form onSubmit={submitNewFStation} >
                            <div className="modal-body">

                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="fname" className="form-label">Name</label>
                                    <input type="name" onChange={handleChange} required className="form-control" name="fname" id="fname" />
                                </div>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="faddress" className="form-label">Address</label>
                                    <input type="text" onChange={handleChange} required className="form-control" id="faddress" name="faddress" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="fcity" onChange={handleChange} required className="form-control" placeholder="City"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="fstate"  onChange={handleChange} required className="form-control" placeholder="State"/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="flat" onChange={handleChange} required className="form-control" placeholder="Latitude"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="flong"  onChange={handleChange} required className="form-control" placeholder="Longitude"/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="fpincode" onChange={handleChange} required className="form-control" placeholder="Pincode"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="fphone"  onChange={handleChange} required className="form-control" placeholder="Phone"/>
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

                            firestations.map((item, i) => {

                                return <FireStationTable key={item._id} item={item} i={i} />
                            })

                        }
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default FireStation
