import React, { useState } from 'react'

function Form3() {

    const [Data, setData] = useState({})

    const [Submit, setSubmit] = useState(false)

    const [ShowData, setShowData] = useState([])

    const [Mode, setMode] = useState('submit')

    const [index, setindex] = useState()

    const handlechang = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }

    const handleclick = () => {
        setSubmit(true)

        if (Mode === 'submit') {
            submit()

        } else if (Mode === 'update') {
            update()

        }
        setData({ Name: '', Email: '', Phone: '', Password: '', ConfirmPassword: '' })
    }


    const handleDelet = (i) => {
        let data = [...ShowData]

        data.splice(i, 1)
        setShowData(data)
    }

    const handleEdit = (e, i) => {

        setData({ Name: e.Name, Email: e.Email, Phone: e.Phone, Password: e.Password})

        setindex(i)

        setMode('update')
    }

    const submit = () => {

        let alldata = []
        alldata = ShowData.concat(Data)
        setShowData(alldata)



    }

    const update = () => {
        let abc = [...ShowData]
        abc[index] = Data
        setShowData(abc)
        setMode('submit')

    }



    return (
        <>
            <div className='container w-50 h-100vh shadow py-2 my-5 rounded'>
                <div className='text-center'>
                    <h1>Form3</h1>
                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className='mx-auto'>Name:</label>
                    <input className='form-control  form-input form-input3' id='inpu1' type="text" autoFocus title='Enter the Name!' placeholder='Enter the name' name='Name' value={Data.Name} onChange={handlechang} />

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Email:</label>
                    <input className='form-control  form-input form-input3' id='inpu1' type="Email" placeholder='Enter the Email' name='Email' value={Data.Email} onChange={handlechang} />

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Phone:</label>
                    <input className='form-control  form-input form-input3' id='inpu1' type="number" placeholder='Enter the Phone No.' name='Phone' value={Data.Phone} onChange={handlechang} />

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Password:</label>
                    <input className='form-control  form-input form-input3' type="text" placeholder='Enter the Password' name='Password' value={Data.Password} onChange={handlechang} />

                </div>
                <div className=' p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Confirm Password:</label>
                    <input className='form-control  form-input form-input3' id='inpu1' type="password" placeholder='Confirm password' name='ConfirmPassword' value={Data.ConfirmPassword} onChange={handlechang} />
                </div>
                <div className='p-3 inpu-div text-center'>
                    <label >Male</label>  <input className='mr-5' type="radio" value='male' name='gender' />
                    <label >Female</label> <input type="radio" value='female' name='gender' />
                </div>
                <hr />
                <div className=' text-center px-5 my-1'>
                    <button className='btn btn-success w-100' onClick={handleclick}>{Mode}</button>
                </div>
            </div >
            <div className='container'>
                {Submit && <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">NO.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Pasword</th>
                            <th scope="col"><button onClick={handleDelet} className='btn btn-info'>Delet</button></th>
                            <th><button className='btn btn-primary'>Edit</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ShowData.map((e, i) => {
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{e.Name}</td>
                                        <td>{e.Email}</td>
                                        <td>{e.Phone}</td>
                                        <td>{e.Password}</td>
                                        <td><button onClick={() => handleDelet(i)} className='btn btn-info'>Delete</button></td>
                                        <td><button onClick={() => handleEdit(e, i)} className='btn btn-primary'>Edit</button></td>
                                    </tr>
                                </>
                            )

                        })}
                    </tbody>
                </table>}
            </div>
        </>
    )
}

export default Form3