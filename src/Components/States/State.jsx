import React, { useState } from 'react'

function State() {

    const [text, settext] = useState('this')

    const handleclick = () => {
        settext('that')
        // console.log(text)
    }
    return (
        <>
            <h1>{text}</h1>
            {/* {console.log(text)} */}
            <div>
                <button onClick={handleclick}>Submite</button>
            </div>
        </>
    )
}

export default State