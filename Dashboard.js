import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { serviceRequests, notifications, jobAssignments, users } from "../mockData"; // Import mock data

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedInUser) {
      navigate("/"); // Redirect to login if no user is logged in
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  const clientRequests = serviceRequests.filter((request) => request.clientId === user.id);
  const techJobs = jobAssignments.filter((job) => job.technicianId === user.id);
  const userNotifications = notifications.filter((note) => note.userId === user.id);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        
        {/* Display the user's name */}
        <h3 className="text-xl mt-2">Welcome, {user.firstName} {user.lastName}!</h3>

        {user.userType === "Client" && (
          <>
            <h3 className="text-xl mt-4">Your Service Requests</h3>
            <ul className="mt-2">
              {clientRequests.length > 0 ? (
                clientRequests.map((request) => (
                  <li key={request.id} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-bold">{request.serviceType}</h4>
                    <p>Status: {request.requestStatus}</p>
                    <p>Description: {request.description}</p>
                  </li>
                ))
              ) : (
                <p>You have no service requests.</p>
              )}
            </ul>
            <h3 className="text-xl mt-4">Your Notifications</h3>
            <ul className="mt-2">
              {userNotifications.length > 0 ? (
                userNotifications.map((note) => (
                  <li key={note.id} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-bold">{note.title}</h4>
                    <p>{note.message}</p>
                    <p className="text-sm text-gray-500">{note.createdDateTime}</p>
                  </li>
                ))
              ) : (
                <p>No new notifications.</p>
              )}
            </ul>
          </>
        )}

        {user.userType === "Technician" && (
          <>
            <h3 className="text-xl mt-4">Assigned Jobs</h3>
            <ul className="mt-2">
              {techJobs.length > 0 ? (
                techJobs.map((job) => (
                  <li key={job.assignmentId} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-bold">Job ID: {job.assignmentId}</h4>
                    <p>Status: {job.status}</p>
                  </li>
                ))
              ) : (
                <p>You have no assigned jobs.</p>
              )}
            </ul>
            <h3 className="text-xl mt-4">Your Notifications</h3>
            <ul className="mt-2">
              {userNotifications.length > 0 ? (
                userNotifications.map((note) => (
                  <li key={note.id} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-bold">{note.title}</h4>
                    <p>{note.message}</p>
                    <p className="text-sm text-gray-500">{note.createdDateTime}</p>
                  </li>
                ))
              ) : (
                <p>No new notifications.</p>
              )}
            </ul>
          </>
        )}

        {user.userType === "Administrator" && (
          <>
            <h3 className="text-xl mt-4">Admin Dashboard</h3>
            <p>Manage users and service types from here.</p>
            <h4 className="mt-4">User List:</h4>
            <ul className="mt-2">
              {users.map((adminUser) => (
                <li key={adminUser.id} className="mb-4 p-4 border rounded-md">
                  <h4 className="font-bold">{adminUser.firstName} {adminUser.lastName}</h4>
                  <p>Email: {adminUser.email}</p>
                  <p>Role: {adminUser.userType}</p>
                </li>
              ))}
            </ul>
            <h3 className="text-xl mt-4">Your Notifications</h3>
            <ul className="mt-2">
              {userNotifications.length > 0 ? (
                userNotifications.map((note) => (
                  <li key={note.id} className="mb-4 p-4 border rounded-md">
                    <h4 className="font-bold">{note.title}</h4>
                    <p>{note.message}</p>
                    <p className="text-sm text-gray-500">{note.createdDateTime}</p>
                  </li>
                ))
              ) : (
                <p>No new notifications.</p>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
