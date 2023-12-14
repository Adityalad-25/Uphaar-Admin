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
  return (
    <tr>
    <th scope="row">{i+1}</th>
    <td>{pname}</td>
    <td>{paddress}</td>
    <td>{pcity}</td>
    <td>{pstate}</td>
    <td>{ppincode}</td>
    <td>{`${plat},${plong}`}</td>
    <td>{pphone}</td>
    <td>
        
        
        <button className='btn btn-warning' onClick={()=>{openUpdateModal(item)}}>Update</button>
        <button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
</tr>
  )
}

export default PoliceRow
