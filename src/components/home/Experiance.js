import React from 'react'

const Experiance = () => {
    return (
        <div className='experianceSection' id='experiance'>
            <div className="experianceContainer">

                <h2 className="sectionHeading">Experiance</h2>
                <div className='tableDiv'>
                    <table className='myCustomTable'>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Krishwork's Technology Research and Labs Institute</td>
                                <td>August 2023 - Current</td>
                            </tr>
                            <tr>
                                <td>Harshaweb Pvt. Ltd.</td>
                                <td>October 2022 - March 2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Experiance