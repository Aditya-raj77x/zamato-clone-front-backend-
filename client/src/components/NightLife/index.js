import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { GoSettings } from "react-icons/go"
import { BsArrowDownUp } from "react-icons/bs"

import NightLifeCarousel from "./NightLifeCarousel";
import RestaurantCard from "../RestaurantCard";

const NightLife = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector(
        (globalState) => globalState.restaurant.restaurants
    );

    useEffect(() => {
        reduxState && setRestaurantList(reduxState);
    }, [reduxState]);

    return (
        <>
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

            </div>
            <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default NightLife;