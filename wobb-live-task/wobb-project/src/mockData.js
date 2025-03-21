"use client";

// This file contains mock data for the application
// In a real app, this data would come from an API

export const mockQuestions = [
  {
    id: "1",
    title: "How do I center a div with CSS?",
    body: "I've been trying to center a div horizontally and vertically using CSS, but I can't seem to get it right. I've tried using margin: auto, but it only centers horizontally. What's the best way to center a div both horizontally and vertically?",
    username: "css_newbie",
    createdAt: "2023-03-15T10:30:00Z",
    answers: [
      {
        id: "101",
        body: "You can use Flexbox for this. Set the parent container to display: flex; justify-content: center; align-items: center;",
        username: "flexbox_fan",
        createdAt: "2023-03-15T11:15:00Z",
      },
      {
        id: "102",
        body: "Another approach is to use CSS Grid. Set the parent to display: grid; place-items: center;",
        username: "grid_guru",
        createdAt: "2023-03-15T12:45:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "What's the difference between let, const, and var in JavaScript?",
    body: "I'm learning JavaScript and I'm confused about when to use let, const, and var for declaring variables. Can someone explain the differences and when to use each one?",
    username: "js_beginner",
    createdAt: "2023-03-16T09:20:00Z",
    answers: [
      {
        id: "201",
        body: "var is function-scoped, while let and const are block-scoped. const creates a variable that cannot be reassigned. Use const by default, let when you need to reassign, and avoid var in modern code.",
        username: "js_expert",
        createdAt: "2023-03-16T10:05:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "How to handle API requests in React?",
    body: "I'm building a React application and need to fetch data from an API. What's the best way to handle API requests in React? Should I use fetch, axios, or something else? And where should I put the API calls in my component lifecycle?",
    username: "react_dev",
    createdAt: "2023-03-17T14:10:00Z",
    answers: [
      {
        id: "301",
        body: "You can use the useEffect hook with fetch or axios. Axios provides a simpler API and better error handling. Example: useEffect(() => { axios.get('/api/data').then(res => setData(res.data)); }, []);",
        username: "hooks_master",
        createdAt: "2023-03-17T15:30:00Z",
      },
      {
        id: "302",
        body: "Consider using React Query or SWR for more advanced data fetching. They handle caching, loading states, and refetching automatically.",
        username: "modern_react",
        createdAt: "2023-03-17T16:45:00Z",
      },
      {
        id: "303",
        body: "If you're using Redux, you might want to look into Redux Thunk or Redux Saga for handling asynchronous actions like API calls.",
        username: "redux_fan",
        createdAt: "2023-03-18T09:15:00Z",
      },
    ],
  },
  {
    id: "4",
    title: "Best practices for responsive web design?",
    body: "I'm working on a website that needs to look good on all devices from phones to desktops. What are the current best practices for responsive web design? Should I use a framework like Bootstrap or build from scratch?",
    username: "design_enthusiast",
    createdAt: "2023-03-19T11:25:00Z",
    answers: [
      {
        id: "401",
        body: "Use a mobile-first approach, flexible grid layouts, and media queries. Frameworks like Bootstrap or Tailwind CSS can speed up development, but you can also build from scratch with CSS Grid and Flexbox.",
        username: "responsive_wizard",
        createdAt: "2023-03-19T12:40:00Z",
      },
    ],
  },
  {
    id: "5",
    title: "How to optimize React performance?",
    body: "My React application is getting slow as it grows. What are some ways to optimize performance in a React app? I've heard about memoization and virtualization but I'm not sure how to implement them.",
    username: "performance_seeker",
    createdAt: "2023-03-20T16:15:00Z",
    answers: [],
  },
];
