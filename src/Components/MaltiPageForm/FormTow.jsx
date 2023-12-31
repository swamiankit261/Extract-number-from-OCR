import React from 'react'
import Table from './Table'

function FormTow({ formTab, setFormTab, data, setData, error, setError, tableData, setTableData, handleDelete, handleUpdate }) {

    const ram = (e) => {
        console.log(e.target.value)
        data[e.target.name] = e.target.value
        setData({ ...data })
    }

    const handliNext = () => {
        if (verify()) {

            // if (data.index) {

            //     setFormTab(3)
            //     let alldata = []
            //     alldata[data.index] = data
            //     setTableData(alldata)
            // } else {

            setFormTab(3)
            let alldata = []
            alldata = tableData.concat(data)
            setTableData(alldata)
            // }

        }
    }

    const verify = () => {
        let valid = true;
        let localError = {}

        if (!data.password) {
            valid = false;
            localError.password = 'password !'
        }

        if (!data.confirmPassword) {
            valid = false;
            localError.confirmPassword = 'confirmPassword!'

        } else if (data.confirmPassword !== data.password) {
            valid = false;
            localError.confirmPassword = 'fill!'
        }

        setError(localError)
        return valid
    }

    return (
        <>
            {formTab === 2 && <div className='w-50 text-center mx-auto shadow py-4 rounded'>
                <div className='inpu-div pb-4'>
                    <label htmlFor="password">Password:</label> <br />
                    <input className='form-control w-50 mx-auto' id='password' type="password" name="password" value={data.password} onChange={ram} />
                    {error.password && <p className='mt-error'>{error.password}</p>}
                </div>
                <div className='inpu-div pb-4'>
                    <label htmlFor="confirmPassword">ConfirmPassword</label> <br />
                    <input className='form-control w-50 mx-auto' id='confirmPassword' type="password" name='confirmPassword' value={data.confirmPassword} onChange={ram} />
                    {error.confirmPassword && <p className='mt-error'>{error.confirmPassword}</p>}
                </div>
                <div>
                    <button className='btn btn-outline mt-3' onClick={handliNext}>Next</button>
                </div>
            </div>}
            {formTab === 3 && <Table tableData={tableData} setTableData={setTableData} handleDelete={handleDelete} handleUpdate={handleUpdate} />}
        </>
    )
}

export default FormTow