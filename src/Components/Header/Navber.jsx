import React from "react";
import { Link, Links, NavLink } from "react-router";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/list-books">Listed Books</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/readList">ReadList</NavLink></li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl md:ml-3">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink className="hover:bg-green-500 hover:text-white" to="/">Home</NavLink></li>
            <li><NavLink className="hover:bg-green-500 hover:text-white" to="/list-books">Listed Books</NavLink></li>
            <li><NavLink className="hover:bg-green-500 hover:text-white" to="/about">About</NavLink></li>
            <li><NavLink className="hover:bg-green-500 hover:text-white" to="/readList">ReadList</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-green-500 text-white rounded-lg">Sign In</a>
          <a className="btn bg-blue-500 text-white rounded-lg">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
