import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const BrandCarousel = () => {
    const categories = [
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383360.png",
            title: "McDonald's",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/f5710394f01762125ce4defa20fe96f8_1611299401.png",
            title: "Capsicum",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188475.png",
            title: "Burger King",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550059353.png",
            title: "Domino's Pizza",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613214113.png",
            title: "Pizza Hut",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/2fdc75ff05c46d5568bee34aa168276c_1645013372.png",
            title: "Hot Pizza Ace",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613216095.png",
            title: "KFC",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/fa86fb01a5173b19aeeeec30513426a4_1613199647.png",
            title: "Masala Kitchen",
        },
        {
            image:
                "https://b.zmtcdn.com/data/brand_creatives/logos/7ebf2d67f738529423cf4623c2fb3de6_1584468787.png",
            title: "Roma's Café Diner",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a6bb7747b636bd7c15bbc77c2c5c461_1657955325.png",
            title: "Hot Pizza King"
        },


    ];

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,
    };

    return (
        <>
            <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
                Top brands for you
            </h1>
            <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
                {categories.map((food, index) => (
                    <DeliveryCategoryCard {...food} key={index} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Swiper {...slideConfig}>
                    {categories.map((food, index) => (
                        <SwiperSlide key={index}>
                            <DeliveryCategoryCard {...food} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default BrandCarousel;