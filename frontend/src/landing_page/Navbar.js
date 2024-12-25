import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
       
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 border-bottom" style={ {backgroundColor : "#FFF",  }}>
            <div class="container-fluid">
                <div className='col-6 '>
                <Link href='#'style={{marginLeft : "2rem"}} to={"/"} ><img style={{width : "20%", height:"40%"}} className='' src='/media/images/logo.svg' /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/about"}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/products"}>Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/pricing"}>Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/support"}>Support</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" ><i class="fa-solid fa-bars"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
     );
}

export default Navbar;