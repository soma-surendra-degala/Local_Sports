import './App.css';
import { Routes } from "react-router-dom"
import { BrowserRouter, Route } from "react-router"
import Home from './pages/Home/Home';
import TournamentsPage from './pages/Tournaments/tournamentsPage';
import MatchesList from './pages/MatchesList/matchesList';
import TeamsList from './pages/TeamsList/TeamsList';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Home' element={<Home />}/>
       <Route path='/Tournaments' element={<TournamentsPage />}/>
       <Route path='/Tournaments/:tournamentId' element={<MatchesList/>}/>
       <Route path='/Matches' element={<MatchesList />}/>
       <Route path='/Teams' element={<TeamsList />}/>
      </Routes>    
    </BrowserRouter>
   </div>
  );
}

export default App;
