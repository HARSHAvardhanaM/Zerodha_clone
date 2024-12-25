import React from 'react';

function People() {
    return ( 
        <div className='container mt-5 text-muted'>
            <div className='row text-center mt-5 mb-5 '>
                <h2>People</h2>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4 text-center'>
                    <img style={{borderRadius : "100%", width:"80%", marginLeft:"20px", marginBottom : "1.4rem"}} src='/media/images/nithinKamath.jpg'></img>
                    <h5>Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-6 mt-4 people' style={{fontSize : "1.1rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p><a href='#'>Connect on Homepage</a> / <a href='#'>TradingQnA</a> /<a href='#'>Twitter</a> </p>
                </div>
                <div className='col-1 mb-5'></div>
            </div>
            <div className='row mb-5'></div>
        </div>
     );
}

export default People;