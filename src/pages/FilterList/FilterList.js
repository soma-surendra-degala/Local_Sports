import React from 'react'
import Header from '../../Component/Header/header'
import matchesData from '../../data/matches.json';
import tournamentsData from '../../data/tournaments.json';

function FilterList() {
     const filteredData = tournamentsData.map(tournament => {
         const associatedMatches = matchesData.filter(match => match.tournament_id === tournament.id);
         return{
            ...tournament,
            matches: associatedMatches
          };
  });   

     
  return (
    
    <div>
        <div>
            <Header />
        </div>
        <div>
            {filteredData.map((match) => (
                <div>
                    <div key={match.id} className='container mt-4'>
                        <div className='fs-4 fw-bold'>
                            {match.date}
                        </div>
                        <div className='card shadow mb-3'>
                            <div className='fs-5 fw-bold mx-2'>
                                {match.tournament_id}
                            </div>
                            <div className='card-body d-flex flex-row align-items-center justify-content-center'>
                                <div className='col-md-4 fs-2 fw-bold text-center'>
                                    {match.team1}
                                </div>
                                <div className='col-md-4 fs-5 fw-bold text-center'>
                                    <div className='p-1'>
                                        {match.time_ist}
                                    </div>
                                    <div className='p-1'>
                                        {match.match_id}
                                    </div>
                                    <div className='p-1'>
                                        {match.venue}
                                    </div>
                                </div>
                                <div className='col-md-4 fs-2 fw-bold text-center'>
                                    {match.team2}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>))}
        </div>
    </div>
  )
}

export default FilterList