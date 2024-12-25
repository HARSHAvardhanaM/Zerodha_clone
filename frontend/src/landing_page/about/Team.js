import React from 'react';

function Team() {
    return ( 
        <div className='container mt-5 mb-5'>
        <div className='row mt-5'>
            <div className='col-1'></div>
            <div className='col-5 ' style={{lineHeight : "1.8rem", fontSize : "1.1rem"}}>
            <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

            <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

            <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className='col-5 ' style={{lineHeight : "1.8rem", fontSize : "1.1rem"}}>

            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p><a href='#'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='#'>blog</a> or see what the media is <a href='#'>saying about us.</a></p>
            </div>
            <div className='col-1'></div>
        </div>
    </div>
     );
}

export default Team;