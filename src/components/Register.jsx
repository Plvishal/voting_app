import React from 'react';
import Link from 'next/link';
function Register() {
  return (
    <div className="md:w-1/4 h-[60%] bg-white  flex flex-col p-4 justify-between border-1 shadow-2xl rounded-lg">
      <h1 className="text-lg uppercase font-serif font-bold text-black/[0.6] flex items-center justify-center">
        Voting App Registration
      </h1>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
        className="bg-[#fff] outline-none border-b-2 text-md font-semibold font-sans text-black/[0.6]"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="bg-[#fff] outline-none border-b-2 text-md font-semibold font-sans text-black/[0.6]"
      />
      <input
        type="password"
        name="password"
        id="=password"
        placeholder="Enter your password"
        className="bg-[#fff] outline-none border-b-2 text-md font-semibold font-sans text-black/[0.6]"
      />

      <input
        type="tel"
        name="phoneNumber"
        id="=phoneNumber"
        placeholder="Enter your phone number"
        className="bg-[#fff] outline-none border-b-2 text-md font-semibold font-sans text-black/[0.6]"
      />

      <div className="flex justify-center items-center flex-col">
        <button className="bg-[#d9a1a0] p-2 px-4 rounded-lg hover:bg-gradient-to-l from-[#ff8882] via-[#cb857c] to-[#fbd2c9] transition-all ease-in-out text-md font-bold font-serif text-black/[0.7]">
          Register
        </button>
        <p className="text-sm font-bold font-serif mt-2 text-black/[0.7]">
          You have already account ?
          <Link href={'/'} className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
