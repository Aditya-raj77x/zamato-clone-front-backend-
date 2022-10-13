import React, { useState } from "react";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import BrandCarousel from "./BrandCarousel";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "124ksjf435245jv34fg3",
            isPro: true,
            isOff: true,
            name: "Burger King",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Burger King",
                "Burger, American",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
        {
            _id: "sdffdsadadsfadfadsfadsf",
            isPro: true,
            isOff: false,
            name: "Vada Grill",
            restaurantReviewValue: "4.6",
            cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
            averageCost: "600",
        },
        {
            _id: "124ksjf435245jfdfv34fg3",
            isPro: true,
            isOff: true,
            name: "Domino's Pizza",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Burger King",
                "Burger, American",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
    ]);

    return (
        <>
            <DeliveryCarousel />
            <BrandCarousel />
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in Hamirpur(UP)
            </h1>
            <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;