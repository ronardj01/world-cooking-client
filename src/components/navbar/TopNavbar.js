import React from 'react';
import { Link } from 'react-router-dom';

export const TopNavbar = () => {
  return (
    <nav className="bg-blacky">
      {/* add logo */}

      {/* add navbar  */}
      <ul className="flex justify-end items-center w-10/12 gap-12 h-20 font-semibold text-cream">
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  )
}
