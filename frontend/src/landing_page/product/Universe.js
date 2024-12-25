import React from 'react';

function Universe() {
    return ( 
        <div className='container' style={{height : "650px", }}>
            <div className='row text-center uniSingle'>
                <h1 className='mt-5' style={{fontWeight:"500" , color:"#4B4B44", fontSize:"2.1rem"}}>The Zerodha Universe</h1>
                <h6 style={{color:"rgb(48, 48, 48);"}}>Extend your trading and investment experience even further with our partner platforms</h6>
            </div>
            <div className='row' style={{marginTop:"4rem",display : "flex", flexWrap:"wrap", alignItems:"center" , justifyContent:"space-evenly"}}>
            <div className='uniGrp'>
                    <div className='row text-center uniDiv mb-5'>
                        <div className='uniImg'><img style={{width:"70%"}}  src='/media/images/zerodhaFundHouse.png'></img></div>
                        <p style={{fontSize:"0.8rem" , width:"100%" , height:"80%"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className='row text-center uniDiv'>
                    <div className='uniImg'><img style={{width:"70%"}} src='/media/images/streakLogo.png'></img></div>
                        <p style={{fontSize:"0.8rem" , width:"100%" , height:"80%"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                </div>
                <div className='uniGrp'>
                    <div className='row text-center uniDiv mb-5'>
                    <div className='uniImg'><img style={{width:"80%"}}src='/media/images/sensibullLogo.svg'></img></div>
                        <p style={{fontSize:"0.7rem" , width:"100%" , height:"70%"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='row text-center uniDiv'>
                    <div className='uniImg'><img style={{width:"80%"}} src='/media/images/smallcaseLogo.png'></img></div>
                        <p style={{fontSize:"0.7rem" , width:"100%" , height:"70%"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className='uniGrp'>
                    <div className='row text-center uniDiv mb-5'>
                    <div className='uniImg'><img style={{width:"50%"}} src='/media/images/tijori.svg'></img></div>
                        <p style={{fontSize:"0.7rem" , width:"100%", height:"70%"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more. </p>
                    </div>
                    <div className='row text-center uniDiv'>
                    <div className='uniImg'><img style={{width:"50%"}} src='/media/images/dittoLogo.png'></img></div>
                    <p style={{fontSize:"0.7rem" , width:"100%", height:"70%"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Universe;