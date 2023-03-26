import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <Image src="/Lima.png" width={400} height={400} alt="Agritech logo" />
          <p className="mt-4 text-gray-700 text-lg text-center">
            We're a team of experts in the agritech industry who are passionate about utilizing the power of blockchain technology to revolutionize the way agriculture is done. With years of experience in the field, we're dedicated to making a positive impact on the world by creating innovative solutions that empower farmers and increase efficiency across the entire supply chain.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <Image src="/images/blockchain.png" width={400} height={400} alt="Blockchain logo" /> */}
          <p className="mt-4 text-gray-700 text-lg text-center">
            We understand the immense potential of blockchain technology to transform industries, and we believe that the agritech sector is ripe for disruption. By leveraging the security and transparency of blockchain, we're able to create decentralized systems that increase accountability and traceability while reducing fraud and waste.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
