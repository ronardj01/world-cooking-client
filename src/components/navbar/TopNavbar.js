import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';

export const TopNavbar = () => {
  const [isHidden, setIsHidden] = useState("hidden")
  
  const whenClick = () => {
    setIsHidden((isHidden === "hidden" ? "" : "hidden"))
  }

  return (
    <nav className="bg-blacky">
      {/* add logo */}

      <div className="flex flex-col items-center min-h-full font-semibold text-cream justify-end">
        <button
          onClick={whenClick}
          className="text-3xl hover-nav md:hidden my-3"><HiOutlineMenu /></button>
        <ul
          className={`flex flex-col ${isHidden} md:flex-row md:inline-flex`}>
          <li className="hover-nav">
            <Link to="/">Home</Link>
          </li>
          <li className="hover-nav">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover-nav">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
