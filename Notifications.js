// src/components/Notifications.js
import React, { useState } from "react";
import { notifications } from "../mockData";

const Notifications = () => {
  const [userNotifications, setUserNotifications] = useState(notifications);

  const handleDeleteNotification = (id) => {
    setUserNotifications(userNotifications.filter((note) => note.id !== id));
    alert("Notification deleted!");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Notifications</h2>
      <ul className="mt-4">
        {userNotifications.length > 0 ? (
          userNotifications.map((note) => (
            <li key={note.id} className="mb-4 p-4 border rounded-md flex justify-between">
              <div>
                <h4 className="font-bold">{note.title}</h4>
                <p>{note.message}</p>
                <p className="text-sm text-gray-500">{note.createdDateTime}</p>
              </div>
              <button onClick={() => handleDeleteNotification(note.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </li>
          ))
        ) : (
          <p>No new notifications.</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
