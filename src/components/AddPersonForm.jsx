import React, { useState } from "react";
import { FiSave } from "react-icons/fi";

const AddPersonForm = ({ onSave }) => {
  const [newPerson, setNewPerson] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    dob: false,
    aadhar: false,
    mobile: false
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "dob":
        if (!value) return "Date of birth is required";
        if (new Date(value) > new Date()) return "Date cannot be in the future";
        return "";
      case "aadhar":
        if (!/^\d{12}$/.test(value)) return "Must be 12 digits";
        return "";
      case "mobile":
        if (!/^\d{10}$/.test(value)) return "Must be 10 digits";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField("name", newPerson.name),
      dob: validateField("dob", newPerson.dob),
      aadhar: validateField("aadhar", newPerson.aadhar),
      mobile: validateField("mobile", newPerson.mobile)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, newPerson[name]) });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent non-numeric input for aadhar and mobile fields
    if ((name === "aadhar" || name === "mobile") && !/^\d*$/.test(value)) {
      return;
    }

    setNewPerson({ ...newPerson, [name]: value });
    
    // Validate field if it's been touched before
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      dob: true,
      aadhar: true,
      mobile: true
    });

    if (validateForm()) {
      onSave(newPerson);
      setNewPerson({ name: "", dob: "", aadhar: "", mobile: "" });
      setErrors({ name: "", dob: "", aadhar: "", mobile: "" });
      setTouched({ name: false, dob: false, aadhar: false, mobile: false });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Person</h2>
      
      <form onSubmit={handleSave}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={newPerson.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.dob ? "border-red-500" : "border-gray-300"
              }`}
              value={newPerson.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors.dob && (
              <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
            )}
          </div>

          <div>
            <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700 mb-1">
              Aadhar Number *
            </label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              placeholder="123412341234"
              maxLength="12"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.aadhar ? "border-red-500" : "border-gray-300"
              }`}
              value={newPerson.aadhar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.aadhar && (
              <p className="mt-1 text-sm text-red-600">{errors.aadhar}</p>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="9876543210"
              maxLength="10"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
              value={newPerson.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <FiSave className="mr-2" />
            Save Person
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;

// import React, { useState } from "react";
// import { Row, Col } from "reactstrap";

// const AddPersonForm = ({ onSave }) => {
//   const [newPerson, setNewPerson] = useState({
//     name: "",
//     dob: "",
//     aadhar: "",
//     mobile: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     dob: "",
//     aadhar: "",
//     mobile: "",
//   });

//   const validateForm = () => {
//     let isValid = true;
//     let tempErrors = { name: "", dob: "", aadhar: "", mobile: "" };

//     if (!newPerson.name.trim()) {
//       tempErrors.name = "Please enter a name";
//       isValid = false;
//     }

//     if (!newPerson.dob) {
//       tempErrors.dob = "Please select a date of birth";
//       isValid = false;
//     }

//     if (newPerson.aadhar.length !== 12 || isNaN(newPerson.aadhar)) {
//       tempErrors.aadhar = "Aadhar must be 12 digits";
//       isValid = false;
//     }

//     if (newPerson.mobile.length !== 10 || isNaN(newPerson.mobile)) {
//       tempErrors.mobile = "Mobile must be 10 digits";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       onSave(newPerson);
//       setNewPerson({ name: "", dob: "", aadhar: "", mobile: "" });
//       setErrors({ name: "", dob: "", aadhar: "", mobile: "" });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewPerson({ ...newPerson, [name]: value });
//   };

//   return (
//     <div className="p-6 rounded-md shadow-md bg-white">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Person</h2>
//       <Row className="gap-y-4">
//         <Col xs="12" md="6" lg="3">
//           <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
//             Name:
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter Name"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.name ? "border-red-500" : ""
//             }`}
//             value={newPerson.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
//         </Col>

//         <Col xs="12" md="6" lg="3">
//           <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
//             Date of Birth:
//           </label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.dob ? "border-red-500" : ""
//             }`}
//             value={newPerson.dob}
//             onChange={handleChange}
//           />
//           {errors.dob && <p className="text-red-500 text-xs italic mt-1">{errors.dob}</p>}
//         </Col>

//         <Col xs="12" md="6" lg="3">
//           <label htmlFor="aadhar" className="block text-gray-700 text-sm font-bold mb-2">
//             Aadhar Number:
//           </label>
//           <input
//             type="text"
//             id="aadhar"
//             name="aadhar"
//             placeholder="Enter 12-Digit Aadhar"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.aadhar ? "border-red-500" : ""
//             }`}
//             value={newPerson.aadhar}
//             onChange={handleChange}
//           />
//           {errors.aadhar && <p className="text-red-500 text-xs italic mt-1">{errors.aadhar}</p>}
//         </Col>

//         <Col xs="12" md="6" lg="3">
//           <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
//             Mobile Number:
//           </label>
//           <input
//             type="text"
//             id="mobile"
//             name="mobile"
//             placeholder="Enter 10-Digit Mobile"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//               errors.mobile ? "border-red-500" : ""
//             }`}
//             value={newPerson.mobile}
//             onChange={handleChange}
//           />
//           {errors.mobile && <p className="text-red-500 text-xs italic mt-1">{errors.mobile}</p>}
//         </Col>
//       </Row>

//       <div className="mt-6 flex justify-end">
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={handleSave}
//         >
//           Save Person
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddPersonForm;