// src/components/ContractManagement.js
import React, { useState } from "react";

// Initial mock contract data
const initialContracts = [
  {
    id: 1,
    clientId: 1,
    clientName: "Jane Smith",
    contractStart: "2023-01-01",
    contractEnd: "2024-01-01",
    status: "Active",
    terms: "Annual contract for maintenance services. Includes 4 quarterly checks.",
    documents: ["contract_jane.pdf"],
  },
  {
    id: 2,
    clientId: 2,
    clientName: "John Doe",
    contractStart: "2022-06-01",
    contractEnd: "2023-06-01",
    status: "Expired",
    terms: "One-year emergency repair services.",
    documents: ["contract_john.pdf"],
  },
];

const ContractManagement = () => {
  const [contracts, setContracts] = useState(initialContracts);
  const [newContract, setNewContract] = useState({
    clientName: "",
    contractStart: "",
    contractEnd: "",
    status: "Active",
    terms: "",
    documents: [],
  });

  const handleAddContract = (e) => {
    e.preventDefault();
    const updatedContracts = [...contracts, { ...newContract, id: contracts.length + 1 }];
    setContracts(updatedContracts);
    setNewContract({
      clientName: "",
      contractStart: "",
      contractEnd: "",
      status: "Active",
      terms: "",
      documents: [],
    });
    alert("Contract added!");
  };

  const handleDeleteContract = (id) => {
    const updatedContracts = contracts.filter((contract) => contract.id !== id);
    setContracts(updatedContracts);
    alert("Contract deleted!");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Contract Management</h2>
      <form onSubmit={handleAddContract} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Client Name</label>
          <input
            type="text"
            value={newContract.clientName}
            onChange={(e) => setNewContract({ ...newContract, clientName: e.target.value })}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contract Start Date</label>
          <input
            type="date"
            value={newContract.contractStart}
            onChange={(e) => setNewContract({ ...newContract, contractStart: e.target.value })}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contract End Date</label>
          <input
            type="date"
            value={newContract.contractEnd}
            onChange={(e) => setNewContract({ ...newContract, contractEnd: e.target.value })}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contract Terms</label>
          <textarea
            value={newContract.terms}
            onChange={(e) => setNewContract({ ...newContract, terms: e.target.value })}
            required
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Add Contract</button>
      </form>

      <h3 className="text-xl">Existing Contracts</h3>
      <ul className="mt-2">
        {contracts.map((contract) => (
          <li key={contract.id} className="mb-4 p-4 border rounded-md flex justify-between">
            <div>
              <h4 className="font-bold">{contract.clientName}</h4>
              <p>Start Date: {contract.contractStart}</p>
              <p>End Date: {contract.contractEnd}</p>
              <p>Status: {contract.status}</p>
              <p>Terms: {contract.terms}</p>
              <p>Documents: {contract.documents.join(", ")}</p>
            </div>
            <button onClick={() => handleDeleteContract(contract.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractManagement;
