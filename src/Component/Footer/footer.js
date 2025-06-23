import React from 'react'
import 'C:/Users/surid/Desktop/Local Sports/frontend/src/assests/Logo1.png'

function footer() {
  return (
    <div className='bg-color'>
        <div className='container'>
            <div className='p-3 m-3'>
                <img src='Logo1.png' alt='logo' width="50"/>
                 <span className='text-center fs-1 fw-bold px-3'>Local Sports</span>
            </div>
            <hr />
            <div className='d-flex  justify-content-between m-3'>
                <div className='fs-3 fw-bold'>
                    <div className='p-3'>About</div>
                    <div className='p-3'>Grievance</div>
                    <div className='p-3'>Refund Policy</div>
                </div>
                <div className='fs-3 fw-bold'>
                    <div className='p-3'>Privacy Policy</div>
                     <div className='p-3'>Terms and Conditions</div>
                    <div className='p-3'>Contact Us</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer