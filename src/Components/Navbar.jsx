import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <li className="navbar bg-neutral shadow-sm">
        <Link to="/" className=" text-xl text-neutral-content">
          Expense Tracker
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
