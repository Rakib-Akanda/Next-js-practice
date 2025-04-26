const page = async ({ params }) => {
  const { slug } = await params;
  // console.log(slug);
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

  const { title, description } = blogs.find(
    (blog) => blog.slug === slug
  );
  return (
    <div className="h-screen">
      <h2>{title}</h2>
      <h2>{description}</h2>
    </div>
  );
};

export default page;
