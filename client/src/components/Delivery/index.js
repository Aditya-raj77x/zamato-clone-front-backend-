import React, { useState, useEffect } from "react";
import { GoSettings } from "react-icons/go"
import { BsArrowDownUp } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { useSelector } from "react-redux";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import BrandCarousel from "./BrandCarousel";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector(
        (globalState) => globalState.restaurant.restaurants
    );

    useEffect(() => {
        reduxState && setRestaurantList(reduxState);
    }, [reduxState]);

    return (
        <>
            <div className="flex gap-3 flex-wrap">
                <button className="text-md border p-2 hover:bg-gray-100 flex gap-1 border-2 bg-white rounded-lg text-slate-400  "><GoSettings className="pr-1" /> Fillters</button>
                <button className="text-md border p-2 hover:bg-gray-100 flex gap-1 border-2 bg-white rounded-lg text-slate-400  "><BsArrowDownUp className="pr-1" /> Delivery Time</button>
                <button className="text-md border p-2 hover:bg-gray-100 flex gap-1 border-2 bg-white rounded-lg text-slate-400  ">Rating 4.0 +</button>
                <button className="text-md border p-2 hover:bg-gray-100 flex gap-1 border-2 bg-white rounded-lg text-slate-400  ">Pure Veg</button>
                <button className="text-md border p-2 hover:bg-gray-100 flex gap-1 border-2 bg-white rounded-lg text-slate-400  ">cuisine <IoIosArrowDown className="pl-1" /></button>
                <button className="text-md border p-2 hover:bg-gray-100 flex gap-1 border-2 bg-white rounded-lg text-slate-400  ">More Fillters <IoIosArrowDown className="pl-1" /></button>
            </div>
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
// const [restaurantList, setRestaurantList] = useState([
//     {
//         _id: "124ksjf435245jv34fg3",
//         isPro: true,
//         isOff: true,
//         name: "Burger King",
//         restaurantReviewValue: "3.7",
//         cuisine: [
//             "Burger King",
//             "Burger, American",
//             "Chinese",
//             "Street Food",
//             "Fast Food",
//             "Desserts",
//             "North Indian",
//         ],
//         averageCost: "450",
//     },
//     {
//         _id: "sdffdsadadsfadfadsfadsf",
//         isPro: true,
//         isOff: false,
//         name: "Vada Grill",
//         restaurantReviewValue: "4.6",
//         cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
//         averageCost: "600",
//     },
//     {
//         _id: "124ksjf435245jfdfv34fg3",
//         isPro: true,
//         isOff: true,
//         name: "Domino's Pizza",
//         restaurantReviewValue: "3.7",
//         cuisine: [
//             "Burger King",
//             "Burger, American",
//             "Chinese",
//             "Street Food",
//             "Fast Food",
//             "Desserts",
//             "North Indian",
//         ],
//         averageCost: "450",
//     },
// ]);