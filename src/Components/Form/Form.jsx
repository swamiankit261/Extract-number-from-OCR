import React, { useCallback, useState } from 'react'
import "./Form.css"

function Form() {
    const [Name, setName] = useState('');

    const [Email, setEmail] = useState('');

    const [Phone, setPhone] = useState('');

    const [Password, setPassword] = useState('');

    const [ConfirmPassword, setConfirmPassword] = useState('');

    const [submit, setSubmit] = useState(false);

    const [sowTable, setSowTable] = useState(false);

    const EmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const mediumRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleclick = () => {
        setSubmit(true)
        if (Name.length > 3 && EmailValidation.test(Email) && Phone.length == 10 && mediumRegex.test(Password) && ConfirmPassword == Password) {
            setSowTable(true)
            console.log("okkk")
        }
    }

    return (
        <>
            <div className='container w-50 h-100vh shadow py-2 my-5'>
                <div className='text-center'>
                    <h1>Form1</h1>
                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Name:</label>
                    <input className='form-control  form-input' value={Name} id='inpu1' type="text" autoFocus title='Enter the Name!' placeholder='Enter the name' onChange={handleName} />
                    {submit && Name.length <= 3 && <p className='error'>Name is to short!</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Email:</label>
                    <input className='form-control  form-input' value={Email} id='inpu1' type="Email" placeholder='Enter the Email' onChange={handleEmail} />
                    {submit && Email.length > 0 && !EmailValidation.test(Email) && <p className='error'>Email is required!</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Phone:</label>
                    <input className='form-control  form-input' value={Phone} id='inpu1' type="number" placeholder='Enter the Phone No.' onChange={handlePhone} />
                    {submit && Phone.length < 10 && <p className='error'>Phone no. is to short!</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Password:</label>
                    <input className='form-control  form-input' value={Password} type="text" placeholder='Enter the Password' onChange={handlePassword} />
                    {submit && !mediumRegex.test(Password) && <p className='error'>Password is required!</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Confirm Password:</label>
                    <input className='form-control  form-input' value={ConfirmPassword} id='inpu1' type="password" placeholder='Confirm password' onChange={handleConfirm} />
                    {submit && ConfirmPassword !== Password && <p className='error'>Password does note match!</p>}
                </div>
                <div className='text-center px-5 my-1'>
                    <button className='btn btn-success w-100' onClick={handleclick}>Submit</button>
                </div>

            </div >

            {sowTable &&
                <div div className='container'>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">NO.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No.</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{Name}</td>
                                <td>{Email}</td>
                                <td>{Phone}</td>
                                <td>{Password}</td>
                                {/* <td>{ConfirmPassword}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div >
            }
        </>
    )
}

export default Form