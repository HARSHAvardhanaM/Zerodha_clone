import React from 'react';

function Hero() {
    return ( 
        <div className='contaier mt-6'>
            <div className='row text-center pricingHero1'>
                <h1 className='mb-3'>Charges</h1>
                <h5 className='text-muted f4-3'>List of all charges and taxes</h5>
            </div>
            <div className='row pricingImg'>
                <div className='pImg col-4 text-center'>
                    <img src='/media/images/pricing-eq.svg'></img>
                    <h2 className='mb-4 fs-3'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
                </div>
                <div className='pImg col-4 text-center'>
                <img src='/media/images/other-trades.svg'></img>
                    <h2 className='mb-4 fs-3'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='pImg col-4 text-center'>
                <img style={{width:"100%"}} src='/media/images/pricing-eq.svg'></img>
                    <h2 className='mb-4 fs-3'>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;