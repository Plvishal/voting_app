'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/user/login', formData).then((res) => {
      console.log(res.data);
      if ((res.data.success = true)) {
        router.push('/voting-page');
      }
    });
  };
  return (
    <form
      className="md:w-1/4 h-[40%] bg-white  flex flex-col p-4 justify-between border-1 shadow-2xl rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg uppercase font-serif font-bold text-black/[0.6] flex items-center justify-center">
        Voting App Login
      </h1>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInputChange}
        className="bg-[#fff] outline-none border-b-2 text-md font-semibold font-sans text-black/[0.6]"
      />
      <input
        type="password"
        name="password"
        id="=password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        className="bg-[#fff] outline-none border-b-2 text-md font-semibold font-sans text-black/[0.6]"
      />

      <div className="flex justify-center flex-col items-center">
        <button
          className="bg-[#d9a1a0] p-2 px-4 rounded-lg hover:bg-gradient-to-l from-[#ff8882] via-[#cb857c] to-[#fbd2c9] transition-all ease-in-out text-md font-bold font-serif text-black/[0.7]"
          type="submit"
        >
          Login
        </button>
        <p className="text-sm font-bold font-serif mt-2 text-black/[0.7]">
          You don't have account ?
          <Link href={'/register'} className="underline">
            register
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
