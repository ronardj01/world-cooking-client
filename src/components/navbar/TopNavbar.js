import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';

export const TopNavbar = () => {
const [isHidden, setIsHidden] = useState(true)

const whenClick = () => {
    setIsHidden(!isHidden)
}

  return (
    <nav className="bg-blacky">
      {/* add logo */}

      {/* add navbar  */}

      <div className="flex flex-col items-center min-h-full font-semibold text-cream justify-end">
        <button
         onClick={whenClick}
        className="text-3xl hover-nav md:hidden"><HiOutlineMenu /></button>
        <ul 
       className={isHidden ? "flex flex-col hidden md:flex-row" : "flex flex-col md:flex-row"}>
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
