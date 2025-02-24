// src/components/ServiceTypeManagement.js
import React, { useState } from "react";

const initialServiceTypes = [
  { id: 1, name: "Preventive Maintenance", description: "Regular maintenance to prevent issues." },
  { id: 2, name: "Emergency Repair", description: "Urgent repair service for critical issues." },
  { id: 3, name: "System Upgrade", description: "Upgrade existing systems to improve performance." },
];

const ServiceTypeManagement = () => {
  const [serviceTypes, setServiceTypes] = useState(initialServiceTypes);
  const [newServiceType, setNewServiceType] = useState({ name: "", description: "" });
  const [editingServiceType, setEditingServiceType] = useState(null);

  const handleAddServiceType = (e) => {
    e.preventDefault();
    const updatedServiceTypes = [...serviceTypes, { ...newServiceType, id: serviceTypes.length + 1 }];
    setServiceTypes(updatedServiceTypes);
    setNewServiceType({ name: "", description: "" });
    alert("Service type added!");
  };

  const handleEditServiceType = (e) => {
    e.preventDefault();
    const updatedServiceTypes = serviceTypes.map((type) =>
      type.id === editingServiceType.id ? editingServiceType : type
    );
    setServiceTypes(updatedServiceTypes);
    setEditingServiceType(null);
    alert("Service type updated!");
  };

  const handleDeleteServiceType = (id) => {
    const updatedServiceTypes = serviceTypes.filter((type) => type.id !== id);
    setServiceTypes(updatedServiceTypes);
    alert("Service type deleted!");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Service Type Management</h2>
      
      <form onSubmit={editingServiceType ? handleEditServiceType : handleAddServiceType} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Service Type Name</label>
          <input
            type="text"
            value={editingServiceType ? editingServiceType.name : newServiceType.name}
            onChange={(e) => (editingServiceType ? setEditingServiceType({ ...editingServiceType, name: e.target.value }) : setNewServiceType({ ...newServiceType, name: e.target.value }))}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={editingServiceType ? editingServiceType.description : newServiceType.description}
            onChange={(e) => (editingServiceType ? setEditingServiceType({ ...editingServiceType, description: e.target.value }) : setNewServiceType({ ...newServiceType, description: e.target.value }))}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
          {editingServiceType ? "Update Service Type" : "Add Service Type"}
        </button>
      </form>

      <h3 className="text-xl">Existing Service Types</h3>
      <ul className="mt-2">
        {serviceTypes.map((type) => (
          <li key={type.id} className="mb-4 p-4 border rounded-md flex justify-between">
            <div>
              <h4 className="font-bold">{type.name}</h4>
              <p>{type.description}</p>
            </div>
            <div>
              <button onClick={() => setEditingServiceType(type)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button onClick={() => handleDeleteServiceType(type.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceTypeManagement;
