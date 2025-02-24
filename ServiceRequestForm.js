// src/components/ServiceRequestForm.js
import React, { useState } from "react";
import { serviceRequests } from "../mockData";

const ServiceRequestForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: serviceRequests.length + 1,
      serviceType,
      description,
      requestStatus: "Pending",
    };
    serviceRequests.push(newRequest);
    alert("Service request submitted!");
    setServiceType("");
    setDescription("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Submit Service Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Service Type</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
