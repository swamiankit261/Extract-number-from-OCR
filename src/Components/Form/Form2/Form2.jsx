import React, { useState } from 'react'

function Form2() {

    const [Name, setName] = useState('');

    const [Email, setEmail] = useState('');

    const [Phone, setPhone] = useState('');

    const [Password, setPassword] = useState('');

    const [ConfirmPassword, setConfirmPassword] = useState('');

    const [Error, setError] = useState({});

    const handleclick = () => {
        if (verify()) {
            console.log("Ok baba")
        }
    }

    let Emailvaidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const verify = () => {
        let localError = {};
        let valid = true;

        if (!Name) {
            localError.Name = "*Enter the Name!"
            valid = false;
        } else if (Name.length <= 3) {
            localError.Name = "*Name is to short!"
            valid = false;
        }

        if (!Email) {
            localError.Email = "*Enter the Email!"
        } else if (!Emailvaidation.test(Email)) {
            localError.Email = "*Email note match!"
            valid = false
        }
        setError(localError)
        return valid
    }



    return (
        <>
            <div className='container w-50 h-100vh shadow py-2 my-5'>
                <div className='text-center'>
                    <h1>Form2</h1>
                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Name:</label>
                    <input className='form-control  form-input form-input2' id='inpu1' type="text" autoFocus title='Enter the Name!' placeholder='Enter the Name' value={Name} onChange={(e) => { setName(e.target.value) }} />
                    {Error.Name && <p className='error'>{Error.Name}</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Email:</label>
                    <input className='form-control  form-input form-input2' id='inpu1' type="Email" placeholder='Enter the Email' value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                    {Error.Email && <p className='error'>{Error.Email}</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Phone:</label>
                    <input className='form-control  form-input form-input2' id='inpu1' type="number" placeholder='Enter the Phone No.' value={Phone} onChange={(e) => { setPhone(e.target.value) }} />
                    {Error.Email && <p className='error'>{Error.Email}</p>}


                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Password:</label>
                    <input className='form-control  form-input form-input2' type="text" placeholder='Enter the Password' value={Password} onChange={(e) => { setPassword(e.target.value) }} />
                    {Error.Email && <p className='error'>{Error.Email}</p>}

                </div>
                <div className='p-3 inpu-div'>
                    <label htmlFor='inpu1' className=''>Confirm Password:</label>
                    <input className='form-control  form-input form-input2' id='inpu1' type="password" placeholder='Confirm password' value={ConfirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    {Error.Email && <p className='error'>{Error.Email}</p>}

                </div>
                <div className='text-center px-5 my-1'>
                    <button className='btn btn-success w-100' onClick={handleclick}>Submit</button>
                </div>

            </div >
        </>
    )
}

export default Form2