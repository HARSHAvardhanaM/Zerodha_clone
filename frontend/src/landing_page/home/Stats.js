import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-2'>
                <div className='col-5 p-2'>
                    <h2 style={{fontSize : "2rem"}}>Trust with confidence</h2>
                    <div className='mt-5'>
                        <h4 className='fs-5'>Customer-first always</h4>
                        <p className='fs-6 text-muted' >
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <h4 className='fs-5'>No spam or gimmicks</h4>
                        <p className='fs-6 text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                        </p>
                    </div>
                    <div className='mt-5'>
                    <h4 className='fs-5'>The Zerodha universe</h4>
                        <p className='fs-6 text-muted' style={{fontSize : "1.1rem"}}>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>
                    <div className='mt-5'>
                    <h4 className='fs-5'>Do better with money</h4>
                        <p className='fs-6 text-muted' style={{fontSize : "1.5rem" }} >
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>
                <div className='col-7 p-2'>
                    <img style={{width : "100%" }} src='/media/images/ecosystem1.png'></img>
                    <div className='col mt-3' style={{display : 'flex', justifyContent : "space-evenly"}}>
                            <a style={{textDecoration : "none"}} href='#'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            <a style={{textDecoration : "none"}} href='#'>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className='row mb-5 mt-3' style={{display : 'flex', justifyContent:"space-evenly"}}>
                <img className='mb-3 mt-3 ' style={{width : "70%"}} src="/media/images/pressLogos.png"></img>
            </div>
        </div>
     );
}

export default Stats;