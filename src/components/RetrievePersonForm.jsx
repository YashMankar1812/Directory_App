import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const RetrievePersonForm = ({ onRetrieve, foundPerson }) => {
  const [searchAadhar, setSearchAadhar] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleRetrieve = (e) => {
    e.preventDefault();
    if (searchAadhar.trim() === "") return;
    onRetrieve(searchAadhar);
    setHasSearched(true);
  };

  const formatAadhar = (aadhar) => {
    return aadhar.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
  };

  const formatMobile = (mobile) => {
    return mobile.replace(/(\d{5})(\d{5})/, "$1 $2");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Retrieve Person Information</h2>
        
        <form onSubmit={handleRetrieve} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label htmlFor="aadhar-search" className="sr-only">Search by Aadhar Number</label>
              <input
                type="text"
                id="aadhar-search"
                placeholder="Enter 12-digit Aadhar Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchAadhar}
                onChange={(e) => {
                  // Allow only numbers and limit to 12 digits
                  const value = e.target.value.replace(/\D/g, '').slice(0, 12);
                  setSearchAadhar(value);
                }}
                maxLength="12"
                pattern="\d{12}"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <FiSearch className="mr-2" />
              Search
            </button>
          </div>
        </form>

        {hasSearched && !foundPerson && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  No person found with the provided Aadhar number. Please check and try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {foundPerson && (
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date of Birth
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aadhar Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobile Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {foundPerson.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(foundPerson.dob).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatAadhar(foundPerson.aadhar)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatMobile(foundPerson.mobile)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {foundPerson.age} {foundPerson.age === 1 ? "Year" : "Years"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetrievePersonForm;


// import React, { useState } from "react";

// const RetrievePersonForm = ({ onRetrieve, foundPerson }) => {
//   const [searchAadhar, setSearchAadhar] = useState("");

//   const handleRetrieve = () => {
//     onRetrieve(searchAadhar);
//   };

//   return (
//     <div className="flex justify-center items-center mt-24">
//       <div className="w-10/12 mx-auto text-center ">
//         <div className="mb-6 ">
//           {" "}
//           <input
//             type="text"
//             placeholder="Enter Aadhar Number"
//             className="border p-2 mb-4 rounded-l-md"
//             value={searchAadhar}
//             onChange={(e) => setSearchAadhar(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 rounded-r-md text-white px-4 py-2 mb-4"
//             onClick={handleRetrieve}
//           >
//             Retrieve
//           </button>
//         </div>
//         {foundPerson && (
//           <table className="min-w-full border-collapse">
//             <thead>
//               <tr>
//                 <th className="border p-2 bg-slate-500 text-white">Name</th>
//                 <th className="border p-2 bg-slate-500 text-white">
//                   Date of Birth
//                 </th>
//                 <th className="border p-2 bg-slate-500 text-white">
//                   Aadhar Number
//                 </th>
//                 <th className="border p-2 bg-slate-500 text-white">
//                   Mobile Number
//                 </th>
//                 <th className="border p-2 bg-slate-500 text-white">Age </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border p-2  text-center">{foundPerson.name}</td>
//                 <td className="border p-2  text-center">{foundPerson.dob}</td>
//                 <td className="border p-2  text-center">
//                   {foundPerson.aadhar}
//                 </td>
//                 <td className="border p-2  text-center">
//                   {foundPerson.mobile}
//                 </td>
//                 <td className="border p-2  text-center">
//                   {foundPerson.age} Year
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RetrievePersonForm;
