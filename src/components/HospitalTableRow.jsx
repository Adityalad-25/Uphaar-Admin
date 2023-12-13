import React from 'react'

function HospitalTableRow(props) {

    const { item,i } = props
    const { hname,
        haddress,
        hcity,
        hstate,
        hpincode,
        hlat,
        hlong,
        hphone } = item
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
            <td></td>
        </tr>

    )
}

export default HospitalTableRow
