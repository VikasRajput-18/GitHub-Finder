import React from 'react'
import { FaSlackHash } from "react-icons/fa";


const Footer = () => {
    const  footerYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 py-4 flex justify-center flex-col items-center gap-2 w-full fixed bottom-0">
      <FaSlackHash className="text-3xl font-semibold " />
      <p className="font-semibold text-slate-200">
        Copyright &copy; {footerYear} All Rights Reserved.{" "}
      </p>
      <p className="text-center text-slate-200">Vikas Rajput</p>
    </footer>
  );
}

export default Footer