import React from "react";
import "./Players.css"; // Import CSS
import dhoni from "../assets/msd.webp";
import jadeja from "../assets/jadeja.webp";
import gaikwad from "../assets/rutu.webp";
import pathirana from "../assets/deepak.webp";

const Players = () => {
  return (
    <div className="players-container">
      <h2>Meet Our CSK Stars ⭐</h2>
      <div className="players-grid">
        <div className="player-card">
          <img src={dhoni} alt="MS Dhoni" />
          <h3>MS Dhoni</h3>
          <p>Captain Cool</p>
        </div>
        <div className="player-card">
          <img src={jadeja} alt="Ravindra Jadeja" />
          <h3>Ravindra Jadeja</h3>
          <p>All-Rounder</p>
        </div>
        <div className="player-card">
          <img src={gaikwad} alt="Ruturaj Gaikwad" />
          <h3>Ruturaj Gaikwad</h3>
          <p>Opening Batsman</p>
        </div>
        <div className="player-card">
          <img src={pathirana} alt="Deepak Chahar" />
          <h3>Deepak Chahar</h3>
          <p>Fast Bowler</p>
        </div>
      </div>
    </div>
  );
};

export default Players;
