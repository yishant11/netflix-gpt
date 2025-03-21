"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { mockQuestions } from "../mockData";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch questions from an API
    // For this demo, we'll use mock data
    setTimeout(() => {
      setQuestions(mockQuestions);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredQuestions = questions.filter(
    (question) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            All Questions
          </h1>
          <Link
            to="/ask"
            className="flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Ask Question
          </Link>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 animate-pulse"
              >
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredQuestions.length > 0 ? (
          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              No questions found
            </h3>
            <p className="text-gray-500 mb-6">
              Be the first to ask a question!
            </p>
            <Link
              to="/ask"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Ask Question
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default QuestionsPage;
