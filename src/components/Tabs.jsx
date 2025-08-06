import React from "react";
import { FiUserPlus, FiSearch } from "react-icons/fi";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b border-gray-200">
      <button
        className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
          activeTab === "addPerson"
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }`}
        onClick={() => setActiveTab("addPerson")}
      >
        <FiUserPlus className="mr-2" />
        Add New Person
      </button>
      <button
        className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ml-8 ${
          activeTab === "retrieveInfo"
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        }`}
        onClick={() => setActiveTab("retrieveInfo")}
      >
        <FiSearch className="mr-2" />
        Retrieve Information
      </button>
    </div>
  );
};

export default Tabs;