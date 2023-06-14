import React, { useState } from "react";
import axios from 'axios';

function UserAccountSettingPage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  useEffect(() => {
    axios.get('/api/user')
      .then((response) => {
        const userData = response.data;
        setName(userData.name);
        setGender(userData.gender);
        setEmail(userData.email);
        setBirthdate(userData.birthdate);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  
  const handleSubmit = () => {
    const updatedData = {
      name,
      gender,
      email,
      birthdate
    };

    axios.patch('/api/user', updatedData)
      .then((response) => {
        console.log(response.data); // Handle successful response
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };

  return (
    // <div className="container mx-auto p-4">
    //   <div className="text-center mb-8">
    //     <h1 className="text-2xl font-bold">Account Settings</h1>
    //   </div>
    //   <div className="text-center mb-8">
    //     <h1 className="text-2xl font-bold">Personal Information</h1>
    //   </div>
    //   <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
    //     <div className="w-full sm:w-1/2">
    //       <label className="block mb-2 font-bold" htmlFor="name">
    //         Name:
    //       </label>
    //       <input
    //         className="w-full px-4 py-2 border rounded"
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={handleNameChange}
    //       />
    //     </div>
    //     <div className="w-full sm:w-1/2">
    //       <label className="block mb-2 font-bold" htmlFor="gender">
    //         Gender:
    //       </label>
    //       <select
    //         className="w-full px-4 py-2 border rounded"
    //         id="gender"
    //         value={gender}
    //         onChange={handleGenderChange}
    //       >
    //         <option value="">Select</option>
    //         <option value="male">Male</option>
    //         <option value="female">Female</option>
    //       </select>
    //     </div>
    //   </div>
    //   <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4">
    //     <div className="w-full sm:w-1/2">
    //       <label className="block mb-2 font-bold" htmlFor="email">
    //         Email:
    //       </label>
    //       <input
    //         className="w-full px-4 py-2 border rounded"
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={handleEmailChange}
    //       />
    //     </div>
    //     <div className="w-full sm:w-1/2">
    //       <label className="block mb-2 font-bold" htmlFor="birthdate">
    //         Birthdate:
    //       </label>
    //       <input
    //         className="w-full px-4 py-2 border rounded"
    //         type="date"
    //         id="birthdate"
    //         value={birthdate}
    //         onChange={handleBirthdateChange}
    //       />
    //     </div>
    //   </div>
    //   <div className="text-center mt-8">
    //     <button className="px-4 py-2 text-white bg-blue-500 rounded">Save</button>
    //   </div>
    // </div>

    <div className="container mx-auto p-4">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold">Account Settings</h1>
    </div>
    <div className="text-left mb-8">
      <h1 className="text-2xl font-bold">Personal Information</h1>
    </div>
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="w-full sm:w-1/2">
        <label className="block mb-2 font-bold" htmlFor="name">Name:</label>
        <input
          className="w-full px-4 py-2 border rounded"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <label className="block mb-2 font-bold" htmlFor="gender">Gender:</label>
        <select
          className="w-full px-4 py-2 border rounded"
          id="gender"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4">
      <div className="w-full sm:w-1/2">
        <label className="block mb-2 font-bold" htmlFor="email">Email:</label>
        <input
          className="w-full px-4 py-2 border rounded"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <label className="block mb-2 font-bold" htmlFor="birthdate">Birthdate:</label>
        <input
          className="w-full px-4 py-2 border rounded"
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={handleBirthdateChange}
        />
      </div>
    </div>
    <div className="text-center mt-8">
      <button
        className="px-4 py-2 text-black bg-blue-500 rounded"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  </div>
  );
}

export default UserAccountSettingPage;
