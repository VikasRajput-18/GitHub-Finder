import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="mb-12 shadow-2xl py-4 w-full"
      style={{ backgroundColor: "#292F3B" }}
    >
      <div className="flex justify-between items-center sm:px-5 px-2">
        <div className="flex justify-center items-center sm:gap-5 gap-2">
          <FaGithub className="sm:text-2xl text-xl cursor-pointer text-slate-300" />
          <Link to="/">
            <span className="sm:text-xl text-lg font-semibold text-slate-300">
              GitHub Finder
            </span>
          </Link>
        </div>
        <div className="flex justify-end items-center sm:gap-5 gap-1">
          <Link to="/" className="btn  btn-ghost text-white">
            Home
          </Link>
          <Link to="/about" className="btn  btn-ghost text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
