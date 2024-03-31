import React from "react";
import logoImage from "./logo.png"
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-gray-800">
    <div className="max-w-2xl mx-auto text-white py-6">
      <div className="text-center">
        {/* Replace h3 with img */}
        <img
          className="mx-auto h-20 w-25 "
          src={logoImage} 
          alt="Gurukrupa Jewelers"
        />
        <p> SINCE 1935 </p>
        <div className="flex justify-center my-10"></div>
      </div>
      <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
        <p className="order-2 md:order-1 mt-4 md:mt-0">
          &copy; Incipient Technologies, 2024.
        </p>
        <div className="order-1 md:order-2">
          <Link  to="/dashboard" className="px-2">Dashboard</Link>
          
        </div>
      </div>
    </div>
  </div>
  
  );
}
