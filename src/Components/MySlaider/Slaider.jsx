import React, { useState } from 'react'
import img1 from '../Images/deer-643340_1920.jpg'
import img2 from '../Images/lion-17335_1280.jpg'
import img3 from '../Images/wolves-1341881_1920.jpg'
function Slaider() {

    const [image1, setImage1] = useState([]);
    const [index, setIndex] = useState(0)

    // console.log(first)

    const image = [
        img1, img2, img3
    ]

    const handleclick = () => {
        if (index < image.length - 1) {

            setIndex(index + 1)
        } else if (index == image.length - 1) {
            setIndex(0)
        }
        setImage1(image[index])
    }

    return (
        <>
            <div className='text-center my-4 '>
                <div className=''><img className='w-50 h-50vh' src={image1} alt="" /></div>
                <button onClick={handleclick} className='btn btn-success w-25 my-4'>click</button>
            </div >


            {/* {image.map(() => {

            })} */}

        </>
    )
}

export default Slaider