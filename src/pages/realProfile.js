import { ethers } from 'ethers'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react';
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk';


import { 
  SocialWallet
} from '@zerodevapp/social-wallet';

import MkulimaProfile from './abi';


function Profile() {
  const [name, setName] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [location, setLocation] = useState('')
  const [crop, setCrop] = useState('')
  const [userAddress, setAddress] = useState('');
  const contractAddress = "0xA31d890a49D03e745215B84C6Ba5518c00FAfD0F";

  async function fetchProfile() {
    //   const provider = new ethers.providers.JsonRpcProvider()
    // Connect to the Ethereum network using Ethers.js
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      // Prompt the user to connect their wallet
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
 
      const socialWallet = useMemo(() => {
        return new SocialWallet()
      }, []);

      const signer = await getZeroDevSigner({
        projectId: 'b1b9f896-a393-4d2a-9b92-4273da85808a',
        owner: await getSocialWalletOwner('b1b9f896-a393-4d2a-9b92-4273da85808a', socialWallet)
      })
       // Get the signer's address
    // const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address);
    console.log(address);
    const contract = new ethers.Contract(contractAddress, MkulimaProfile, signer)

      const profile = await contract.getFarmerProfile(address)
      setName(profile[0])
      setLocation(profile[1])
      setCrop(profile[2])
      setContactInfo(profile[3])


      console.log(profile);
    }
  // useEffect(() => {
    
  //   fetchProfile()
  // }, [])
  fetchProfile();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/3 flex flex-col items-start">
        <h1 className="text-3xl font-bold mb-4 text-center">My Profile</h1>
        <img className="mx-auto w-40 h-40 rounded-full mb-4" src="https://cdn.discordapp.com/ephemeral-attachments/989268410171006976/1082736999879950366/grid_0.webp" alt="Profile Picture" />
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 font-bold mb-2">
            Name
          </label>
          <p className="text-gray-900">{name}</p>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 font-bold mb-2">
            Contact Information
          </label>
          <p className="text-gray-900">{contactInfo}</p>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 font-bold mb-2">
            Location
          </label>
          <p className="text-gray-900">{location}</p>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-gray-700 font-bold mb-2">
            Crop
          </label>
          <p className="text-gray-900">{crop}</p>
        </div>
      </div>
    </div>
  );
  
  
  
  
}

export default Profile
