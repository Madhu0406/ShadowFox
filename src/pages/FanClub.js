import { useState } from "react";

const FanClub = () => {
  const [votes, setVotes] = useState({ dhoni: 0, jadeja: 0, ruturaj: 0 });

  const voteFor = (player) => {
    setVotes({ ...votes, [player]: votes[player] + 1 });
  };

  return (
    <div className="container mx-auto p-5 text-center">
      <h2 className="text-4xl font-bold text-yellow-500 mb-6">Fan Poll</h2>
      <p className="text-lg mb-4">Who is your favorite CSK player?</p>
      <div className="flex justify-center space-x-4">
        {Object.keys(votes).map((player) => (
          <button 
            key={player}
            onClick={() => voteFor(player)}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            {player.toUpperCase()} ({votes[player]})
          </button>
        ))}
      </div>
    </div>
  );
};

export default FanClub;
