
import React from 'react';
import Image from 'next/image'

const Product = ({ products }) => {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{products.map(product => (
<div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="relative h-64 sm:h-48" style={{ height: "300px" }}>
<div className="swiper-container h-full">
<div className="swiper-wrapper">
{/* {product.images.map(image => (
<div key={image} className="swiper-slide">
<Image src={product.imageUrl} width={500} height={300} className="object-contain w-full h-full" />
</div>
))} */}

<div  className="swiper-slide">
<image src={product.image} width={500} height={300} className="object-contain w-full" />
</div>
</div>
<div className="swiper-pagination"></div>
</div>
</div>
<div className="px-4 py-2">
<h2 className="text-lg font-semibold">{product.name}</h2>
<p className="text-gray-500">{product.description}</p>
{/* <p className="mt-2 text-gray-900">${product.price.toFixed(2)}</p> */}
<p className="mt-2 text-gray-900">${product.price}</p>

<p className="text-gray-500">{product.quantity} in stock</p>
<div className="flex justify-between items-center mt-4">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Go Metaverse
</button>
<div className="hidden sm:block w-4"></div>
<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
Buy
</button>
</div>
</div>
</div>
))}
</div>
);
};

export default Product;