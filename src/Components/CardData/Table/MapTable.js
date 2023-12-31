import React from 'react'
import Table from './Table'
import tableData from './Tablejson'

function MapTable() {
    return (
        <>
            <>
                {/* <Table data={e} /> */}

                <div className='m-5 text-center'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">NO.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Phone NO.</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((e) => {

                                return (
                                    <>
                                        <Table data={e} />
                                    </>

                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </>
        </>
    )
}

export default MapTable