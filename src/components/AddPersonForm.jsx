import React, { useState } from "react";
import { Row, Col } from "reactstrap";

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
    <div className="p-4 flex justify-center">
      <div>
        <Row className=" md:gap-0">
          <Col xs="12" md="6" lg="3" className="mb-3">
            <input
              type="text"
              required
              placeholder="Name"
              className="border p-2 rounded-md w-full"
              value={newPerson.name}
              onChange={(e) =>
                setNewPerson({ ...newPerson, name: e.target.value })
              }
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </Col>

          <Col xs="12" md="6" lg="3" className="mb-3">
            <input
              type="date"
              required
              placeholder="DOB"
              className="border p-2 rounded-md w-full"
              value={newPerson.dob}
              onChange={(e) =>
                setNewPerson({ ...newPerson, dob: e.target.value })
              }
            />
            {errors.dob && <p className="text-red-500 mt-1">{errors.dob}</p>}
          </Col>

          <Col xs="12" md="6" lg="3" className="mb-3">
            <input
              type="text"
              required
              placeholder="Aadhar Number"
              className="border p-2 rounded-md w-full"
              value={newPerson.aadhar}
              onChange={(e) =>
                setNewPerson({ ...newPerson, aadhar: e.target.value })
              }
            />
            {errors.aadhar && (
              <p className="text-red-500 mt-1">{errors.aadhar}</p>
            )}
          </Col>

          <Col xs="12" md="6" lg="3" className="mb-3">
            <input
              type="text"
              required
              placeholder="Mobile Number"
              className="border p-2 rounded-md w-full"
              value={newPerson.mobile}
              onChange={(e) =>
                setNewPerson({ ...newPerson, mobile: e.target.value })
              }
            />
            {errors.mobile && (
              <p className="text-red-500 mt-1">{errors.mobile}</p>
            )}
          </Col>
        </Row>

        <Row className="justify-center mt-2">
          <Col xs="12" md="4" className="text-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-lg text-white px-6 py-2 rounded-md w-full"
              onClick={handleSave}
            >
              Save
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddPersonForm;
