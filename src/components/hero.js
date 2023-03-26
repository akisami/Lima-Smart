import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
<div className="bg-gradient-to-r from-green-500 to-blue-500">
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Are You New To Blockchain ?

            </h2>
            <p className="mt-3 max-w-2xl text-lg text-white">
              Dont't worry we have your back !!!
              Take our guided course to understand the fundamentals of blockchain and metaverse technology.
      

            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-500 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                  {/* Hero icon 1 */}
                  <Image
                    src="/plant2.png"
                    alt="Hero icon 1"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-white">
                Secure and Hassle-Free Exchanges 
                </h3>
                <p className="mt-2 text-base text-white">
                Experience a Peaceful and Risk-Free Buying and Selling with Lima Smart's Escrow Services </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                  {/* Hero icon 2 */}
                  <Image
                    src="/plant.png"
                    alt="Hero icon 2"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-white">
                Streamline all your payments & invoicing
                </h3>
                <p className="mt-2 text-base text-white">
                Say goodbye to payment headaches and hello to streamlined finances with Lima Smart                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                  {/* Hero icon 2 */}
                  <Image
                    src="/farm.png"
                    alt="Hero icon 2"
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-white">
                Live Metaverse Showcase                </h3>
                <p className="mt-2 text-base text-white">
                Immerse buyers in your products with Lima Smart's virtual metaverse for better engagement and increased sales. Meanwhile, sellers save on showrooms and reach a global audience.                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                  {/* Hero icon 2 */}
                  <Image
                    src = "/yard.png"
                    alt="Hero icon 2"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-white">
                Virtual Agricultural Marketplace
                </h3>
                <p className="mt-2 text-base text-white">
                Connect & Trade Globally with Smart Contracts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
export default Hero;

      
