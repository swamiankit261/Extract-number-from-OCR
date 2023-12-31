import React, { useState } from 'react'
import AttendanceTables from './AttendanceTables'

function Attendance1() {


    const [data, setData] = useState({});
    const [user, setUser] = useState();
    const [day, setDay] = useState()
    const [tabledata, setTableData] = useState([]);

    // console.log(tabledata);
    // console.log(data[1][day])

    const ram = (e) => {
        setData('')
        setUser(e)
    }

    const date = (day, e) => {
        const { name, value } = e;
        let a = {}
        a["Date"] = value
        a["Day"] = day
        a['user'] = name
        let d = [name];
        d?.push(a);

        // console.log(d)
        // console.log(name)
        setData(a);
    }

    const submit = () => {
        let allAttendance = [];

        allAttendance = tabledata.concat(data);

        setTableData(allAttendance)
    }

    const byDay = (e) => {
        setDay(e)
    }

    // let u = user
    // console.log(u)
    return (
        <>
            <div className='d-flex justify-content-between mt-5'>
                <div className='w-50 shadow py-2 text-center mt-5'>
                    <div className='d-flex justify-content-center'>
                        <input className='form-input' type="date" name={user} value={data[user]} onChange={(e) => date(day, e.target)} />

                        <div className='ml-4'>
                            <button className='btn' onClick={() => byDay('fullDay')}>fullDay</button>
                            <button className='btn mx-2' onClick={() => byDay('halfDay')}>HalfDay</button>
                            <button className='btn' onClick={() => byDay('present')}>present</button>

                        </div>
                    </div>
                    <button className=' btn btn btn-outline-info mt-4' onClick={submit}>submit</button>
                </div>
                <div className='w-25 w-25 mt-5'>
                    <div className=' text-center shadow  py-2 rounded-pill btn-warning'>
                        <button className='btn ml-1' onClick={() => ram('user1')}>user1</button>
                        <button className='btn mx-3' onClick={() => ram('user2')}>user2</button>
                        <button className='btn' onClick={() => ram('user3')}>user3</button>
                        <input className='w-25 form-input form-input3 rounded' placeholder='person' type="text" onChange={(e) => ram(e.target.value)} />

                    </div>
                </div>
            </div>
            {/* {data[1][day]} */}
            <AttendanceTables tabledata={tabledata} />
        </>
    )
}

export default Attendance1