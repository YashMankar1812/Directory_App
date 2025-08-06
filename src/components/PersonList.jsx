import React from "react";
import { FiTrash2 } from "react-icons/fi";

const PersonList = ({ personList, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date of Birth
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aadhar Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {personList.map((person, index) => (
              <tr key={`person-${index}`} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {person.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(person.dob).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.aadhar.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.mobile.replace(/(\d{5})(\d{5})/, "$1 $2")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.age} {person.age === 1 ? "Year" : "Years"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:text-red-900 inline-flex items-center p-1.5 border border-transparent rounded-full hover:border-red-200 hover:bg-red-50 transition-all"
                    aria-label="Delete"
                    title="Delete record"
                  >
                    <FiTrash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {personList.length === 0 && (
        <div className="bg-white p-8 text-center">
          <p className="text-gray-500 text-sm">No records found. Add a person to get started.</p>
        </div>
      )}
    </div>
  );
};

export default PersonList;

// import React from "react";

// const PersonList = ({ personList, onDelete }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full mb-4 border-collapse">
//         <thead>
//           <tr>
//             <th className="border bg-slate-500 text-white p-2 text-center">
//               Name
//             </th>
//             <th className="border bg-slate-500 text-white p-2 text-center">
//               Date of Birth
//             </th>
//             <th className="border bg-slate-500 text-white p-2 text-center">
//               Aadhar Number
//             </th>
//             <th className="border bg-slate-500 text-white p-2 text-center">
//               Mobile Number
//             </th>
//             <th className="border bg-slate-500 text-white p-2 text-center">
//               Age
//             </th>
//             <th className="border bg-slate-500 text-white p-2 text-center">
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {personList.map((person, index) => (
//             <tr key={`Person${index}`}>
//               <td className="border p-2 text-center whitespace-nowrap">
//                 {person.name}
//               </td>
//               <td className="border p-2 text-center whitespace-nowrap">
//                 {person.dob}
//               </td>
//               <td className="border p-2 text-center whitespace-nowrap">
//                 {person.aadhar}
//               </td>
//               <td className="border p-2 text-center whitespace-nowrap">
//                 {person.mobile}
//               </td>
//               <td className="border p-2 text-center whitespace-nowrap">
//                 {person.age} Year
//               </td>
//               <td className="border p-2 text-center">
//                 <button
//                   className="bg-red-500 hover:bg-red-600 rounded-md text-white px-2 py-1"
//                   onClick={() => onDelete(index)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {personList.length === 0 && (
//         <p className="text-center text-gray-500">No records found.</p>
//       )}
//     </div>
//   );
// };

// export default PersonList;
