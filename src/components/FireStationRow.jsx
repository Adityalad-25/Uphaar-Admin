import React, { useContext,useState } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'
import {useNavigate} from "react-router-dom"

function FireStationRow(props) {
const navigate = useNavigate()

    const {item,i} = props
    const { 
        _id,fname,
        faddress,
        fcity,
        fstate,
        fpincode,
        flat,
        flong,
        fphone } = item
  
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
                
            
                
                <button className='btn btn-danger'>Delete</button></td>
        </tr>

    )
}

export default FireStationRow
