import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-3 mt-5 p-5'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p className='mb-3 '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration : "none"}} href='#'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7'>
                    <div className='row mt-5'>
                    <div className='col-4'>
                    <div className='row' >
                        <div style={{height:"90%",width:"50%"}} className='col-6'><img style={{width : "140%"}} src='/media/images/pricing-eq.svg'></img></div>
                        <div style={{height:"40%",width:"50%"}} className='col-6 mt-4'><p style={{fontSize : "0.65rem", textAlign:"left"}}>Free account opening</p></div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row' >
                        <div style={{height:"100%",width:"50%"}} className='col-6'><img style={{width : "140%"}} src='/media/images/pricing-eq.svg'></img></div>
                        <div style={{height:"90%",width:"50%"}} className='col-6 mt-4'><p style={{fontSize : "58%" , width : "130%"}}>Free equity delivery<br />
                        and direct mutual funds</p></div>
                    </div>
                </div>
                <div className='col-4'>
                <div className='row' >
                        <div style={{height:"100%",width:"50%"}} className='col-6'><img style={{width : "130%", height:"130%"}} src='/media/images/other-trades.svg'></img></div>
                        <div style={{height:"30%",width:"40%"}} className='col-6 mt-4'><p style={{fontSize : "0.60rem", }}>Intraday and
                        F&O</p></div>
                    </div> 
                </div>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;