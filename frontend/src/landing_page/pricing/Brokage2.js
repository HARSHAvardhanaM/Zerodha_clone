import React from 'react';

function Brokage2() {
    return ( 
        <div className='contTab'>
            <h3 className=' mb-5' style={{marginLeft : "4.2rem"}}>Charges for optional value added services</h3>
            <table className='content-table2'>
                <thead>
                    <tr>
                        <th>Services</th>
                        <th>Billing Frquency</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tickertape</td>
                        <td>Monthly / Annual</td>
                        <td>Free: 0 | Pro: 249/2399</td>
                    </tr>
                    <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td>Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect: 2000 | Historical: 2000</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Brokage2;