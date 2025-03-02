import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import confetti from "canvas-confetti";
import CSKLogo from "../assets/csk-logo.webp";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleWin = () => {
    confetti({
      particleCount: 200,
      spread: 150,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="hero">
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/players">Players</a></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/stats">Stats</a></li>
          <li><a href="/fanzone">Fan Zone</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <h1 data-aos="fade-up">Welcome to CSK Fan Page</h1>

      {/* Glowing Logo */}
      <img src={CSKLogo} alt="CSK Logo" className="csk-logo" data-aos="zoom-in" />

      <p className="text-lg text-gray-300 mt-2" data-aos="fade-up">
        Stay updated with match schedules, player stats & fan activities!
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="btn btn-primary" data-aos="flip-left">
          View Match Schedule
        </button>

        <button onClick={handleWin} className="btn btn-celebrate" data-aos="flip-right">
          Celebrate CSK Win 🎉
        </button>
      </div>

      {/* Scrolling Indicator */}
      <div className="mt-10">
        <p className="scroll-down">Scroll down for more...</p>
      </div>
    </div>
  );
};

export default Home;
