// src/components/JobAssignments.js
import React from "react";
import JobAssignmentUpdate from "./JobAssignmentUpdate"; // Ensure this path is correct
import { jobAssignments } from "../mockData";

const JobAssignments = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Job Assignments</h2>
      <ul className="mt-4">
        {jobAssignments.map((job) => (
          <li key={job.assignmentId} className="mb-4 p-4 border rounded-md">
            <h3 className="font-bold">Job ID: {job.assignmentId}</h3>
            <p>Status: {job.status}</p>
          </li>
        ))}
      </ul>
      <JobAssignmentUpdate />
    </div>
  );
};

export default JobAssignments;
