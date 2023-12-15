import React, { useContext, useEffect, useRef, useState } from 'react'
import PoliceContext from '../context/police/PoliceContext'
import PoliceRow from './PoliceRow'


function Police() {

  const closeAdd = useRef(null)
  const closeUpdate = useRef(null)
  const openRef = useRef(null)

  const { policeStations, fetchAllPoliceStation, addPoliceStation, updatePoliceStation, deletePoliceStation } = useContext(PoliceContext)
  useEffect(() => {
    fetchAllPoliceStation()
  }, [])


  const [newPolice, setNewPolice] = useState({})
  const [editPolice, setEditPolice] = useState({})

  const handleChange = (e) => {
    setNewPolice({ ...newPolice, [e.target.id]: e.target.value })
  } 
  const editHandleChange = (e) => {
    setEditPolice({ ...editPolice, [e.target.id]: e.target.value })
  }
  const openUpdateModal =(record)=>{
    setEditPolice(record)
    openRef.current.click()

  }

  const submitNewPoliceStation = (e) => {
    e.preventDefault()
    addPoliceStation(newPolice)
    closeAdd.current.click()
  }
   const submitEditPoliceStation = (e) => {
    e.preventDefault()
    updatePoliceStation(editPolice)
    closeUpdate.current.click()
  }

  return (
    <div>


          <h1 className='text-center' >PoliceStations</h1>
  
      <button type="button" className="btn btn-primary mt-2 p-2 m-lg-3 mb-3  " data-bs-toggle="modal" data-bs-target="#addModal">
        Add New
      </button>

      <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add </h5>
              <button type="button" ref={closeAdd} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={submitNewPoliceStation} >
              <div className="modal-body">

                <div className="mb-3" style={{ textAlign: 'left' }}>
                  <label htmlFor="pname" className="form-label">Name</label>
                  <input type="name" onChange={handleChange} required className="form-control" name="pname" id="pname" />
                </div>
                <div className="mb-3" style={{ textAlign: 'left' }}>
                  <label htmlFor="paddress" className="form-label">Address</label>
                  <input type="text" onChange={handleChange} required className="form-control" id="paddress" name="paddress" />
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input type="text" id="pcity" onChange={handleChange} required className="form-control" placeholder="City" />
                  </div>
                  <div className="col">
                    <input type="text" id="pstate" onChange={handleChange} required className="form-control" placeholder="State" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input type="text" id="plat" onChange={handleChange} required className="form-control" placeholder="Latitude" />
                  </div>
                  <div className="col">
                    <input type="text" id="plong" onChange={handleChange} required className="form-control" placeholder="Longitude" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input type="text" id="ppincode" onChange={handleChange} required className="form-control" placeholder="Pincode" />
                  </div>
                  <div className="col">
                    <input type="text" id="pphone" onChange={handleChange} required className="form-control" placeholder="Phone" />
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

      <button type="button" ref={openRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editModal">
        update
      </button>

      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Modal</h5>
              <button type="button" ref={closeUpdate} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={submitEditPoliceStation} >
              <div className="modal-body">
                <input type='hidden' id='_id' value={editPolice._id} />
                <div className="mb-3" style={{ textAlign: 'left' }}>
                  <label htmlFor="pname" className="form-label">Name</label>
                  <input type="name" onChange={editHandleChange} required className="form-control" name="pname" value={editPolice.pname} id="pname" />
                </div>
                <div className="mb-3" style={{ textAlign: 'left' }}>
                  <label htmlFor="paddress" className="form-label">Address</label>
                  <input type="text" onChange={editHandleChange} required className="form-control" id="paddress" name="paddress" value={editPolice.paddress} />
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input type="text" id="pcity" onChange={editHandleChange} required className="form-control" value={editPolice.pcity} placeholder="City" />
                  </div>
                  <div className="col">
                    <input type="text" id="pcity" onChange={editHandleChange} required className="form-control" value={editPolice.pcity} placeholder="State" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input type="text" id="plat" onChange={editHandleChange} required className="form-control" value={editPolice.plat} placeholder="Latitude" />
                  </div>
                  <div className="col">
                    <input type="text" id="plong" onChange={editHandleChange} required className="form-control" value={editPolice.plong} placeholder="Longitude" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <input type="text" id="ppincode" onChange={editHandleChange} required className="form-control" value={editPolice.ppincode} placeholder="Pincode" />
                  </div>
                  <div className="col">
                    <input type="text" id="pphone" onChange={editHandleChange} required className="form-control" value={editPolice.pphone} placeholder="Phone" />
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

            policeStations.map((item, i) => {

              return <PoliceRow key={item._id} item={item} i={i}
              openUpdateModal={openUpdateModal}
              />
            })

          }
        </tbody>
      </table>
    </div>
  )
}

export default Police
