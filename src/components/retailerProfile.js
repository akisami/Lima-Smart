import { useState } from 'react';
import { ethers } from 'ethers';
  // const ethers = require("ethers");
  

import MkulimaProfile from './abi';

function RetailerProfile() {

  const [location, setLocation] = useState('');
  const [mainCrops, setMainCrops] = useState('');
  const [contact, setContact] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  // const ethers = require("ethers");
  const contractAddress = "0x0331e1d7e7241CEFba8709E5cB8D52E422bFE002";


  async function createProfile() {
    try {
      // Connect to the Ethereum network using Ethers.js
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      // Prompt the user to connect their wallet
      await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(
        contractAddress,
        MkulimaProfile,
        signer
      );
  
      await contract.createRetailerProfile(location, mainCrops, contact);
      alert('Profile created successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the profile.');
    }
  }
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-blue-400 to-green-400 h-full py-10">
      <main className="flex flex-col items-center justify-center flex-1 px-8 sm:px-20">
        <h1 className="text-4xl font-bold mt-16 mb-8 text-green-800">Create Retailer Profile</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createProfile();
          }}
          className="flex flex-col items-center justify-center w-full"
        >
          <label htmlFor="location" className="mb-2 text-green-800">
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-2 border-green-500 rounded py-2 px-4 mb-4 w-full sm:w-80"
            required
          />
  
          <label htmlFor="mainCrops" className="mb-2 text-green-800">
            Crop:
          </label>
          <input
            type="text"
            id="mainCrops"
            value={mainCrops}
            onChange={(e) => setMainCrops(e.target.value)}
            className="border-2 border-green-500 rounded py-2 px-4 mb-4 w-full sm:w-80"
            required
          />
  
          <label htmlFor="contact" className="mb-2 text-green-800">
            Contact:
          </label>
          <input
            type="number"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border-2 border-green-500 rounded py-2 px-4 mb-4 w-full sm:w-80"
            required
          />
  
          {/* <label htmlFor="walletAddress" className="mb-2 text-green-800">
            Wallet Address:
          </label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="border-2 border-green-500 rounded py-2 px-4 mb-4 w-full sm:w-80"
            required
          /> */}
  
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8"
          >
            Create Profile
          </button>
        </form>
      </main>
    </div>
  );
  
}

export default RetailerProfile;
