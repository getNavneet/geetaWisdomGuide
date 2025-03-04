import React from "react";
const BhagavadGitaCard = () => {
    const handleReadClick = () => {
        window.open('../../Bhagavad-gita-hindi.pdf', '_blank');
      };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-700 text-white p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-950">Bhagavad Gita</h1>
        <p className="mt-4 text-lg md:text-xl text-orange-900">
          Timeless wisdom from ancient Sanskrit scripture, guiding humanity towards righteousness, purpose, and enlightenment.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          <button  onClick={handleReadClick} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-full md:w-auto">
            Start Reading →
          </button>
          
          <button className="border border-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-full md:w-auto">
            Learn More
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-orange-400 text-lg font-semibold">
          <div className="text-center">
            <span className="text-2xl md:text-3xl">18</span>
            <p className="text-gray-400 text-sm">Chapters</p>
          </div>
          <div className="text-center">
            <span className="text-2xl md:text-3xl">700</span>
            <p className="text-gray-400 text-sm">Verses</p>
          </div>
          <div className="text-center">
            <span className="text-2xl md:text-3xl">35M+</span>
            <p className="text-gray-400 text-sm">Readers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhagavadGitaCard;
