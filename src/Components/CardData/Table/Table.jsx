import React from 'react'

function Table(props) {
    return (
        <>
            <tr>
                <th scope="row">{props.data.no}</th>
                <td>{props.data.name}</td>
                <td>{props.data.age}</td>
                <td>{props.data.phone}</td>
                <td>{props.data.email}</td>
            </tr>
        </>
    )
}

export default Table