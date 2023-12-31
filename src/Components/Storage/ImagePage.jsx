import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function ImagePage() {
    const location = useLocation();
    const [image, setImage] = useState([]);
    useEffect(() => {
        setImage(location.state);
    }, [location])
    console.log(image);
    const navigator = useNavigate()
    const handlPreview = () => {
        navigator('/localStorage')
    }
    return (
        <>

            <div className='w-50 d-flex justify-content-between'>
                <div className='d-flex flex-column'>
                    <label htmlFor="#" className='mb-n1 mx-auto'>opacity</label>
                    <input type="range" />

                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="#" className='mb-n1 mx-auto'>brightness</label>
                    <input type="range" />

                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="#" className='mb-n1 mx-auto'>grayscale</label>
                    <input type="range" />

                </div>
                <div>
                    <button className='btn btn-outline-success float-right my-2 mr-2' onClick={handlPreview}><BsFillArrowRightCircleFill /></button>

                </div>
            </div>
            <div className=''>
                <img className='w-50 vh-50' src={image} alt="" />

            </div>
        </>
    )
}

export default ImagePage