import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk'
import { useState, useMemo} from 'react';
import { ethers } from 'ethers';
  // const ethers = require("ethers");


import { 
  SocialWallet, 
  GoogleSocialWallet, 
  FacebookSocialWallet,
  GithubSocialWallet,
  DiscordSocialWallet,
  TwitchSocialWallet,
  TwitterSocialWallet
} from '@zerodevapp/social-wallet';
  

import MkulimaProfile from './abi';
import Profile from './myProfile';

function FarmerProfile() {

  const [location, setLocation] = useState('');
  const [mainCrops, setMainCrops] = useState('');
  const [contact, setContact] = useState('');
  const [name, setName] = useState('');
  // const [walletAddress, setWalletAddress] = useState('');
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  
    const socialWallet = useMemo(() => {
      return new SocialWallet()
    }, [])

      //creates a wallet for the farmer on register
    const createWallet = async () => {
      const contractAddress = "0xA31d890a49D03e745215B84C6Ba5518c00FAfD0F";

      setLoading(true)
      const signer = await getZeroDevSigner({
        projectId: 'b1b9f896-a393-4d2a-9b92-4273da85808a',
        owner: await getSocialWalletOwner('b1b9f896-a393-4d2a-9b92-4273da85808a', socialWallet)
      })
      setAddress(await signer.getAddress())
      setLoading(false)
      console.log(signer)

      await createProfile(signer, MkulimaProfile, contractAddress);
      console.log("profile created")
    }

    //logs the farmer out
    const disconnect = async () => {
      await socialWallet.disconnect()
      setAddress('')
    }

    const connected = !!address

  // const contractAddress = "0x2551a4B7DBD99d6365Efe5831449C9dd768888Ee";


  async function createProfile( signer, MkulimaProfile, contractAddress) {
    try {
      //runs the create wallet function first
      // const wallet = await createWallet()
      // const signer = await wallet.originalSigner


      // console.log(signer)

      // Connect to the Ethereum network using Ethers.js
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      // Prompt the user to connect their wallet
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      // const signer = provider.getSigner();
  
      const contract = new ethers.Contract(
        contractAddress,
        MkulimaProfile,
        signer
      );
  
      await contract.createFarmerProfile(location, mainCrops, contact, name);
      alert('Profile created successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the profile.');
    }
  }
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-blue-400 to-green-400">
      <main className="flex flex-col items-center justify-center flex-1 px-8 sm:px-20">
        <h1 className="text-4xl font-bold mt-16 mb-8 text-green-800">Create Farmer Profile</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createWallet();
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
  
          <label htmlFor="name" className="mb-2 text-green-800">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-green-500 rounded py-2 px-4 mb-4 w-full sm:w-80"
            required
          />

          <label htmlFor="contact" className="mb-2 text-green-800">
            Contact:
          </label>
          <input
            type="text"
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

export default FarmerProfile;
