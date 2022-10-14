import React, { useState } from "react";

import { GoSettings } from "react-icons/go"
import { BsArrowDownUp } from "react-icons/bs"

import NightLifeCarousel from "./NightLifeCarousel";
import RestaurantCard from "../RestaurantCard";

const NightLife = () => {
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
        <div className="mb-10">
            <div className="flex gap-3 flex-wrap pt-5 my-4" >
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  "><GoSettings className="pr-1" /> Fillters</button>

                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  "><BsArrowDownUp className="pr-1" /> Distance</button>
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  ">Rating 4.0 + </button>
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  ">Pubs & Bars</button>


            </div>
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                Nightlife Restaurant in Hamirpur UP
            </h1>
            <NightLifeCarousel />
            <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </div>
    );
};

export default NightLife;