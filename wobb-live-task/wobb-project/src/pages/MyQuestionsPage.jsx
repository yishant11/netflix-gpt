import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import QuestionCard from "../components/QuestionCard";
import { useUser } from "../contexts/UserContext";
import { PlusIcon } from "@heroicons/react/24/outline";
import { mockQuestions } from "../mockData";

const MyQuestionsPage = () => {
  const { username } = useUser();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the user's questions from an API
    // For this demo, we'll filter our mock data
    setTimeout(() => {
      const userQuestions = mockQuestions.filter(
        (q) => q.username === username
      );
      setQuestions(userQuestions);
      setIsLoading(false);
    }, 500);
  }, [username]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            My Questions
          </h1>
          <Link
            to="/ask"
            className="flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Ask Question
          </Link>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
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
        ) : questions.length > 0 ? (
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              You haven't asked any questions yet
            </h3>
            <p className="text-gray-500 mb-6">
              Your questions will appear here once you start asking
            </p>
            <Link
              to="/ask"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Ask Your First Question
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyQuestionsPage;
