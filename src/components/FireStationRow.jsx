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
  
        const location = `https://maps.google.com/?q=${flat},${flong}`
    return (

        <tr>
            <th scope="row">{i+1}</th>
            <td>{fname}</td>
            <td>{faddress}</td>
            <td>{fcity}</td>
            <td>{fstate}</td>
            <td>{fpincode}</td>
            <td><a href={location} target='_blank'><h3><i className="uil uil-map-pin-alt"></i></h3></a></td>
            <td>{fphone}</td>
            <td className='d-flex'>
                
            
                
                <button className='btn btn-warning m-1' onClick={()=>{openUpdateModal(item)}}><i className="uil uil-edit"></i></button>
                <button className='btn btn-danger m-1' onClick={handleDelete}><i className="uil uil-trash"></i></button></td>
        </tr>

    )
}

export default FireStationRow
