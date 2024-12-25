import React from 'react';

function LeftSection({imageUrl , productName , productDescription , tryDemo , learnMore , googlePlay ,appStore}) {
    return ( 
        <div className='container' style={{marginBottom : "10rem"}}>
            <div className='row'>
                <div className='col-7 p-3 text-center'>
                    <img src={imageUrl}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-4 mt-5' >
                    <h1 className='mb-3 fs-3' style={{marginTop : "3rem"}}>{productName}</h1>
                    <p style={{lineHeight : "1.9rem" ,fontSize : "1.1rem"}}>{productDescription}</p>
                    <div className='row mb-3' style={{display : "block"}}>
                        <a href={tryDemo} style={{ textDecoration : "none"}}>Try Demo →</a>
                        <a href={learnMore} style={{ textDecoration : "none"}}>Learn more →</a> <br />
                    </div>
                    <div className='row'  style={{display : "block"}}>
                        <a href={googlePlay}><img style={{width : "40%", textDecoration : "none"}} src='/media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img style={{width : "40%", textDecoration : "none"}} src='/media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;