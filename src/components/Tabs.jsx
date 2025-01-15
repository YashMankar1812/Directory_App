import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-4 flex space-x-4">
      <button
        className={`px-4 py-2 rounded-md ${
          activeTab === "addPerson"
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => setActiveTab("addPerson")}
      >
        Add New Person
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          activeTab === "retrieveInfo"
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => setActiveTab("retrieveInfo")}
      >
        Retrieve Information
      </button>
    </div>
  );
};

export default Tabs;
