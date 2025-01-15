import React from "react";

const PersonList = ({ personList, onDelete }) => {
  return (
    <table className="min-w-full mb-4 border-collapse">
      <thead>
        <tr>
          <th className="border bg-slate-500 text-white p-2">Name</th>
          <th className="border bg-slate-500 text-white p-2">Date of Birth</th>
          <th className="border bg-slate-500 text-white p-2">Aadhar Number</th>
          <th className="border bg-slate-500 text-white p-2">Mobile Number</th>
          <th className="border bg-slate-500 text-white p-2">Age</th>
          <th className="border bg-slate-500 text-white p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {personList.map((person, index) => (
          <tr key={"Person" + index}>
            <td className="border p-2 text-center">{person.name}</td>
            <td className="border p-2 text-center">{person.dob}</td>
            <td className="border p-2 text-center">{person.aadhar}</td>
            <td className="border p-2 text-center">{person.mobile}</td>
            <td className="border p-2 text-center">{person.age} Year</td>
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
  );
};

export default PersonList;
