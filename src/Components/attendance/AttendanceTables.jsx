// import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'

function AttendanceTables({ tabledata }) {
    // console.log(tabledata)
    // console.log(tabledata[1].Date)
    // console.log(tabledata[1].Day)
    return (
        <>
            <div className='mt-5'>
                <table className='table table-striped table-borderless table-dark table-hover'>
                    <thead className='thead-dark'>
                        <tr className='bg-primary'>
                            <th>user</th>
                            <th>date</th>
                            <th>day</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((e, i) => {

                            return (
                                <>
                                    {/* {console.log(e)} */}
                                    <tr>
                                        <td className='bg-info'>{e.user}</td>
                                        <td className='bg-warning'>{e.Date}</td>
                                        <td className={`bg - warning `}>{e.Day}</td>
                                        {/* {e.day == "present" && <td className='bg-success'>{e.Day}</td>}
                                        {e.day == "halfDay" && <td className='bg-success'>{e.Day}</td>}
                                        {e.day == "fullDay" && <td className='bg-success'>{e.Day}</td>} */}
                                    </tr>
                                </>
                            )
                        })}
                    </tbody >
                </table >
            </div >
            {/* <h1>{tabledata[1].day}</h1> */}
        </>
    )
}

export default AttendanceTables