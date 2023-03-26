import React from "react";

const Hero3 = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-full py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            Better farming with blockchain technology
          </h2>
          <p className="mt-4 text-lg text-white">
          Lima Smart uses blockchain technology to ensure transparency and immutability in all transactions, creating a secure and trustworthy virtual market for farmers and traders worldwide.
          </p>
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <div className="flex justify-center w-full lg:w-1/2 px-4">
            <img
              className="h-64 w-full object-cover md:h-full md:w-96 rounded-lg shadow-md"
              src="https://cdn.discordapp.com/ephemeral-attachments/989268410171006976/1082736999879950366/grid_0.webp"
              alt=""
            />
          </div>
          <div className="flex justify-center w-full lg:w-1/2 px-4">
            <div className="max-w-md lg:mx-auto">
              <h3 className="text-lg font-bold text-white mb-4">
                Traceability and Transparency
              </h3>
              <p className="text-white">
              The secure and hassle-free transaction process ensures that both buyers and sellers are protected. With Lima Smart, farming is made easier and more efficient, allowing farmers to focus on what they do best - growing quality products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
