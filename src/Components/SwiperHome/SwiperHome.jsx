import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";


// Swiper এর base CSS
import "swiper/css";

// Swiper এর navigation, pagination এবং autoplay module CSS
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SwipeHome = () => {
  // Custom button refs
  const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

  // Swiper instance state
  const [swiperInstance, setSwiperInstance] = useState(null);

  // When swiper instance is ready, connect custom buttons
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const myFetures = [
    {
      id: 1,
      name: "RAHAT",
      title: "I AM IN THE HAXKER",
      image:
        "https://www.shutterstock.com/image-photo/omni-channel-marketing-coccept-seamless-260nw-2437410725.jpg",
    },
    {
      id: 2,
      name: "Mahtab",
      title: "I AM IN Cllage",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGuKLKXbSKgkjuChhj5OZMHI3sk5VB2rESk-bEijxogGUzzffgBVmkwv9n3e8lAFEJAM&usqp=CAU",
    },
    {
      id: 3,
      name: "Mafin",
      title: "I AM IN School BUs",
      image:
        "https://wmpromus.com/app/uploads/2021/08/AdobeStock_376474383-scaled.jpeg",
    },
    {
      id: 4,
      name: "Bad KING",
      title: "I AM IN OLD Model",
      image:
        "https://www.innominds.com/hs-fs/hubfs/AdobeStock_421297583.jpeg?width=1199&name=AdobeStock_421297583.jpeg",
    },
  ];

  return (
    <div className="relative w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // navigation + dots + autoplay
        onSwiper={setSwiperInstance} // save swiper instance
        autoplay={{ delay: 3000, disableOnInteraction: false }} // auto slide
        loop={true} // loop slides
              pagination={{ clickable: true }} // ✅ dots below slides
               onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ track current slide
        className="h-full "
      >
        {/* 4 Slides */}

        {myFetures.map((myFeture, index) => (
          <SwiperSlide className="relative p-2" key={myFeture.id}>
            <div
            //   style={{ backgroundImage: `url(${myFeture.image})` }}
              className="flex relative bg-center bg-cover bg-no-repeat justify-center  items-center h-[200px] md:h-[350px] bg-gray-100 text-xl font-semibold "
                >
                    <img className="w-full absolute z-0 h-full object-cover" src={myFeture.image} alt="" />
                    <motion.div
                        key={activeIndex} // ✅ key change হলে animation পুনরায় trigger হব
                        initial={{ opacity: 0, y: 20 }} // start state
                        animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}  // animation duration
                        className="relative z-10" 
                    >
                <h1 className="text-white md:text-4xl uppercase">
                 {myFeture.name}
                </h1>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="flex justify-center items-center h-[350px] bg-gray-200 text-xl font-semibold">
            Box 2
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-[350px] bg-gray-300 text-xl font-semibold">
            Box 3
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-[350px] bg-gray-400 text-xl font-semibold">
            Box 4
          </div>
        </SwiperSlide> */}
          </Swiper>
          
          {/* <p className="w-[30px] border-3 h-[30px] absolute top-[50px] z-50"></p> */}

      {/* Custom Prev Button */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition"
      >
        <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>
          

    </div>
  );
};

export default SwipeHome;
