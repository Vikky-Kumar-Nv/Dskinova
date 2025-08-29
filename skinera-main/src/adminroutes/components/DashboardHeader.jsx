import React from "react";

export default function DashboardHeader({ onLogout, onManage }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-domine font-medium text-[#b37556] mb-1 sm:mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Welcome to DSkinova Admin Panel
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onManage}
            className="w-full sm:w-auto border border-[#c98963] text-[#c98963] hover:bg-[#fff5ef] px-4 py-2 rounded-md transition-colors duration-300"
          >
            Manage Account
          </button>
          <button
            onClick={onLogout}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
