import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li className="navbar bg-neutral shadow-sm">
        <Link to="/" className="btn btn-ghost text-xl text-white">
          Expense Tracker
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
