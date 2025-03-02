import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/assets/csk1.jpg",
  "/assets/csk2.jpg",
  "/assets/csk3.jpg",
  "/assets/csk4.jpg"
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div className="container mx-auto p-5 text-center">
      <h2 className="text-4xl font-bold text-yellow-500 mb-6">Gallery</h2>
      <div className="relative flex justify-center items-center">
        <button onClick={prevSlide} className="absolute left-0 text-3xl text-yellow-500">
          <FaArrowLeft />
        </button>
        <img src={images[currentIndex]} alt="CSK Moments" className="w-3/4 rounded-lg shadow-lg" />
        <button onClick={nextSlide} className="absolute right-0 text-3xl text-yellow-500">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
