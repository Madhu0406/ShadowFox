const About = () => {
    return (
      <div className="container mx-auto p-5">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-6">About CSK</h2>
        <p className="text-lg text-gray-800 text-center">
          Chennai Super Kings (CSK) is one of the most successful franchises in the Indian Premier League (IPL). 
          Led by the legendary MS Dhoni, CSK has won multiple IPL titles and is known for its consistent performance.
        </p>
        <div className="flex justify-center mt-6">
          <img src="/assets/csk-team.jpg" alt="CSK Team" className="w-3/4 rounded-lg shadow-lg" />
        </div>
      </div>
    );
  };
  
  export default About;
  