import React from "react";

const PersonList = ({ personList, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full mb-4 border-collapse">
        <thead>
          <tr>
            <th className="border bg-slate-500 text-white p-2 text-center">
              Name
            </th>
            <th className="border bg-slate-500 text-white p-2 text-center">
              Date of Birth
            </th>
            <th className="border bg-slate-500 text-white p-2 text-center">
              Aadhar Number
            </th>
            <th className="border bg-slate-500 text-white p-2 text-center">
              Mobile Number
            </th>
            <th className="border bg-slate-500 text-white p-2 text-center">
              Age
            </th>
            <th className="border bg-slate-500 text-white p-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {personList.map((person, index) => (
            <tr key={`Person${index}`}>
              <td className="border p-2 text-center whitespace-nowrap">
                {person.name}
              </td>
              <td className="border p-2 text-center whitespace-nowrap">
                {person.dob}
              </td>
              <td className="border p-2 text-center whitespace-nowrap">
                {person.aadhar}
              </td>
              <td className="border p-2 text-center whitespace-nowrap">
                {person.mobile}
              </td>
              <td className="border p-2 text-center whitespace-nowrap">
                {person.age} Year
              </td>
              <td className="border p-2 text-center">
                <button
                  className="bg-red-500 hover:bg-red-600 rounded-md text-white px-2 py-1"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {personList.length === 0 && (
        <p className="text-center text-gray-500">No records found.</p>
      )}
    </div>
  );
};

export default PersonList;
