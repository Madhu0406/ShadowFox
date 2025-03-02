import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/ipl/csk/matches") // Replace with a real API
      .then((response) => response.json())
      .then((data) => setMatches(data));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-6">Match Schedule</h2>
      <ul className="space-y-4">
        {matches.map((match, index) => (
          <li key={index} className="p-4 bg-gray-200 rounded shadow">
            {match.date} - {match.opponent} ({match.venue})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
