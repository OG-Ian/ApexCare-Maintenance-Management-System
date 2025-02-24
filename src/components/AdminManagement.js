// src/components/AdminManagement.js
import React from "react";
import UserManagement from "./UserManagement"; // Ensure this path is correct
import ServiceTypeManagement from "./ServiceTypeManagement"; // Ensure this path is correct

const AdminManagement = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Admin Management</h2>
      <UserManagement />
      <ServiceTypeManagement />
    </div>
  );
};

export default AdminManagement;
