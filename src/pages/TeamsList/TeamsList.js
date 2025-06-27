import React from 'react'
import Header from '../../Component/Header/header'
import teamsData from '../../data/teams.json'
import { useNavigate } from 'react-router-dom';

function TeamsList() {
  const navigate = useNavigate();
  const handleTeamClick = (teamName) => {
    navigate(`/Teams/${teamName}`);
  };
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
        <h1 className='container fw-bold mt-2 p-1'>Teams List</h1>
        </div>
    <div className='container'>
      <div className='d-flex flex-wrap  justify-content-around gap-4 mt-3 mb-4'>
        {teamsData.map((team) => (
          <div key={team.id} >
              <div onClick={()=>handleTeamClick(team.team)} className='image-text-container card shadow'>
                 <div><img src={team.logo_imgUrl} alt={team.name} width="115" /></div>
                <div className='fs-4 fw-bold text-center"'>{ team.team}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>)
}

export default TeamsList