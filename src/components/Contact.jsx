import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 underline hover:decoration-4 justify-content: flex-start;">
        Get in touch
      </h1>
      <Link to="/">
        <button className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Contact;
