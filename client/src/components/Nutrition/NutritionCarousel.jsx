import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import NutritionCarouselCard from "./NutritionCarouselCard";

const NutritionCarousel = () => {
    const [categories, setCategories] = useState([
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            title: "Protien & Fitness",
        },
        {
            image:
                "data:image/jpeg;base64,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",
            title: "Whey Protien ",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            title: "Sleep & stress",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Digestion & Weight Loss",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
            title: "Omegas & CoQ10",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
            title: "Beauty & Skin Care",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
            title: "Immunity & Bones",
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
        <>
            <div className="lg:hidden grid grid-cols-2 gap-2">
                {categories.map((each, index) => (
                    <NutritionCarouselCard key={index} {...each} />
                ))}
            </div>
            <div className="hidden lg:block">
                <Swiper {...slideConfig}>
                    {categories.map((each, index) => (
                        <SwiperSlide key={index}>
                            <NutritionCarouselCard {...each} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default NutritionCarousel;