import React, { useContext } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'

function HospitalTableRow(props) {


    const {deleteHospital} = useContext(HospitalContext)
     const { item,i } = props
    const { 
        _id,hname,
        haddress,
        hcity,
        hstate,
        hpincode,
        hlat,
        hlong,
        hphone } = item


        const handleDelete = ()=>{
            if( window.confirm('Are you sure?')===true){
                deleteHospital(_id)
            }
        }
    return (

        <tr>
            <th scope="row">{i+1}</th>
            <td>{hname}</td>
            <td>{haddress}</td>
            <td>{hcity}</td>
            <td>{hstate}</td>
            <td>{hpincode}</td>
            <td>{`${hlat},${hlong}`}</td>
            <td>{hphone}</td>
            <td><button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
        </tr>

    )
}

export default HospitalTableRow
