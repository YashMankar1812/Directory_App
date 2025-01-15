import React, { useState } from "react";

const RetrievePersonForm = ({ onRetrieve, foundPerson }) => {
  const [searchAadhar, setSearchAadhar] = useState("");

  const handleRetrieve = () => {
    onRetrieve(searchAadhar);
  };

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-10/12 mx-auto text-center ">
        <div className="mb-6 ">
          {" "}
          <input
            type="text"
            placeholder="Enter Aadhar Number"
            className="border p-2 mb-4 rounded-l-md"
            value={searchAadhar}
            onChange={(e) => setSearchAadhar(e.target.value)}
          />
          <button
            className="bg-blue-500 rounded-r-md text-white px-4 py-2 mb-4"
            onClick={handleRetrieve}
          >
            Retrieve
          </button>
        </div>
        {foundPerson && (
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-slate-500 text-white">Name</th>
                <th className="border p-2 bg-slate-500 text-white">
                  Date of Birth
                </th>
                <th className="border p-2 bg-slate-500 text-white">
                  Aadhar Number
                </th>
                <th className="border p-2 bg-slate-500 text-white">
                  Mobile Number
                </th>
                <th className="border p-2 bg-slate-500 text-white">Age </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2  text-center">{foundPerson.name}</td>
                <td className="border p-2  text-center">{foundPerson.dob}</td>
                <td className="border p-2  text-center">
                  {foundPerson.aadhar}
                </td>
                <td className="border p-2  text-center">
                  {foundPerson.mobile}
                </td>
                <td className="border p-2  text-center">
                  {foundPerson.age} Year
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RetrievePersonForm;
