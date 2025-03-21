"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useUser } from "../contexts/UserContext";
import { mockQuestions } from "../mockData";

const AskQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { username } = useUser();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.length < 10) {
      newErrors.title = "Title must be at least 10 characters";
    }

    if (!body.trim()) {
      newErrors.body = "Question details are required";
    } else if (body.length < 20) {
      newErrors.body = "Question details must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // In a real app, you would send this data to your API
    // For this demo, we'll simulate an API call
    setTimeout(() => {
      const newQuestion = {
        id: Date.now().toString(),
        title,
        body,
        username,
        createdAt: new Date().toISOString(),
        answers: [],
      };

      // Add the new question to our mock data
      mockQuestions.unshift(newQuestion);

      setIsSubmitting(false);
      navigate(`/questions/${newQuestion.id}`);
    }, 1000);
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Ask a Question
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Question Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errors.title) {
                    setErrors({ ...errors, title: undefined });
                  }
                }}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.title
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                placeholder="What's your question? Be specific."
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Question Details
              </label>
              <textarea
                id="body"
                rows={8}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  if (errors.body) {
                    setErrors({ ...errors, body: undefined });
                  }
                }}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.body
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                placeholder="Provide all the details someone would need to answer your question..."
              />
              {errors.body && (
                <p className="mt-1 text-sm text-red-600">{errors.body}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate("/questions")}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 mr-4 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Post Your Question"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AskQuestionPage;
