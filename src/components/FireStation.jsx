import React, { useContext, useEffect } from 'react'
import FireContext from '../context/firestation/FireContext'
import FireStationRow from './FireStationRow'

function FireStation() {


  const cxt = useContext(FireContext)
  const { fireStations, fetchAllFireStation } = cxt

  useEffect(() => {
    fetchAllFireStation();
  }, [])
  return (
    <>




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

            fireStations.map((item, i) => {

              return <FireStationRow key={item._id} item={item} i={i} />
            })

          }
        </tbody>
      </table>



    </>
  )
}

export default FireStation
