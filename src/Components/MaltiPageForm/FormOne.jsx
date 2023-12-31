import React from 'react'
import { cityData } from './Datajson'

function FormOne({ setFormTab, data, setData, error, setError, setTableData }) {


    const ram = (e) => {
        data[e.target.name] = e.target.value
        setData({ ...data })

    }


    const verify = () => {
        let valid = true
        let localError = {}

        if (!data.name) {
            valid = false
            localError.name = 'Name is requred!'
        }

        if (!data.email) {
            valid = false
            localError.email = 'Email is requred! '
        }

        if (!data.gender) {
            valid = false;
            localError.gender = 'Please select the gender!'
        }

        if (!data.option) {
            valid = false;
            localError.option = 'option!'
        }

        setError(localError)
        return valid
    }
    const handliNext = () => {
        if (verify()) {

            // if (data.index) {
            //     console.log('index 1')
            // }
            setFormTab(2);

        }
    }
    return (
        <>
            <div className='w-50 text-center mt-4 m-auto shadow py-5 rounded'>
                <div className='m-2 inpu-div'>
                    <label htmlFor="name">Name</label> <br />
                    <input className='w-50 m-auto form-control form-input' name='name' type="text" value={data.name} onChange={ram} />
                    {error.name && <p className='mt-error'>{error.name}</p>}
                </div>
                <div className='my-4 inpu-div'>
                    <label htmlFor="">Email</label> <br />
                    <input className=' w-50 m-auto form-control form-input form-input2' name='email' type="email" value={data.email} onChange={ram} />
                    {error.email && <p className='mt-error'>{error.email}</p>}
                </div>
                <div className='w-50 d-flex justify-content-center mt-4 m-auto inpu-div'>
                    <label htmlFor="">Male</label>
                    <input className='mx-2' type="radio" name='gender' value={'male'} onChange={ram} />
                    <label htmlFor="">Female</label>
                    <input className='mx-2' type="radio" name='gender' value={'female'} onChange={ram} />
                    <br />
                    {error.gender && <p className='mtg-error'>{error.gender}</p>}
                </div>
                <div className='mt-4 inpu-div'>
                    <select className='form-control form-input w-25 m-auto' value={data.option} name="option" onChange={ram}>
                        <option value="" selected disabled>Select a city</option>
                        {cityData.map((e, i) => (
                            <option key={i} value={e} >{e}</option>
                        ))}
                    </select>
                    {error.option && <p className='mto-error'>{error.option}</p>}
                </div>
                <div>
                    <button className='btn btn-outline mt-4' onClick={handliNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default FormOne