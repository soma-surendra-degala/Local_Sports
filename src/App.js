import './App.css';
import { Routes } from "react-router-dom"
import { BrowserRouter, Route } from "react-router"
import Home from './pages/Home/Home';
import TournamentsPage from './pages/Tournaments/tournamentsPage';
import MatchesList from './pages/MatchesList/matchesList';
import TeamsList from './pages/TeamsList/TeamsList';
import FilterList from './pages/FilterList/FilterList';
import SquadsList from './pages/SquadsList/squadsList';
import Search from './pages/Search.js/Search';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Home' element={<Home />}/>
       <Route path='/Tournaments' element={<TournamentsPage />}/>
       <Route path='/Tournaments/:tournamentId' element={<FilterList/>}/>
       <Route path='/Matches' element={<MatchesList />}/>
       <Route path='/Teams' element={<TeamsList />}/>
       <Route path='/Teams/:teamName' element={<SquadsList />} />
       <Route path='/Search' element={<Search />} />
      </Routes>    
    </BrowserRouter>
   </div>
  );
}

export default App;
