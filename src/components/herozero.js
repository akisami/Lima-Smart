import { useState, useEffect } from "react";

const images = [
  // "https://cdn.discordapp.com/attachments/1008571102328541215/1082292765355937793/Agate_an_african_farmer_interacting_with_the_metaverse_make_it__46ec9f35-ffcc-4e64-b793-e6d6fdda620e.png",
  // "https://cdn.discordapp.com/attachments/1008571102328541215/1082294547234689125/Agate_an_african_farmer_interacting_with_the_metaverse_make_it__519267cd-e3fa-4e0f-93aa-451d4f6a563e.png",
  // "https://cdn.discordapp.com/attachments/1008571102328541215/1082299767557730434/Agate_an_old_african_farmer_with_his_cows_interacting_with_the__92435896-b81d-4314-bfb7-ec5de447f8b6.png"
  // // "https://picsum.photos/id/1002/1920/1080",
  // "https://picsum.photos/id/1003/1920/1080",
  // "https://picsum.photos/id/1004/1920/1080",
  "https://cdn.discordapp.com/attachments/1008571029804810332/1082617632919912508/mo123_a_few_old_african_farmers_happy_when_interacting_with_the_35088f0e-ab7e-4d57-8d38-74dd5d8590e3.png",
  "https://cdn.discordapp.com/attachments/1008571029804810332/1082617654386376704/mo123_a_few_old_african_farmers_happy_when_interacting_with_the_72a7ec79-05a1-4af7-9172-99437d8644dd.png",
  "https://cdn.discordapp.com/attachments/1008571029804810332/1082619658814890035/mo123_a_few_old_african_women_farmers_happy_when_interacting_wi_083adb21-6558-4314-a088-f1c55d398877.png"
];

const texts = [
  "Welcome to our Agricultural Blockchain Ecosystem",
  "Transforming Agriculture with Blockchain Technology",
  "Join us in the Revolution of the Agriculture Industry",
];

const HeroZero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[current]})`, opacity: 0.8 }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-6 lg:mb-12">
          {texts[current]}
        </h1>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroZero;
