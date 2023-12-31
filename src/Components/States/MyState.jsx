import React from 'react'

function MyState() {

    var a = 0;

    const handleclick = () => {
        // console.log('ok')
        a++;
        console.log(a)
    }

    const handlechange = () => {
        // console.log("this")
        a++;
        console.log(a)
    }



    const clickline = () => {
        console.log('click me')
    }
    return (
        <>
            <h1>{a}</h1>

            <button className='m-auto' onClick={handleclick}>Submit</button>

            <div className=' m-4'>
                <input type="text" onChange={handlechange} />
            </div>
            <p onClick={clickline}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum natus perspiciatis? Suscipit soluta numquam esse praesentium optio ab, iusto autem, ratione pariatur quod velit, enim saepe hic ipsa quibusdam.</p>

        </>
    )
}

export default MyState