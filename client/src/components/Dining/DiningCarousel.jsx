import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
    const [dining] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/collections/2e5c5dc79d4b465797c8e425d814f42c_1582256432.jpg",
            title: "Veggie Friendly",
            places: "15 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/c43a23a4f0890b3e2996e7bf34febb87_1528867270.jpg",
            title: "Must-visit restaurants in UP",
            places: "9 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/fdb1e50aa9f3d24389cb696064661160_1626257119.jpg",
            title: "Great Cafes",
            places: "10 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/f672e9556e44fe33ff47bf751639c0bd_1535356450.jpg",
            title: "Best Pizza Places In Town",
            places: "7 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/454e33b19950986d4c7c34bc70f99ada_1612856400.jpg",
            title: "Luxury Dining",
            places: "5 Places",
        },
        {
            image:
                "https://b.zmtcdn.com/data/collections/ef4da4077aae068ea1e4410eefb5aec5_1660735784.jpg",
            title: "Dining Halls",
            places: "3 Places",
        },
    ]);

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
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };

    return (
        <div className="w-full">
            <Swiper {...slideConfig}>
                {dining.map((item, index) => (
                    <SwiperSlide key={index}>
                        <PictureCarouselCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiningCarousel;