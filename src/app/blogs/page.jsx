import Link from "next/link";

const blogPage = () => {
  const blogs = [
    {
      slug: "nextjs-routing-guide",
      title: "A Beginner's Guide to Routing in Next.js",
      description:
        "Learn how to set up dynamic and static routes in your Next.js applications with practical examples.",
    },
    {
      slug: "tailwind-vs-bootstrap",
      title: "Tailwind CSS vs Bootstrap: Which Should You Choose?",
      description:
        "We compare Tailwind CSS and Bootstrap side-by-side to help you decide the best framework for your next project.",
    },
    {
      slug: "javascript-async-await",
      title: "Mastering Async/Await in JavaScript",
      description:
        "A complete walkthrough of asynchronous programming in JavaScript using async and await keywords.",
    },
    {
      slug: "react-hooks-cheatsheet",
      title: "React Hooks Cheat Sheet",
      description:
        "Quick reference guide for commonly used React hooks like useState, useEffect, and useRef with examples.",
    },
    {
      slug: "mongodb-schema-design",
      title: "Designing Schemas in MongoDB for Performance",
      description:
        "Tips and best practices for creating efficient and scalable data models using MongoDB.",
    },
  ];

  return (
    <div className="p-12 space-y-3">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12 text-black space-y-3">
          <h3 className="font-bold">{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="btn btn-accent">
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default blogPage;
