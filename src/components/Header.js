import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-500 text-blue-900 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">CSK Fan Page</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/players" className="hover:text-white">Players</Link></li>
          <li><Link to="/schedule" className="hover:text-white">Schedule</Link></li>
          <li><Link to="/stats" className="hover:text-white">Stats</Link></li>
          <li><Link to="/fan-zone" className="hover:text-white">Fan Zone</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
