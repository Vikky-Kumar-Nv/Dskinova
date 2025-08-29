import React from "react";

export default function DashboardHeader({ onLogout }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-domine font-medium text-[#b37556] mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Welcome to DSkinova Admin Panel</p>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
