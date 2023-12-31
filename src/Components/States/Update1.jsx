import React, { useState } from 'react'
import TextUtils from '../TextUtils/TextUtils';

function Update1() {
    const [num, setnum] = useState(0)
    const [num1, setnum1] = useState(0)

    const click = () => {
        setnum(num + 1);
        setnum1(num1 - 1)

    }
    const click1 = () => {
        if (num > 10, num1 < -10) {
            // num = 11
            setnum1(0)
            setnum(0)

        }
        else {
            setnum1('Go')
        }


    }

    return (
        <>
            <div className=' inputAnd d-flex bg-warning container p-5 mx-4 rounded'>
                <div className='w-50'>

                    {/* <TextUtils /> */}
                </div>
                <div className='shadow mx-5 py-3'>

                    <h1 className='m-2 text-light'>{num1}</h1>
                    <h1 className='m-2 text-light'>{num}</h1>

                    <button className='btn btn-success p-1 mx-2' onClick={click}>Submit</button>
                </div>
                <div className=' shadow mx-4 py-3 '>

                    <h1 className='m-2 text-light'>{num}</h1>
                    <h1 className='m-2 text-light'>{num1}</h1>

                    <button className='btn btn-success p-1 mx-2 ' onClick={click1}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Update1