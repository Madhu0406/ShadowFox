import { useState } from "react";
const players = [
  { name: "MS Dhoni", role: "Captain", stats: "5000+ Runs, 3 IPL Titles", image: "/assets/dhoni.jpg" },
  { name: "Ruturaj Gaikwad", role: "Batsman", stats: "1200+ Runs", image: "/assets/ruturaj.jpg" },
  { name: "Ravindra Jadeja", role: "All-Rounder", stats: "2500+ Runs, 100+ Wickets", image: "/assets/jadeja.jpg" }
];

const PlayerDetails = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-4xl font-bold text-yellow-500 text-center mb-6">Player Details</h2>
      <div className="flex space-x-4 justify-center">
        {players.map((player, index) => (
          <button 
            key={index}
            onClick={() => setSelectedPlayer(player)}
            className="p-2 bg-blue-900 text-white rounded-lg hover:bg-yellow-500 transition"
          >
            {player.name}
          </button>
        ))}
      </div>
      <div className="text-center mt-6">
        <img src={selectedPlayer.image} alt={selectedPlayer.name} className="w-40 mx-auto rounded-lg shadow-lg" />
        <h3 className="text-2xl font-bold mt-3">{selectedPlayer.name}</h3>
        <p className="text-lg text-gray-700">{selectedPlayer.role}</p>
        <p className="text-sm text-gray-500">{selectedPlayer.stats}</p>
      </div>
    </div>
  );
};

export default PlayerDetails;
