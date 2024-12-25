import React from 'react';


function Brokage() {
    return ( 
        <div className='container contTab'>
            <h3 className=' mb-5'>Charges for account opening</h3>
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Online account</td><td >Free</td ></tr>
                    <tr><td>Offline account</td><td >Free</td></tr>
                    <tr><td>NRI account (offline only)</td><td >₹ 500</td></tr>
                    <tr><td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td><td >₹ 500</td></tr>
                </tbody>
            </table>
        </div>
     );
}

export default Brokage;