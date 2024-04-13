import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateCrewmate from './pages/CreateCrewmate';
import ReadCrewmates from './pages/ReadCrewmates';
import EditCrewmate from './pages/EditCrewmate';
import CrewmateInfo from './pages/CrewmateInfo';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
        <Link to="/"><button>Home</button></Link>
          <Link to="/create"><button>Create Crewmate</button></Link>
          <Link to="/read"><button>View All Crewmates</button></Link>
        </nav>
        <div className="header">
          <h1>One Piece Crewmates</h1>
          <p>Manage your crewmates and set sail on epic adventures!</p>
        </div>

        <Routes>
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/read" element={<ReadCrewmates />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
          <Route path="/crewmate/:id" element={<CrewmateInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
