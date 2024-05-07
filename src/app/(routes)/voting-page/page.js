'use client';
import React, { useState } from 'react';

function VotingPage() {
  const [formData, setFormData] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-[#333652] h-screen flex justify-center items-center">
      <div className="border p-2 rounded-xl md:w-1/5 w-1/2 h-1/2 shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-around items-center h-full"
        >
          <div className="flex justify-center items-center gap-2">
            <input
              type="radio"
              name="voting"
              value={'candidate1'}
              onChange={(e) => setFormData(e.target.value)}
              className="w-6 h-6"
            />
            candidate1
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="radio"
              name="voting"
              value={'candidate2'}
              onChange={(e) => setFormData(e.target.value)}
              className="w-6 h-6"
            />
            candidate2
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="radio"
              name="voting"
              value={'candidate3'}
              onChange={(e) => setFormData(e.target.value)}
              className="w-6 h-6"
            />
            candidate3
          </div>
          <button
            className="bg-[#d9a1a0] p-2 px-4 rounded-lg hover:bg-gradient-to-r from-[#ff8882] via-[#cb857c] to-[#fbd2c9] transition-all ease-in-out text-md font-bold font-serif text-black/[0.7] shadow-2xl"
            type="submit"
          >
            vote
          </button>
        </form>
      </div>
    </div>
  );
}

export default VotingPage;
