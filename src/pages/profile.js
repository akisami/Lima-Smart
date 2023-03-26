import Head from 'next/head'
import RetailerProfile from '@/components/retailerProfile'
import FarmerProfile from '@/components/farmerProfile'
import Header from '@/components/header';

import { useState } from "react";
// import FarmerProfile from "./FarmerProfile";
// import RetailerProfile from "./RetailerProfile";

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
     <Header />

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!selectedOption && (
        <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Select Registration Type</h2>
          <button
            onClick={() => handleOptionSelect("farmer")}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mb-2"
          >
            Register as a Farmer
          </button>
          <button
            onClick={() => handleOptionSelect("retailer")}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Register as a Retailer
          </button>
        </div>
      )}
      {selectedOption === "farmer" && <FarmerProfile />}
      {selectedOption === "retailer" && <RetailerProfile />}
    </div>
    </>
  );
};

export default Registration;
