import React from 'react'

function Footer() {
  return (
    <div className='max-w-6xl mx-auto p-2'>
        <div className='flex justify-around border-t pt-10 text-xs text-gray-500'>
            <div> 
                <h1 className='font-bold text-gray-600'>Buy</h1>
                <p>Registration</p>
                <p> eBay Money Back Guarantee</p>
                <p>Bidding & buying help</p>
                <p>Stores</p>
            </div>
            <div>
                <h1 className='font-bold text-gray-600'>Sell</h1>
                <p>Start selling </p>
                <p>Learn to sell</p>
                <p>Affiliates</p>
                <h1 className='font-bold text-gray-600'> Tools & apps</h1>
                <p>Developers</p>
                <p>Security center</p>
                <p>Site map</p>
            </div>
            <div>
                <h1 className='font-bold text-gray-600'>Stay connected</h1>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
            <div>
                <h1 className='font-bold text-gray-600'>About eBay</h1>
                <p>Company Info</p>
                <p>News</p>
                <p>Investors</p>
                <p>Careers</p>
                <p>Government relations</p>
                <p>Advertise with us</p>
                <p>Policies</p>
                <p>Verified Rights Owner (VeRO) Program</p>
            </div>
            <div>
                <h1 className='font-bold text-gray-600'>Help & Contact</h1>
                <p>Seller Information Center</p>
                <p>Contact us</p>
                <h1 className='font-bold text-gray-600'>Community</h1>
                <p>Announcements</p>
                <p>Discussion boards</p>
                <p>eBay Giving Works</p>
            </div>            
        </div>
        
        <p className='text-xs pt-5'> Copyright © 1995-2022 eBay inc. All Rights reserved. 
            <span ><a className='underline' href=""> Accessibility</a></span> ,
            <span><a className='underline' href=""> User Agreement</a></span> ,
            <span><a className='underline' href=""> Privacy</a></span> ,
            <span><a className='underline' href=""> Payments Terms of Use</a></span> ,
            <span><a className='underline' href="">Cookies</a></span> ,
            <span><a className='underline' href=""> Do not sell my personal information</a></span> and ,  
            <span><a className='underline' href=""> AdChoice</a></span></p>
    </div>
  )
}

export default Footer