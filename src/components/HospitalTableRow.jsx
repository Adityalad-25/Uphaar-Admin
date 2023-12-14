import React, { useContext,useState } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'
import {useNavigate} from "react-router-dom"

function HospitalTableRow(props) {
const navigate = useNavigate()


    const {deleteHospital,updateHospital} = useContext(HospitalContext)
     const { item,i ,updateModalOpen} = props
    const { 
        _id,hname,
        haddress,
        hcity,
        hstate,
        hpincode,
        hlat,
        hlong,
        hphone } = item

        const [itemC,setItemC] = useState(JSON.parse(JSON.stringify(item)))
        
        // console.log(itemC)
        const handleChange = (e) =>{
            setItemC({...itemC, [e.target.id]:e.target.value})
            // console.log(itemC)
        }

        const submitUpdateHospital=(e)=>{
            e.preventDefault();
            // console.log(item)
            // console.log(itemC)
            updateHospital(itemC)
           
        }

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
            <td>
                
            <button type="button" className="btn btn-warning" onClick={()=>{updateModalOpen(item)}}>
               update
            </button>

           
                
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
        </tr>

    )
}

export default HospitalTableRow
