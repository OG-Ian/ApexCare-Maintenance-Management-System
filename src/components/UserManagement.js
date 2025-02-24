// src/components/UserManagement.js
import React from "react";
import { users } from "../mockData";

const UserManagement = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">User Management</h2>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="mb-4 p-4 border rounded-md">
            <h3 className="font-bold">{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.userType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
