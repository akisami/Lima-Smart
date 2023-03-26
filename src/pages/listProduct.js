import { useState, useMemo } from 'react';
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk';
import { 
  SocialWallet
} from '@zerodevapp/social-wallet';
import { ethers } from 'ethers';
// import { UploadFileToIPFS } from '../pinata';
import { UploadFileToIPFS } from '@/pinata';

import MkulimaMarketplace from './abi';

export default function ProductForm() {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  async function listProduct() {
    // const socialWallet = useMemo(() => {
    //     return new SocialWallet()
    //   }, []);

      const socialWallet = new SocialWallet();
      const contractAddress = "0xA31d890a49D03e745215B84C6Ba5518c00FAfD0F";

      const signer = await getZeroDevSigner({
        projectId: 'b1b9f896-a393-4d2a-9b92-4273da85808a',
        owner: await getSocialWalletOwner('b1b9f896-a393-4d2a-9b92-4273da85808a', socialWallet)
      })
       // Get the signer's address
    const address = await signer.getAddress();
    const contract = new ethers.Contract(contractAddress, MkulimaMarketplace, signer)

     await contract.addProduct(product, description, price, quantity, imageUrl)
     console.log('success');
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    listProduct();
    console.log({ product, description, price, quantity, imageUrl });
  };

  const handleImageChange = (event) => {
    const fileList = event.target.files;
    const fileArray = Array.from(fileList);
    setImages(fileArray);
  };

    //This function uploads the NFT image to IPFS
    async function OnChangeFile(e) {
      var file = e.target.files[0];
      //check for file extension
      try {
          //upload the file to IPFS
          const response = await UploadFileToIPFS(file);
          if(response.success === true) {
              console.log("Uploaded image to Pinata: ", response.pinataURL)
              setImageUrl(response.pinataURL);
              console.log(response.pinataURL);
          }
      }
      catch(e) {
          console.log("Error during file upload", e);
      }
  }

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">List your products</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="product">
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product"
            type="text"
            placeholder="Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Product Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Product Price (in USD)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
            Product Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            type="number"
            placeholder="Product Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="images">
            Product Images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="images"
            type="file"
            multiple
            accept="image/*"
            onChange={OnChangeFile}
            required
            />
            </div>
            <div className="flex items-center justify-center">
            <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     type="submit"
                   >
            Submit
            </button>
            </div>
            </form>
            </div>
            );
            }


