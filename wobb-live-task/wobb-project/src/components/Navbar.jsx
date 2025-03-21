"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import {
  ChatBubbleLeftRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { username, isLoggedIn, logout } = useUser();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to={isLoggedIn ? "/questions" : "/"}
              className="flex items-center"
            >
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">
                StackTalk
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          {isLoggedIn && (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/questions"
                className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                All Questions
              </Link>
              <Link
                to="/ask"
                className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Ask Question
              </Link>
              <Link
                to="/my-questions"
                className="text-white hover:text-indigo-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                My Questions
              </Link>
              <div className="ml-4 flex items-center">
                <span className="text-white mr-2">Hi, {username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          {isLoggedIn && (
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-indigo-100 focus:outline-none"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isLoggedIn && isMenuOpen && (
        <div className="md:hidden bg-indigo-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/questions"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              All Questions
            </Link>
            <Link
              to="/ask"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Ask Question
            </Link>
            <Link
              to="/my-questions"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              My Questions
            </Link>
            <div className="px-3 py-2">
              <span className="text-white block mb-2">Hi, {username}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
