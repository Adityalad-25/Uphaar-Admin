import React, { useContext } from 'react'
import PoliceContext from '../context/police/PoliceContext'

function PoliceRow(props) {

  const {item,i,openUpdateModal} = props
  const {  _id,pname,
    paddress,
    pcity,
    pstate,
    ppincode,
    plat,
    plong,
    pphone } = item

    const {deletePoliceStation} = useContext(PoliceContext)

    const handleDelete = () =>{
      if(window.confirm("Are you Sure ?")===true){
        deletePoliceStation(_id)
      }
    }


    const location = `https://maps.google.com/?q=${plat},${plong}`
  return (
    <tr>
    <th scope="row">{i+1}</th>
    <td>{pname}</td>
    <td>{paddress}</td>
    <td>{pcity}</td>
    <td>{pstate}</td>
    <td>{ppincode}</td>
    <td><a href={location} target='_blank'><h3><i className="uil uil-map-pin-alt"></i></h3></a></td>
    <td>{pphone}</td>
    <td className='d-flex'>
        
        
        <button className='btn btn-warning m-1 ' onClick={()=>{openUpdateModal(item)}}><i className="uil uil-edit"></i></button>
        <button className='btn btn-danger m-1' onClick={handleDelete}><i className="uil uil-trash"></i></button></td>
</tr>
  )
}

export default PoliceRow
