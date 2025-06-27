import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li className="navbar bg-neutral flex justify-between shadow-sm">
        <Link to="/" className=" text-xl text-neutral-content">
          Expense Tracker
        </Link>
        <h1 className="text-xl text-neutral-content">
          Keep Your Expenses in Line!
        </h1>
      </li>
    </nav>
  );
};

export default Navbar;
