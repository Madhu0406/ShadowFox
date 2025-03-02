import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Schedule from "./pages/Schedule";
import Stats from "./pages/Stats";
import FanZone from "./pages/FanZone";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import PlayerDetails from "./pages/PlayerDetails";
import FanClub from "./pages/FanClub";
import Fireworks from "./components/Fireworks";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/fan-zone" element={<FanZone />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/player-details" element={<PlayerDetails />} />
        <Route path="/fan-club" element={<FanClub />} />
      </Routes>
      <Fireworks isCSKWin={true} />
    </Router>
  );
}

export default App;
