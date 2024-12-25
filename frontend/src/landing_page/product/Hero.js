import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center text-muted p-5' style={{lineHeight : "3rem", height : "20rem"}}>
            <h1 className='mb-3 mt-5' style={{fontWeight:"600" , color:"#4B4B44", fontSize:"2.8rem"}}>Zerodha Products</h1>
            <h5>Sleek, modern, and intuitive trading platforms</h5>
            <p>Check out our<a href='#' style={{textDecoration : "none"}}> investment offerings →</a></p>
        </div>
     );
}

export default Hero;