import React from 'react';
import Header from '../../Component/Header/header';
import Tournaments from '../../Component/Tournaments/tournaments';
import Footer from '../../Component/Footer/footer';

function TournamentsPage() {
  return (
    <div>
      
        <div>
            <Header/>
        </div>
        <div className='m-4'>
          <Tournaments />
        </div>
      <div>
          <Footer />
        </div>
    </div>
  )
}

export default TournamentsPage