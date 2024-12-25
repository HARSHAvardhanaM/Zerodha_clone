import React from 'react';

function Education() {
    return ( 
        <div className='container mb-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img style={{width : "80%", textAlign: "center"}} src='/media/images/education.svg'></img>
                </div>
                <div className='col-6'>
                    
                    <div className='container'>
                    <h2 className='mb-5'>Free and open market education</h2>
                        <div className='row  mb-3'>
                            <p className='fs-6 mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a href='#' className='fs-6' style={{textDecoration : "none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className='row mt-4'>
                            <p className='fs-6 mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <a href='#' className='fs-6' style={{textDecoration : "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;