import React from 'react';

function HeroSupport() {
    return ( 
        <div className='container-fluid' id='Supporthero'>
            <div id='Supportwrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track tickets</a>
            </div>
            <div id='Supportwrapper'>
                <div id='Swblock'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <div id='Swblock1'>
                        <input style={{width:"100%",height:"55px",padding:"10px"}} placeholder='Eg : How do i activate my FHO, Why is my order getting rejected.....'></input>
                        <div className='Supporttags'>
                        <div>
                            <a href=''>Track account opening</a>
                            <a href=''>Track segment activation</a>
                            <a href=''>Intraday margins</a>
                        </div>
                        <div>
                            <a href=''>Kite user manual</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='Swblock1' style={{marginLeft : "10px", }}>
                    <h4>Featured</h4>
                    <ol style={{lineHeight :"50px"}}>
                        <li><a style={{fontSize : "1rem"}} href=''>Latest Intraday leverages and Square-off timings</a></li>
                        <li><a style={{fontSize : "1rem"}} href=''>Rights Entitlements listing in December 2024</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default HeroSupport;