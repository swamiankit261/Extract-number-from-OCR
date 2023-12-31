import React, { useState } from 'react'
import Alerts from './Alerts'

function TextUtils() {

    const [text, setText] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const [message, setMessage] = useState('')

    const [color, setColor] = useState('')

    const handlechange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }

    const uppercase = () => {
        setText(text.toUpperCase())
        setShowAlert(true)
        setMessage("*Uppercase converted successfully!")
        setColor('success')
    }
    const lowercase = () => {
        setText(text.toLowerCase())
        setShowAlert(true)
        setMessage("*Lowercase converted successfully!")
    }

    const clear = () => {
        setText('')
        setShowAlert(true)
        setMessage("*Clear successfully!")
    }
    const copy = () => {
        navigator.clipboard.writeText(text)
        setShowAlert(true)
        setMessage("*Copy successfully!")
    }

    const cut = () => {
        navigator.clipboard.writeText(text)
        setText('')
        setShowAlert(true)
        setMessage("*Cut successfully!")
    }

    const paste = () => {
        navigator.clipboard.readText().then(rem => setText(text + rem))
        setShowAlert(true)
        setMessage("*Paste successfully!")
    }
    const duplicate = () => {
        setText(text + '' + text)
        setShowAlert(true)
        setMessage("*Duplicate successfully!")
    }

    setTimeout(() => {
        setShowAlert(false)
    }, 5000)

    return (
        <>
            <div className=' container w-50 shadow  p-4   my-5'>

                <div className='text-center'>
                    {showAlert && <Alerts message={message} color={color} />}
                </div>
                <div className='d-flex-column justify-content space between '>

                    <div className='shadow'>
                        <input className='input my-1' type="text" value={text} placeholder='Enter your name' onChange={handlechange} />
                    </div>
                    <div className=' text'>
                        <h5>{text}</h5>
                    </div>
                    {text.length &&
                        <div className='d-flex text-info container w-50 justify-content-between'>
                            Charactor langth:<h5 className='text-warning'>{text.length} </h5>   ;
                            word langth: <h5 className='text-success'>{text.split(' ').length - 1} </h5>   ;
                            {/* ankit.split(' ').filter(e => e != '').length */}
                        </div>}
                    {text.length > 0 &&
                        <div className='my-5 d-flex justify-content-between'>
                            <button className='mx-1 btn btn-success' onClick={uppercase}>Uppercase</button>
                            <button className='btn btn-info' onClick={lowercase}>lowercase</button>
                            <button className='btn btn-primary' onClick={clear}>clear</button>
                            <button className='btn btn-warning' onClick={copy}>copy</button>
                            <button className='btn btn-secondary' onClick={cut}>Cut</button>
                            <button className='btn btn-info' onClick={paste}>Paste</button>
                            <button className='btn btn-light' onClick={duplicate}>Duplicate</button>

                        </div>}
                </div>
            </div>
        </>
    )
}

export default TextUtils