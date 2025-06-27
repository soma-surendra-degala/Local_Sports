import React from 'react';
import tournamentsData from 'C:/Users/surid/Desktop/Local Sports/frontend/src/data/tournaments.json';
import '../Tournaments/tournaments.css'
import { Link, useNavigate } from 'react-router-dom';


function Tournaments() {

     const navigate = useNavigate();

     const handleClick = (id) => {
        navigate(`/Tournaments/${id}`);
      };
      <Link to={`/Tournaments/${tournamentsData.id}`}>{tournamentsData.name}</Link>

  return (
    
 <div className='container'>
      <h1 className='m-3 p-2'>
        Cricket Tournaments 2024 - 2025
      </h1>
    <div>
      <div className='d-flex flex-wrap  justify-content-around gap-4'>
        {tournamentsData.map((tournament) => (
          <div key={tournament.id} >
              <div onClick={()=>handleClick(tournament.id)} className='image-text-container card shadow'>
                 <div><img src={tournament.logoUrl} alt={tournament.name} width="150"/></div>
                <div className='fs-5 fw-bold  text-center"'>{tournament.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Tournaments