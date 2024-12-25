import React from 'react';

function CreateTicket() {
    return ( 
        <div className='Ticketcontainer'>
            <h4 className='mt-5 text-muted'>To create a ticket, select a relevant topic</h4>
            <div className='Ticketrow1'>
                <div className='ticket'>
                    <h5><i class="fa-solid fa-circle-plus"></i> &nbsp;&nbsp; Account Opening</h5>
                    <span><a href='#'>Getting started</a></span>
                    <span><a href='#'>Online</a></span>
                    <span><a href='#'>Offline</a></span>
                    <span><a href='#'>Charges</a></span>
                    <span><a href='#'>Company, Partnership and HUF</a></span>
                    <span><a href='#'>Non Resident Indian (NRI)</a></span>
                </div>
                <div className='ticket'>
                    <h5><i class="fa-regular fa-user"></i> &nbsp;&nbsp;  Your Zerodha Account</h5>
                    <span><a href='#'>Login credentials</a></span>
                    <span><a href='#'>Your Profile</a></span>
                    <span><a href='#'>Account modification and segment addition</a></span>
                    <span><a href='#'>CMR & DP ID</a></span>
                    <span><a href='#'>Nomination</a></span>
                    <span><a href='#'>Transfer and conversion of shares</a></span>
                </div>
                <div className='ticket'>
                    <h5><i class="fa-solid fa-chart-simple"></i> &nbsp;&nbsp; Trading and Markets</h5>
                    <span><a href='#'>Trading FAQs</a></span>
                    <span><a href='#'>Kite</a></span>
                    <span><a href='#'>Margins</a></span>
                    <span><a href='#'>Product and order types</a></span>
                    <span><a href='#'>Corporate actions</a></span>
                    <span><a href='#'>Kite features</a></span>
                </div>
            </div>

            <div className='Ticketrow1'>
                <div className='ticket'>
                    <h5><i class="fa-regular fa-credit-card"></i> &nbsp;&nbsp;  Funds</h5>
                    <span><a href='#'>Fund withdrawal</a></span>
                    <span><a href='#'>Adding funds</a></span>
                    <span><a href='#'>Adding bank accounts</a></span>
                    <span><a href='#'>eMandates</a></span>
                </div>
                <div className='ticket'>
                    <h5><i class="fa-solid fa-bowling-ball"></i> &nbsp;&nbsp;  Console</h5>
                    <span><a href='#'>IPO</a></span>
                    <span><a href='#'>Portfolio</a></span>
                    <span><a href='#'>Funds statement</a></span>
                    <span><a href='#'>Profile</a></span>
                    <span><a href='#'>Reports</a></span>
                    <span><a href='#'>Referral program</a></span>
                </div>
                <div className='ticket'>
                    <h5><i class="fa-solid fa-indian-rupee-sign"></i> &nbsp;&nbsp; Coin</h5>
                    <span><a href='#'>Understanding mutual funds and Coin</a></span>
                    <span><a href='#'>Coin app</a></span>
                    <span><a href='#'>Coin web</a></span>
                    <span><a href='#'>Transactions and reports</a></span>
                    <span><a href='#'>National Pension Scheme (NPS)</a></span>
                </div>
            </div>

        </div>
     );
}

export default CreateTicket;