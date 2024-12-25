import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5 p-5'>
            <div className='row'>
                <div  className='col-12'>
                    <img style={{width : "100%" }} src='/media/images/homeHero.png'></img>
                </div>
                <div className='col-12 text-center mt-5'>
                    <h1 style={{fontSize:"3rem"}}>Invest in everything</h1>
                    <p className='fs-5 mt-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary mt-3 p-02 fs-5 mb-5' style={{width :"20%"}}>Sign up for free</button>
                </div>
            </div>

        </div>
     );
}

export default Hero;