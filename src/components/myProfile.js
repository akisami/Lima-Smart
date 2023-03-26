import { ethers } from 'ethers'

function Profile({ userAddress, contractAddress }) {
  const [name, setName] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const [location, setLocation] = useState('')
  const [companyInfo, setCompanyInfo] = useState('')

  useEffect(() => {
    async function fetchProfile() {
    //   const provider = new ethers.providers.JsonRpcProvider()
    // Connect to the Ethereum network using Ethers.js
      const provider = new ethers.providers.Web3Provider(window.ethereum);
  
      // Prompt the user to connect their wallet
      await window.ethereum.request({ method: 'eth_requestAccounts' });

       // Get the signer's address
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const contract = new ethers.Contract(contractAddress, abi, provider)

      const profile = await contract.getProfile(address)
      setName(profile.name)
      setContactInfo(profile.contactInfo)
      setLocation(profile.location)
      setCompanyInfo(profile.companyInfo)
    }

    fetchProfile()
  }, [userAddress, contractAddress])

  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg p-6">
      <div className="flex flex-col mb-4">
        <label className="text-gray-100 font-bold mb-2">
          Name
        </label>
        <p className="text-gray-200">{/* Display user's name */}</p>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-100 font-bold mb-2">
          Contact Information
        </label>
        <p className="text-gray-200">{/* Display user's contact information */}</p>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-100 font-bold mb-2">
          Location
        </label>
        <p className="text-gray-200">{/* Display user's location */}</p>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-100 font-bold mb-2">
          Company Information
        </label>
        <p className="text-gray-200">{/* Display user's company information */}</p>
      </div>
    </div>
  );
  
}

export default Profile
