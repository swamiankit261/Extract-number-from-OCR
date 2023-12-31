import React, { useState } from 'react'
import FormOne from './FormOne';
import FormTow from './FormTow';

function MaltiPage() {

    const [formTab, setFormTab] = useState(1);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [tableData, setTableData] = useState([]);

    const handleclick = (formNo) => {
        setFormTab(formNo)
    }

    const handleDelete = (i) => {
        // console.log(i)
        let all = [...tableData]
        all.splice(i, 1)
        setTableData(all)
    }

    const handleUpdate = (e, i) => {
        setData({ name: e.name, email: e.email, gender: e.gender, option: e.option, password: e.password, confirmPassword: e.password })
        setFormTab(1)
    }


    return (
        <>
            <div className='w-25 btn-warning shadow my-4 text-center  mx-auto p-2 rounded-pill'>
                <button className='btn btn-outline' onClick={() => handleclick(1)}>Tab1</button>
                <button className='btn btn-outline mx-2' onClick={() => handleclick(2)}>Tab2</button>
                <button className='btn btn-outline' onClick={() => handleclick(3)}>Table3</button>
            </div>

            <hr />
            {/* <h1>{error.email}</h1> */}
            {formTab === 1 && <FormOne setFormTab={setFormTab} data={data} setData={setData} error={error} setError={setError} setTableData={setTableData} />}
            {<FormTow formTab={formTab} setFormTab={setFormTab} data={data} setData={setData} error={error} setError={setError} tableData={tableData} setTableData={setTableData} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
            {/* <Table tableData={tableData} /> */}
        </>
    )
}

export default MaltiPage