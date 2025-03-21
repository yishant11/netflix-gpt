"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    // In a real app, you would check if the username is unique here
    // For this demo, we'll just accept any valid username
    login(username);
    navigate("/questions");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-purple-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <ChatBubbleLeftRightIcon className="h-16 w-16 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome to StackTalk
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Join the community to ask questions and share knowledge
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Choose a username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter a unique username"
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
            >
              Get Started
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8">
            No authentication required - just enter a username to begin
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
