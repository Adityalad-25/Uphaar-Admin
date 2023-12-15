import React, { useContext,useState } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'
import {useNavigate} from "react-router-dom"
import FireContext from '../context/firestation/FireContext'

function FireStationRow(props) {
const navigate = useNavigate()

    const {item,i,openUpdateModal} = props
    const { 
        _id,fname,
        faddress,
        fcity,
        fstate,
        fpincode,
        flat,
        flong,
        fphone } = item

        const {deleteFirestation} = useContext(FireContext)
        const handleDelete =()=>{
            deleteFirestation(_id)
        }
  
    return (

        <tr>
            <th scope="row">{i+1}</th>
            <td>{fname}</td>
            <td>{faddress}</td>
            <td>{fcity}</td>
            <td>{fstate}</td>
            <td>{fpincode}</td>
            <td>{`${flat},${flong}`}</td>
            <td>{fphone}</td>
            <td>
                
            
                
                <button className='btn btn-warning m-lg-3 ' onClick={()=>{openUpdateModal(item)}}>Update</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
        </tr>

    )
}

export default FireStationRow
