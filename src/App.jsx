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
<div className="min-h-screen bg-gradient-to-r from-indigo-200 to-teal-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Aadhaar Information Management System
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Manage citizen records with secure Aadhaar verification
        </p>
        
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "addPerson" && (
          <div className="mt-8">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
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
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Tabs from "./components/Tabs";
// import AddPersonForm from "./components/AddPersonForm";
// import PersonList from "./components/PersonList";
// import RetrievePersonForm from "./components/RetrievePersonForm";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [activeTab, setActiveTab] = useState("addPerson");
//   const [personList, setPersonList] = useState(
//     JSON.parse(localStorage.getItem("personList")) || []
//   );
//   const [foundPerson, setFoundPerson] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     localStorage.setItem("personList", JSON.stringify(personList));
//   }, [personList]);

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (
//       monthDiff < 0 ||
//       (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }
//     return age;
//   };

//   const validatePerson = (person) => {
//     const aadharPattern = /^\d{12}$/;
//     const mobilePattern = /^\d{10}$/;

//     if (!aadharPattern.test(person.aadhar)) {
//       setError("Aadhaar must be a 12-digit number.");
//       return false;
//     }

//     if (!mobilePattern.test(person.mobile)) {
//       setError("Mobile number must be a 10-digit number.");
//       return false;
//     }

//     setError(""); // Clear error if no validation issues
//     return true;
//   };

//   const handleSavePerson = (newPerson) => {
//     if (validatePerson(newPerson)) {
//       const age = calculateAge(newPerson.dob);
//       const newEntry = { ...newPerson, age };
//       setPersonList([...personList, newEntry]);
//       toast.success("Person added successfully!");
//     } else {
//       toast.error("Please correct the errors.");
//     }
//   };

//   const handleDeletePerson = (index) => {
//     const updatedList = personList.filter((_, idx) => idx !== index);
//     setPersonList(updatedList);
//     toast.info("Person deleted.");
//   };

//   const handleRetrievePerson = (searchAadhar) => {
//     const person = personList.find((person) => person.aadhar === searchAadhar);
//     setFoundPerson(person || null);
//     if (person) {
//       toast.success("Person found!");
//     } else {
//       toast.error("Person not found.");
//     }
//   };

//   return (
//     <div className="p-6 bg-purple-100">
//       <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center ">Person Management</h1>
//       <ToastContainer />
//       <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

//       {activeTab === "addPerson" && (
//         <div className="mt-16 flex flex-col w-11/12 mx-auto">
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <PersonList personList={personList} onDelete={handleDeletePerson} />
//           <AddPersonForm onSave={handleSavePerson} />
//         </div>
//       )}

//       {activeTab === "retrieveInfo" && (
//         <RetrievePersonForm
//           onRetrieve={handleRetrievePerson}
//           foundPerson={foundPerson}
//         />
//       )}
//     </div>
//   );
// }

// export default App;
