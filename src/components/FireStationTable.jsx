import React, { useContext,useState } from 'react'
import FireStationContext from '../context/firestation/FireStationContext'
import {useNavigate} from "react-router-dom"

function FireStationTable(props) {
const navigate = useNavigate()


    const {deleteFireSt,updateFireSt} = useContext(FireStationContext)
     const { item,i } = props
    const { 
        _id,fname,
        faddress,
        fcity,
        fstate,
        fpincode,
        flat,
        flong,
        fphone } = item

        const [itemC,setItemC] = useState(JSON.parse(JSON.stringify(item)))
        
        console.log(itemC)
        const handleChange = (e) =>{
            setItemC({...itemC, [e.target.id]:e.target.value})
            console.log(itemC)
        }

        const submitUpdateFireSt=(e)=>{
            e.preventDefault();
            console.log(item)
            console.log(itemC)
            updateFireSt(itemC)
            navigate("#")
            
        }

        const handleDelete = ()=>{
            if( window.confirm('Are you sure?')===true){
                deleteFireSt(_id)
            }
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
                
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                Add New
            </button>

            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Fire Station</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={submitUpdateFireSt} >
                            <div className="modal-body">

                                <input type='hidden' name="_id" defaultValue={_id} id="_id"/>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="fname" className="form-label">Name</label>
                                    <input type="name" onChange={handleChange} required className="form-control" name="fname" value={itemC.hname} id="fname" />
                                </div>
                                <div className="mb-3" style={{ textAlign: 'left' }}>
                                    <label htmlFor="faddress" className="form-label">Address</label>
                                    <input defaultValue={itemC.haddress} type="text" onChange={handleChange} required className="form-control" id="faddress" name="faddress" />
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="fcity" onChange={handleChange} required className="form-control" defaultValue={itemC.fcity} placeholder="City"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="fstate"  onChange={handleChange} required className="form-control" defaultValue={itemC.fstate} placeholder="State"/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="flat" onChange={handleChange} required className="form-control" defaultValue={itemC.flat} placeholder="Latitude"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="flong"  onChange={handleChange} required className="form-control" defaultValue={itemC.flong} placeholder="Longitude"/>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <input type="text" id="fpincode" onChange={handleChange} required className="form-control" defaultValue={itemC.fpincode}placeholder="Pincode"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" id="fphone"  onChange={handleChange} required className="form-control" defaultValue={itemC.fphone} placeholder="Phone"/>
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

export default FireStationTable
