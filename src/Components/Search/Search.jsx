import React, { useState } from 'react'
import { vegetarianFastFoodArray } from './FoodarrayJson'

function Search() {

    const [food, setfood] = useState([]);

    const handlesearch = (e) => {
        let ab = e.target.value

        if (ab) {
            let abc = vegetarianFastFoodArray.filter((f) => f.includes(ab))
            setfood(abc)
        } else {
            setfood([])
        }
    }

    return (
        <>
            <div className='d-flex my-5'>
                <div className='search mx-4 w-50'>
                    <input className='form-control form-input' type="text" placeholder='Search' onChange={handlesearch} />
                    {food && <div className=' vh-100 overflow-auto mt-1'>
                        <ol>
                            {food.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <li>{e}</li>
                                    </div>
                                )
                            })

                            }
                        </ol>
                    </div>}
                </div>
                {food && <div className=' w-50 vh-100 overflow-auto my-5'>
                    <ol>
                        {vegetarianFastFoodArray.map((e, i) => {
                            return (
                                <div key={i}>
                                    <li>{e}</li>
                                </div>
                            )
                        })

                        }
                    </ol>
                </div>}
            </div>
        </>
    )
}

export default Search