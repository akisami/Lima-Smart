import React from "react";

const Herotwo = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold leading-tight mt-4">
              Welcome to our virtual Market
            </h2>
            <p className="text-gray-800 text-base md:text-xl mt-4">
            Lima Smart brings you the first-ever virtual agriculture market that leverages smart contracts and metaverse technology. Our platform offers an open marketplace for buyers and sellers worldwide, eliminating barriers of distance and language. With real-time interactions, potential buyers can immerse themselves in products, leading to better engagement and increased sales for sellers. By leveraging technology, Lima Smart creates a secure and efficient ecosystem where farmers, retailers, and suppliers can transact safely and seamlessly. Say goodbye to the inefficiencies and costs of traditional agriculture markets and hello to a more accessible and innovative platform with Lima Smart.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 py-6 text-center">
          <img
            className="w-full md:w-4/5 z-50"
            src="https://cdn.discordapp.com/attachments/989268410171006976/1082628760890785853/brosky_happy_african_farmers_sharing_the_metaverse_with_metaver_e8355edb-01fa-4003-802d-c1b7a0766bdc.png"
            alt="computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Herotwo;
