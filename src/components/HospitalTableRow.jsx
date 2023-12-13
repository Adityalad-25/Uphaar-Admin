import React, { useContext,useState } from 'react'
import HospitalContext from '../context/hospital/HospitalContext'
import {useNavigate} from "react-router-dom"

function HospitalTableRow(props) {
const navigate = useNavigate()


    const {deleteHospital,updateHospital} = useContext(HospitalContext)
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

        const [itemC,setItemC] = useState(JSON.parse(JSON.stringify(item)))
        
        console.log(itemC)
        const handleChange = (e) =>{
            setItemC({...itemC, [e.target.id]:e.target.value})
            console.log(itemC)
        }

        const submitUpdateHospital=(e)=>{
            e.preventDefault();
            console.log(item)
            console.log(itemC)
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
                
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                Add New
            </button>

            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submitUpdateHospital} >
                            <div className="modal-body">

                                <input type='hidden' name="_id" defaultValue={_id} id="_id"/>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="hname" className="form-label">Name</label>
                                    <input type="name" onChange={handleChange} required className="form-control" name="hname" value={itemC.hname} id="hname" />
                                </div>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="haddress" className="form-label">Address</label>
                                    <input defaultValue={itemC.haddress} type="text" onChange={handleChange} required className="form-control" id="haddress" name="haddress" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hcity" onChange={handleChange} required className="form-control" defaultValue={itemC.hcity} placeholder="City"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hstate"  onChange={handleChange} required className="form-control" defaultValue={itemC.hstate} placeholder="State"/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hlat" onChange={handleChange} required className="form-control" defaultValue={itemC.hlat} placeholder="Latitude"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hlong"  onChange={handleChange} required className="form-control" defaultValue={itemC.hlong} placeholder="Longitude"/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="hpincode" onChange={handleChange} required className="form-control" defaultValue={itemC.hpincode}placeholder="Pincode"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="hphone"  onChange={handleChange} required className="form-control" defaultValue={itemC.hphone} placeholder="Phone"/>
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
                
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
        </tr>

    )
}

export default HospitalTableRow
