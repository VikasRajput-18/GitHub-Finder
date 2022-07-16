import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'


const NoPage = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <h1 className="sm:text-6xl text-2xl font-bold my-4 text-white">Oops !</h1>
      <p className="sm:text-3xl text-xl font-semibold my-4 text-white" >
        Page Not Found 🚫
      </p>
      <Link
        to="/"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex gap-4 items-center my-4"
      >
        <FaHome className="text-2xl" />
        <span className="text-xl text-white">Back To Home</span>
      </Link>
    </section>
  );
};

export default NoPage;
