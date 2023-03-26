import Header from '@/components/header';
import Hero from '@/components/hero';
import Herotwo from '@/components/herotwo';
import Hero3 from '@/components/hero3';
import ImageSlider from '@/components/slider';
import Footer from '@/components/footer';
import HeroZero from '@/components/herozero';
import MissionVision from '@/components/missionandvision';
import About from '@/components/about';
import ContactUs from '@/components/contact';
// import MeshNetworkWithTypingAnimation from '@/components/mesh';
// import ParticlesComponent from '@/components/particle';
export default function Home() {
  return (
    <>
        <Header />
        <HeroZero />
        <Hero /> 
        <Herotwo />
        <MissionVision />
        <ImageSlider />
        <Hero3 />
        <About />
        <ContactUs />
        <Footer />
    </>
  )
}

// import Head from 'next/head'

// export default function Home() {
//   return (
//     <div className="bg-green-500">
//       <Head>
//         <title>Your Product Name</title>
//         <meta name="description" content="Your product description" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-5xl font-bold text-white mb-8">Your Product Name</h1>
//         <p className="text-lg font-medium text-white mb-12 max-w-3xl">
//           Your product description goes here. Keep it short and sweet, but informative enough to entice visitors to learn more.
//         </p>
//         <a href="/about" className="bg-white text-green-500 py-3 px-8 rounded-full font-medium hover:bg-gray-200 hover:text-green-500 transition duration-300 ease-in-out">
//           Learn More
//         </a>
//       </main>
//     </div>
//   )
// }

