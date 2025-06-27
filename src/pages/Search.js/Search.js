import React from 'react';
import { useLocation } from 'react-router-dom';
import squadsData from '../../data/squads.json';
import teamsData from '../../data/teams.json';
import tournamentsData from '../../data/tournaments.json';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const query = useQuery().get("q")?.toLowerCase() || "";

  // ✅ Filter Tournaments
  const filteredTournaments = tournamentsData.filter(t =>
    (t.name || '').toLowerCase().includes(query)
  );

  // ✅ Filter Teams
  const filteredTeams = teamsData.filter(t =>
    (t.team || '').toLowerCase().includes(query)
  );

  // ✅ Filter Players from all squads
// ✅ Filter and remove duplicate players
const allPlayers = squadsData.flatMap(tournament =>
  (tournament.teams || []).flatMap(team =>
    (team.squad || []).filter(player =>
      (player.name || '').toLowerCase().includes(query)
    )
  )
);

// ✅ Remove duplicates by name
const seen = new Set();
const filteredPlayers = allPlayers.filter(player => {
  const name = player.name.toLowerCase();
  if (seen.has(name)) return false;
  seen.add(name);
  return true;
});


  const nothingFound =
    filteredTournaments.length === 0 &&
    filteredTeams.length === 0 &&
    filteredPlayers.length === 0;

  return (
    <div className="container mt-4">
      <h2>Search Results for "{query}"</h2>

      {nothingFound && <p>No results found.</p>}

      {/* Tournaments */}
      {filteredTournaments.length > 0 && (
        <>
          <h3 className='mt-4'>Tournaments</h3>
          <ul>
            {filteredTournaments.map((t, i) => (
              <li key={i}>{t.name}</li>
            ))}
          </ul>
        </>
      )}

      {/* Teams */}
      {filteredTeams.length > 0 && (
        <>
          <h3 className='mt-4'>Teams</h3>
          <ul>
            {filteredTeams.map((t, i) => (
              <li key={i}>{t.team}</li>
            ))}
          </ul>
        </>
      )}

      {/* Players */}
      {filteredPlayers.length > 0 && (
        <>
          <h3 className='mt-4'>Players</h3>
          <ul>
            {filteredPlayers.map((player, i) => (
              <li key={i}>{player.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Search;
