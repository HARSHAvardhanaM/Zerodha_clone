import React from 'react';

function RightSection({imageUrl , productName , productDescription , anchorData ,anchorlink}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'  style={{marginTop : "13rem", marginBottom:"2rem"}}>
                <div className='col-4 p-2'  >
                    <h1 className=' fs-3'>{productName}</h1>
                    <p style={{lineHeight : "1.9rem" ,fontSize : "1.1rem"}}>{productDescription}</p>
                    <div className='row'>
                        <a href={anchorlink} style={{ textDecoration : "none"}}>{anchorData} →</a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-7'>
                    <img style={{width : "100%", marginTop : "-150px"}} src={imageUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;