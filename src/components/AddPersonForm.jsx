import React, { useState } from "react";

const AddPersonForm = ({ onSave }) => {
  const [newPerson, setNewPerson] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    aadhar: "",
    mobile: "",
  });

  const validateForm = () => {
    let isValid = true;
    let tempErrors = { name: "", dob: "", aadhar: "", mobile: "" };

    if (!newPerson.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!newPerson.dob) {
      tempErrors.dob = "Date of birth is required";
      isValid = false;
    }

    if (newPerson.aadhar.length !== 12 || isNaN(newPerson.aadhar)) {
      tempErrors.aadhar = "Aadhar Number must be a 12-digit number";
      isValid = false;
    }

    if (newPerson.mobile.length !== 10 || isNaN(newPerson.mobile)) {
      tempErrors.mobile = "Mobile Number must be a 10-digit number";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(newPerson);
      setNewPerson({ name: "", dob: "", aadhar: "", mobile: "" }); // Clear inputs on successful save
      setErrors({ name: "", dob: "", aadhar: "", mobile: "" }); // Clear error messages
    }
  };

  return (
    <>
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-full ">
          <input
            type="text"
            required
            placeholder="Name"
            className="border p-2 mr-2 rounded-md w-full"
            value={newPerson.name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col w-full ">
          <input
            type="date"
            required
            placeholder="DOB"
            className="border p-2 mr-2 rounded-md w-full"
            value={newPerson.dob}
            onChange={(e) =>
              setNewPerson({ ...newPerson, dob: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col w-full ">
          <input
            type="text"
            required
            placeholder="Aadhar Number"
            className="border p-2 mr-2 rounded-md w-full"
            value={newPerson.aadhar}
            onChange={(e) =>
              setNewPerson({ ...newPerson, aadhar: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col w-full ">
          <input
            type="text"
            required
            placeholder="Mobile Number"
            className="border p-2 mr-2 rounded-md w-full"
            value={newPerson.mobile}
            onChange={(e) =>
              setNewPerson({ ...newPerson, mobile: e.target.value })
            }
          />
        </div>

        <button
          className="bg-green-500 hover:bg-green-600 text-lg text-white px-4 py-1 rounded-md w-full"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="text-center">
        {(errors.name && <p className="text-red-500 mb-2">{errors.name}</p>) ||
          (errors.dob && <p className="text-red-500 mb-2">{errors.dob}</p>) ||
          (errors.aadhar && (
            <p className="text-red-500 mb-2">{errors.aadhar}</p>
          )) ||
          (errors.mobile && (
            <p className="text-red-500 mb-2">{errors.mobile}</p>
          ))}
      </div>
    </>
  );
};

export default AddPersonForm;
