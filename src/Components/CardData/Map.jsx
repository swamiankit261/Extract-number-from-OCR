import React from 'react'
import Mapcardprops from './Mapcardprops'
import array from './Onejson'

function Map() {

    return (
        <>
            <div className='d-flex justify-content-around'>

                {array.map((e) => {
                    return (
                        <>
                            {/* <div>{a[4]}</div> */}
                            {/* <div className='m-5'>{i}.{e}={a}</div> */}
                            <div>

                                <Mapcardprops data={e} />
                            </div>

                        </>
                    )

                })}
            </div>
        </>
    )
}

export default Map