import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";
// 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
  const { users, singOutUser } = useContext(AuthContext); // Context থেকে লগইন ইউজার আনুন

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility

  // ইমেইলের প্রথম অক্ষর বের করা (যদি ইউজার লগইন থাকে)
  const firstLetter = users?.email ? users.email[0].toUpperCase() : "";

  const handleSingOuts = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        singOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have successfully logged out.",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong. Please try again.",
              icon: "error",
            });
            console.error(err);
          });
      }
    });
  };
  const items = (
    <>
      <Link
        to="/"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="/jobs"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Jobs
      </Link>
      <Link
        to="/employers"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        Employers
      </Link>
      <Link
        to="/about"
        className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </Link>
      {users ? (
        <Link
          onClick={handleSingOuts}
          className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center bg-green-600"
        >
          Logout
        </Link>
      ) : (
        <Link
          to="/login"
          className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium flex items-center bg-green-600"
        >
          Login Now
        </Link>
      )}
    </>
  );

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="text-white text-2xl font-bold">JobPortal</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 items-center">
              {items}

              {/* গোল শেপ ইমেজ */}
              {users?.email && (
                <div className="relative group">
                  <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer">
                    {firstLetter}
                  </div>

                  {/* টুলটিপ */}

                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-sm py-1 px-3 rounded shadow-lg hidden group-hover:block z-50">
                    {users.email}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">{items}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
