import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import ServiceRequestForm from "./components/ServiceRequestForm";
import JobAssignments from "./components/JobAssignments";
import AdminManagement from "./components/AdminManagement";
import Notifications from "./components/Notifications";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service-request" element={<ServiceRequestForm />} />
        <Route path="/job-assignments" element={<JobAssignments />} />
        <Route path="/admin-management" element={<AdminManagement />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
