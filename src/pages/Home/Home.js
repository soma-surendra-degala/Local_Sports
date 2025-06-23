import React from 'react'
import "C:/Users/surid/Desktop/Local Sports/frontend/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from 'C:/Users/surid/Desktop/Local Sports/frontend/src/Component/Header/header.js';
import SwipeToSlide from 'C:/Users/surid/Desktop/Local Sports/frontend/src/Component/Slider/slider.js';
import Tournaments from 'C:/Users/surid/Desktop/Local Sports/frontend/src/Component/Tournaments/tournaments.js';
import Footer from 'C:/Users/surid/Desktop/Local Sports/frontend/src/Component/Footer/footer.js';

function Home() {
  return (
    <div>
       <div>
        <div>
        <Header />
        </div>
        <div className='m-1'>
          <SwipeToSlide />
        </div>
        <div className='m-4'>
          <Tournaments />
        </div>
        <div>
          <Footer />
        </div>
    </div>
    </div>
  )
}

export default Home