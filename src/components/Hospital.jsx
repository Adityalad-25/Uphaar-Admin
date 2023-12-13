import React, { useContext, useEffect } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'
import HospitalTableRow from './HospitalTableRow';

function Hospital() {


    const { setHospitals,hospitals,fetchAllHospitals} = useContext(HospitalContext)

     
    useEffect(() => {
        fetchAllHospitals()
        // console.log(hosps)
        console.log(hospitals)
      },[]);
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
          {

            hospitals.map((item,i)=>{

                return <HospitalTableRow key={item._id} item={item} i={i}/>
            })

          }
        </tbody>
      </table>
    </div>
  )
}

export default Hospital
