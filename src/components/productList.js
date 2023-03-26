// import React from 'react';
// import Product from './product';
// import Image from 'next/image'


// const MyPage = () => {
  // const [products, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   // Fetch the product data from the blockchain here and set it in state
  //   const fetchedProducts = [
  //     {
  //       id: 1,
  //       name: 'Product 1',
  //       description: 'This is a description of product 1.',
  //       price: 9.99,
  //       quantity: 10,
  //       images: [
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png',
  //         // 'https://via.placeholder.com/500x301',
  //         // 'https://via.placeholder.com/500x302',
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: 'Product 2',
  //       description: 'This is a description of product 1.',
  //       price: 9.99,
  //       quantity: 10,
  //       images: [
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png',
  //         // 'https://via.placeholder.com/500x301',
  //         // 'https://via.placeholder.com/500x302',
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: 'Product 3',
  //       description: 'This is a description of product 2.',
  //       price: 19.99,
  //       quantity: 20,
  //       images: [
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082711183582302299/brosky_a_happy_african_farmer_harvesting_a_mango_straight_from__5e66eff5-08e5-4eb7-b54c-69aae5ee50e1.png',
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png',
  //         // 'https://via.placeholder.com/500x302',
  //       ],
  //     },
  //     {
  //       id: 4,
  //       name: 'Product 4',
  //       description: 'This is a description of product 1.',
  //       price: 9.99,
  //       quantity: 10,
  //       images: [
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png',
  //         // 'https://via.placeholder.com/500x301',
  //         // 'https://via.placeholder.com/500x302',
  //       ],
  //     },

  //     {
  //       id: 5,
  //       name: 'Product 5',
  //       description: 'This is a description of product 1.',
  //       price: 9.99,
  //       quantity: 10,
  //       images: [
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png',
  //         // 'https://via.placeholder.com/500x301',
  //         // 'https://via.placeholder.com/500x302',
  //       ],
  //     },
  //     {
  //       id: 6,
  //       name: 'Product 6',
  //       description: 'This is a description of product 1.',
  //       price: 9.99,
  //       quantity: 10,
  //       images: [
  //         'https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png',
  //         // 'https://via.placeholder.com/500x301',
  //         // 'https://via.placeholder.com/500x302',
  //       ],
  //     },
  //   ];

  //   setProducts(fetchedProducts);
  // }, []);



  import { ethers } from 'ethers'
import Image from 'next/image'
import Product from './product';

import { useState, useEffect, useMemo } from 'react';
import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk';
import { 
  SocialWallet
} from '@zerodevapp/social-wallet';
import MkulimaMarketplace from './abi';

function MyPage() {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    // const socialWallet = useMemo(() => {
    //   return new SocialWallet()
    // }, []);

    const socialWallet = new SocialWallet();

    const signer = await getZeroDevSigner({
      projectId: 'b1b9f896-a393-4d2a-9b92-4273da85808a',
      owner: await getSocialWalletOwner('b1b9f896-a393-4d2a-9b92-4273da85808a', socialWallet)
    })

    const contractAddress = "0xA31d890a49D03e745215B84C6Ba5518c00FAfD0F";
    const contract = new ethers.Contract(contractAddress, MkulimaMarketplace, signer)

    const allProducts = await contract.getAllProducts()
    console.log(allProducts)
    const formattedProducts = allProducts.map(product => {
      return {
        ...product,
        // price: ethers.utils.formatUnits(product.price, "ether").toString(),
        price: product.price.toString(),
        quantity: product.quantity.toString(),
        image: product.image,
        // imageUrl: new URL(product.image.toString)
      }
    })
    setProducts(formattedProducts)
    // console.log(products[1])
  }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  const data = fetchProducts();
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl text-gray-800 font-bold my-8">Products Marketplace</h1>
      <div className="max-w-7xl mx-auto">
        <Product products={products} />

      </div>
    </div>
  );
  
};

export default MyPage;
