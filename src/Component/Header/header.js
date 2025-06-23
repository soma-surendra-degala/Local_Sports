import React from 'react'
import 'C:/Users/surid/Desktop/Local Sports/frontend/src/assests/Logo1.png';
import "../Header/header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='bg-color '>
        <div className='container'>
            <div className='row m-3 p-3'>
                <div  className='col-md-4'>
                    <div>
                        <Link to="/" className='text-decoration-none text-reset'>
                        <img src='Logo1.png' alt='logo' width="50"/></Link>
                        <span className='text-center fs-1 fw-bold px-2'><Link to="/" className='text-decoration-none text-reset'>Local Sports</Link></span>
                    </div>
                </div>
            
                <div className='col-md-1 fs-2 fw-bold text-center'>
                  <div><Link to="/Home" className='text-decoration-none text-reset'>Home</Link></div>
                </div>
                <div className='col-md-2 fs-2 fw-bold text-center'>
                    <div><Link to="/Tournaments"  className='text-decoration-none text-reset'>Tournaments</Link></div>
                </div>
                <div className='col-md-1 fs-2 fw-bold text-center'>
                   <div><Link to="/Matches"  className='text-decoration-none text-reset'>Matches</Link></div>
                </div>
                 <div className='col-md-1 fs-2 fw-bold text-center'>
                   <div><Link to="/Teams"  className='text-decoration-none text-reset'>Teams</Link></div>
                   </div>
                    {/* <div className='col-md-1'>
                    <button>Dark||Light</button>
                </div> */}
                <div className='col-md-2 fs-2 fw-bold text-center'>
                    <input type='text' placeholder='Search'/>
                </div>
               
            </div>
        </div> 
    </div>  
)
}

export default Header