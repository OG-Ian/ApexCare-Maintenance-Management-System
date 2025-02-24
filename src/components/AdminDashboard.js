// src/components/AdminDashboard.js
import React from "react";
import ContractManagement from "./ContractManagement"; // Import the contract management component

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <p>Manage contracts, users, and service types from here.</p>
      
      {/* Contract Management Section */}
      <ContractManagement />

      {/* Other admin functionalities can be added here */}
    </div>
  );
};

export default AdminDashboard;
