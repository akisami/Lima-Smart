import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ImageSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/sl1.png',
      title: 'The Journey of a Mango',
      description: 'Follow the journey of a mango from a farm to the virtual marketplace on Lima Smart.',
    },
    {
      id: 2,
      image: '/sl2.webp',
      title: 'Real-Time Showcase',
      description: 'Watch as the mango is showcased in real-time, allowing potential buyers to examine its quality and ripeness.',
    },
    {
      id: 3,
      image: '/sl3.png',
      title: 'Secure Transactions',
      description: 'With Lima Smarts secure transactions, the buyer approves the mango and the funds are released to the seller, making it a seamless and secure transaction.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
      </h2>
      <div className="mt-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-96 w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      {slide.title}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-white">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
