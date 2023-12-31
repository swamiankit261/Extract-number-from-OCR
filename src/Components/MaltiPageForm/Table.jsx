import React from 'react'

function Table({ tableData, handleDelete, handleUpdate }) {
    return (
        <>
            <div>
                <table className='table table-hover table-bordered table-striped '>
                    <thead className='thead-dark'>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Password</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((e, i) => {
                            return (
                                <>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.option}</td>
                                        <td>{e.password}</td>
                                        <td><button className='btn' onClick={() => handleUpdate(e, i)}>Update</button></td>
                                        <td><button className='btn' onClick={() => handleDelete(i)}>Delete</button></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table