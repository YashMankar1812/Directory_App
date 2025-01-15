# Person Management App / Directory App

This **Person Management Application** is a React.js-based project that allows users to manage personal details such as Name, Date of Birth, Aadhar Number, and Mobile Number. The application offers two primary features:

1. **Add Person:** Allows users to input personal details and save them in local storage.
2. **Retrieve Information:** Allows users to search for personal details using an Aadhar Number.

This app leverages **local storage** for persistence and **Tailwind CSS** for responsive and modern UI styling. **React Toastify** is used for success and error notifications.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Validation Rules](#validation-rules)
- [Detailed Explanation](#detailed-explanation)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)

## Features

- **Tab-based Interface**: Navigate between "Add Person" and "Retrieve Information" tabs.
- **Form Validation**: Validates Aadhar (12 digits) and Mobile number (10 digits).
- **Dynamic Input**: Automatically calculates age based on DOB.
- **Local Storage**: Saves the list of people to the browser's local storage.
- **Person Lookup**: Allows users to retrieve and view person details using the Aadhar number.
- **Toast Notifications**: Alerts for actions like adding or deleting a person, or invalid input.
- **Responsive Design**: Uses Tailwind CSS for responsive, clean, and modern UI.

## Live Demo

You can try the live demo of this project [here](https://praveen-directory-app-reactjs.netlify.app/)

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Toastify**: A library for displaying toast notifications.
- **Local Storage**: For storing data persistently in the browser.

## Validation Rules

- **Aadhar Number**: Must be exactly 12 digits and only numbers are allowed.
- **Mobile Number**: Must be exactly 10 digits and only numbers are allowed.
- **All fields are required**: Name, Date of Birth, Aadhar Number, and Mobile Number must be filled in before saving.
