import Image from 'next/image'

const MissionVision = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-full py-10">
      <div className="flex flex-col lg:flex-row lg:justify-between max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 px-6 lg:px-0">
          <div className="rounded-full h-64 w-64 mx-auto overflow-hidden">
            <Image src="/hj.png" alt="Mission" width={500} height={500} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-white py-10 lg:py-0 px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Secure Your Transactions with Lima Smart's Escrow Service</h2>
          <p className="text-lg leading-loose">
          Shop Securely with Lima Smart's Virtual Market - Our escrow contracts secure your funds and guarantee the authenticity of goods. Shop with confidence knowing that every transaction is protected, hassle-free, and backed by our commitment to excellence.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 px-6 lg:px-0">
          <div className="rounded-full h-64 w-64 mx-auto overflow-hidden">
            <Image src="/yh.png" alt="Vision" width={500} height={500} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-white py-10 lg:py-0 px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Showcase Your Products Like Never Before</h2>
          <p className="text-lg leading-loose">
          With Lima Smart, you can showcase your products in real time and reach a wider audience like never before. Our virtual metaverse technology allows potential buyers to experience your products in a unique way, increasing engagement and ultimately leading to increased sales.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
