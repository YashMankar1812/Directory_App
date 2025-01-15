import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabs from "./components/Tabs";
import AddPersonForm from "./components/AddPersonForm";
import PersonList from "./components/PersonList";
import RetrievePersonForm from "./components/RetrievePersonForm";

function App() {
  const [activeTab, setActiveTab] = useState("addPerson");
  const [personList, setPersonList] = useState(
    JSON.parse(localStorage.getItem("personList")) || []
  );
  const [foundPerson, setFoundPerson] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("personList", JSON.stringify(personList));
  }, [personList]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const validatePerson = (person) => {
    const aadharPattern = /^\d{12}$/;
    const mobilePattern = /^\d{10}$/;

    if (!aadharPattern.test(person.aadhar)) {
      setError("Aadhaar must be a 12-digit number.");
      return false;
    }

    if (!mobilePattern.test(person.mobile)) {
      setError("Mobile number must be a 10-digit number.");
      return false;
    }

    setError(""); // Clear error if no validation issues
    return true;
  };

  const handleSavePerson = (newPerson) => {
    if (validatePerson(newPerson)) {
      const age = calculateAge(newPerson.dob);
      const newEntry = { ...newPerson, age };
      setPersonList([...personList, newEntry]);
      toast.success("Person added successfully!");
    } else {
      toast.error("Please correct the errors.");
    }
  };

  const handleDeletePerson = (index) => {
    const updatedList = personList.filter((_, idx) => idx !== index);
    setPersonList(updatedList);
    toast.info("Person deleted.");
  };

  const handleRetrievePerson = (searchAadhar) => {
    const person = personList.find((person) => person.aadhar === searchAadhar);
    setFoundPerson(person || null);
    if (person) {
      toast.success("Person found!");
    } else {
      toast.error("Person not found.");
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "addPerson" && (
        <div className="mt-16 flex flex-col w-11/12 mx-auto">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <PersonList personList={personList} onDelete={handleDeletePerson} />
          <AddPersonForm onSave={handleSavePerson} />
        </div>
      )}

      {activeTab === "retrieveInfo" && (
        <RetrievePersonForm
          onRetrieve={handleRetrievePerson}
          foundPerson={foundPerson}
        />
      )}
    </div>
  );
}

export default App;
