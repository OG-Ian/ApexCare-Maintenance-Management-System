// src/components/JobAssignmentUpdate.js
import React, { useState } from "react";
import { jobAssignments } from "../mockData";

const JobAssignmentUpdate = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [status, setStatus] = useState("");

  const handleJobSelection = (job) => {
    setSelectedJob(job);
    setStatus(job.status);
  };

  const handleStatusUpdate = () => {
    const updatedJobs = jobAssignments.map((job) => 
      job.assignmentId === selectedJob.assignmentId ? { ...job, status } : job
    );
    alert(`Job ID ${selectedJob.assignmentId} status updated to ${status}!`);
    setSelectedJob(null);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Update Job Assignments</h2>
      <ul className="mt-4">
        {jobAssignments.map((job) => (
          <li key={job.assignmentId} className="mb-4 p-4 border rounded-md flex justify-between">
            <div>
              <h4 className="font-bold">Job ID: {job.assignmentId}</h4>
              <p>Status: {job.status}</p>
              <button onClick={() => handleJobSelection(job)} className="bg-blue-500 text-white px-2 py-1 rounded">Update Status</button>
            </div>
          </li>
        ))}
      </ul>
      
      {selectedJob && (
        <div className="mt-4">
          <h3 className="text-xl">Update Status for Job ID: {selectedJob.assignmentId}</h3>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select Status</option>
            <option value="Assigned">Assigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button onClick={handleStatusUpdate} className="mt-2 bg-black text-white px-4 py-2 rounded">
            Update Job Status
          </button>
        </div>
      )}
    </div>
  );
};

export default JobAssignmentUpdate;
