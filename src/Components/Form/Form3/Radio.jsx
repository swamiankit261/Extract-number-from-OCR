import React, { useState } from 'react'

function Radio() {
    const [gender, setGender] = useState(null);

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    const validate = () => {
        if (!gender) {
            alert('Please select a gender!');
        }
    };
    return (
        <>
            <div>
                <div className='w-50 p-4 text-center mt-5 mx-auto shadow rounded-pill'>
                    <label className='mr-2' htmlFor="gender">Male</label>
                    <input className='mr-5' type="radio" name="gender" value="male" onChange={handleChange} />

                    <label htmlFor="gender">Female </label>
                    <input type="radio" name="gender" value="female" onChange={handleChange} />
                    <div>
                        <button className='btn btn-success mt-4' onClick={validate}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Radio