"use client";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import AnswerCard from "../components/AnswerCard";
import { useUser } from "../contexts/UserContext";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { mockQuestions } from "../mockData";

const QuestionDetailPage = () => {
  const { id } = useParams();
  const { username } = useUser();
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the question from an API
    // For this demo, we'll use mock data
    setTimeout(() => {
      const foundQuestion = mockQuestions.find((q) => q.id === id);
      setQuestion(foundQuestion || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    if (!answerText.trim()) {
      setError("Answer cannot be empty");
      return;
    }

    if (answerText.length < 10) {
      setError("Answer must be at least 10 characters");
      return;
    }

    setIsSubmitting(true);

    // In a real app, you would send this data to your API
    // For this demo, we'll simulate an API call
    setTimeout(() => {
      const newAnswer = {
        id: Date.now().toString(),
        body: answerText,
        username,
        createdAt: new Date().toISOString(),
      };

      // Add the new answer to our question
      const updatedQuestion = {
        ...question,
        answers: [...(question.answers || []), newAnswer],
      };

      // Update the question in our mock data
      const questionIndex = mockQuestions.findIndex((q) => q.id === id);
      if (questionIndex !== -1) {
        mockQuestions[questionIndex] = updatedQuestion;
      }

      setQuestion(updatedQuestion);
      setAnswerText("");
      setError("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex">
                <div className="h-10 w-10 bg-gray-200 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (!question) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Question not found
          </h2>
          <p className="text-gray-600 mb-6">
            The question you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/questions"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to all questions
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Link
          to="/questions"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back to all questions
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {question.title}
          </h1>
          <p className="text-gray-700 mb-6 whitespace-pre-line">
            {question.body}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium text-indigo-600">
              {question.username}
            </span>
            <span className="mx-2">•</span>
            <span>
              {formatDistanceToNow(new Date(question.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {question.answers?.length || 0}{" "}
          {question.answers?.length === 1 ? "Answer" : "Answers"}
        </h2>

        {question.answers && question.answers.length > 0 ? (
          <div className="space-y-4 mb-8">
            {question.answers.map((answer) => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 text-center mb-8">
            <p className="text-gray-600">
              No answers yet. Be the first to answer this question!
            </p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Your Answer
          </h3>
          <form onSubmit={handleSubmitAnswer}>
            <div className="mb-4">
              <textarea
                rows={6}
                value={answerText}
                onChange={(e) => {
                  setAnswerText(e.target.value);
                  setError("");
                }}
                className={`w-full px-4 py-3 rounded-lg border ${
                  error
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                placeholder="Write your answer here..."
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-600">
                <UserCircleIcon className="h-5 w-5 mr-1 text-indigo-500" />
                <span>
                  Posting as <span className="font-medium">{username}</span>
                </span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Post Your Answer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionDetailPage;
