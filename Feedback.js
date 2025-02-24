// src/components/Feedback.js
import React, { useState } from "react";

const Feedback = () => {
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${comments}`);
    setComments(""); // Reset the input field
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Your Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded-md">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
