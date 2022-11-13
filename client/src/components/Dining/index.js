import React, { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io"
import { GoSettings } from "react-icons/go"
import { useSelector } from "react-redux";


// components!!!!!!!!
import DiningCarousel from "./DiningCarousel";
import RestaurantCard from "../RestaurantCard";

const Dining = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector(
        (globalState) => globalState.restaurant.restaurants
    );

    useEffect(() => {
        reduxState && setRestaurantList(reduxState);
    }, [reduxState]);
    return (
        <div className="mb-10">
            <h1 className="text-xl mt-4 md:my-8 md:text-3xl md:font-semibold">
                Collections
            </h1>
            <div className="flex mb-4 w-full gap-2 flex-wrap">
                <h1 className="text-gray-600 lg:text-xl text-md text-bold lg:w-70 mr-10 ">
                    Explore curated lists of top restaurants, cafes, pubs, and bars in UP, based on trends
                </h1>
                <h1 className="flex ml-10 text-orange-600 lg:text-md text-sm text-bold lg:w-30 hover:text-red-600 ">All collections in UP <IoMdArrowDropright /></h1>
            </div>
            <DiningCarousel />
            <div className="flex gap-3 flex-wrap my-4">
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  "><GoSettings className="pr-1" /> Fillters</button>

                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  ">Rating 4.0 +</button>
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  ">Outdoor Seating </button>
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  ">Serves Alcohol</button>
                <button className="text-md border p-2  flex gap-1 border-2 bg-white rounded-lg text-slate-400 hover:bg-gray-100  ">Open Now</button>

            </div>
            <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </div>
    );
};

export default Dining;