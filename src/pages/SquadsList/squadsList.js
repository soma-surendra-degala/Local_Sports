import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import squadsData from '../../data/squads.json';
import matchesData from '../../data/matches.json';
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer';

const FilteredSquad = () => {
  const { teamName } = useParams();
  const [teamData, setTeamData] = useState(null);
  const [filteredMatches, setFilteredMatches] = useState([]);

useEffect(() => {
  let foundTeam = null;

  // Search through all tournaments
  for (const tournament of squadsData) {
    const team = tournament.teams.find(t => t.teamName === teamName);
    if (team) {
      foundTeam = {
        ...team,
        tournament_id: tournament.tournament_id,
        tournament_name: tournament.name
      };
      break;
    }
  }

  if (foundTeam) {
    setTeamData(foundTeam);

    const teamMatches = matchesData.filter(
      (match) =>
        match.team1 === teamName || match.team2 === teamName
    );
    setFilteredMatches(teamMatches);
  } else {
    setTeamData(null);
    setFilteredMatches([]);
  }
}, [teamName]);


  if (!teamData) {
    return <div className="text-center mt-4">Team not found</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="container mt-4">
        <div className='text-center mb-4'>
        <h1>{teamData.teamName} Squad</h1>
        <img src={teamData.logo_imgurl} alt={teamData.teamName} width="150" />
        </div>
        <div className="d-flex justify-content-center flex-wrap align-items-center">
          {teamData.squad.map((player, idx) => (
            <div key={idx} className='card shadow m-2 p-2'>
              <div>
              <img class src={player.player_image_url} alt={player.name} width="150"/>
              <div className='fs-5 fw-bold text-center mt-2'>
                {player.name}
              </div>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <h3>Matches Involving {teamName}</h3>
        <div className="mt-3">
          {filteredMatches.map((match, idx) => (
            <div key={idx}>
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
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FilteredSquad;
