// src/mockData.js
export const users = [
    {
      id: 1,
      username: "client1",
      password: "password1",
      email: "client1@company.com",
      firstName: "Jane",
      lastName: "Smith",
      userType: "Client",
    },
    {
      id: 2,
      username: "tech1",
      password: "password2",
      email: "tech1@apexcare.com",
      firstName: "John",
      lastName: "Doe",
      userType: "Technician",
    },
    {
      id: 3,
      username: "admin1",
      password: "password3",
      email: "admin@apexcare.com",
      firstName: "Admin",
      lastName: "User",
      userType: "Administrator",
    },
  ];
  
  export const serviceRequests = [
    {
      id: 1,
      clientId: 1,
      serviceType: "Preventive Maintenance",
      description: "Need maintenance for HVAC system",
      requestStatus: "Pending",
      requestedDateTime: "2024-10-01T09:00:00Z",
    },
  ];
  
  export const jobAssignments = [
    {
      assignmentId: 1,
      requestId: 1,
      technicianId: 2,
      status: "Assigned",
      assignedDateTime: "2024-10-02T09:00:00Z",
    },
  ];
  
  export const notifications = [
    {
      id: 1,
      userId: 1,
      title: "Service Request Update",
      message: "Your service request has been assigned.",
      createdDateTime: "2024-10-02T10:00:00Z",
    },
  ];
  