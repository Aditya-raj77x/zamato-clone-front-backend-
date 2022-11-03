import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// components
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "../Reviews/ReviewCard";
import MapView from "./MapView";

// redux


import { getReview } from "../../redux/reducers/review/review.action";
import { getImage } from "../../redux/reducers/image/image.action";

const Overview = () => {
    const dispatch = useDispatch();

    const [restaurant, setRestaurant] = useState({ cuisine: [] });
    const [reviews, setReviews] = useState([]);
    const [menuImages, setMenuImages] = useState([]);

    const reduxState = useSelector(
        (globalState) => globalState.restaurant.selectedRestaurant.restaurant
    );

    useEffect(() => {
        if (reduxState) {
            setRestaurant(reduxState);
        }
    }, [reduxState]);

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImages)).then((data) => {
                const images = [];
                data.payload.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            });

            dispatch(getReview(reduxState?._id)).then((data) => {
                setReviews(data.payload.reviews);
            });
        }
    }, [reduxState]);



    const { id } = useParams;

    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "diningSwiper",
        navigation: true,
    };

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    };

    return (
        <div className="flex flex-col gap-5 md:flex-row relative">
            <div className="w-full md:w-8/12">
                <h2 className="font-semibold text-lg md:text-xl my-4">
                    About this place
                </h2>
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">Menu</h4>
                    <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-1 text-zomato-400">
                            See all menu <IoMdArrowDropright />
                        </span>
                    </Link>
                </div>

                <div className="flex flex-wrap gap-3 my-4">
                    <MenuCollection
                        menuTitle="Menu"
                        pages={menuImages.length}
                        images={menuImages}
                    />
                </div>

                <h4 className="text-lg font-medium my-4">Cuisines</h4>
                <div className="flex flex-wrap gap-2">
                    {restaurant?.cuisine.map((cuisineName, index) => (
                        <span
                            key={index}
                            className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
                        >
                            {cuisineName}
                        </span>
                    ))}
                </div>

                <div className="my-4">
                    <h4 className="text-lg font-medium">Average Cost</h4>
                    <h6>₹{restaurant.averageCost} for one order (approx.)</h6>
                    <small className="text-gray-500">
                        Exclusive of applicable taxes and charges, if any.
                    </small>
                </div>

                <div className="flex flex-col-reverse">
                    <div className="my-4">
                        <h4 className="text-lg font-medium">
                            Rate your delivery experience
                        </h4>
                        <ReactStars
                            count={5}
                            onChange={(newRating) => console.log(newRating)}
                            size={24}
                            activeColor="#ea2c2c"
                        />
                        {reviews.map((review, index) => (
                            <ReviewCard {...review} key={index} />
                        ))}
                    </div>

                    <div className="my-4">
                        <h4 className="text-lg font-medium">Similar Restaurants</h4>
                        <div>
                            <Swiper {...slideConfig}>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/dish_photos/9ab/55e41128cc6a3fe5448662a52bbdb9ab.jpg"
                                        title="Paneer Butter Masala"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/dish_photos/678/6470f481aafdec89d2e634d5c4a4c678.jpg"
                                        title="Molecule Veg Biryani"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/pictures/chains/4/844/c2aff8d94b55d820df98053ce1b8d9cb_featured_v2.jpg"
                                        title="Khan Chacha"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/dish_photos/242/9e7b82dac6c0ce8fb3fa67a09a669242.jpg"
                                        title="Veg Steamed Momos [5 Pieces]"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/dish_photos/ad9/dcd3d4b092460e607ad550823fafaad9.jpg"
                                        title="Veg Afghani Momos [5 Pieces]"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <MenuSimilarRestaurantCard
                                        image="https://b.zmtcdn.com/data/dish_photos/cf2/e6001efc2d49f83017f3761243d04cf2.jpg"
                                        title="Chilli Cheese Garlic Bread"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                        <MapView
                            title="McDonald's"
                            phno="+9180901056"
                            mapLocation={getLatLong("28.64121406271755, 77.21955482132051")}
                            address="H-5/6, Plaza Building, Connaught Place, Hamirpur UP"
                        />
                    </div>
                </div>
            </div>
            <aside
                style={{ height: "fit-content" }}
                className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white py-4 px-3 shadow-md flex-col gap-4"
            >
                <MapView
                    title="McDonald's"
                    phno="+193423542345"
                    mapLocation={getLatLong("28.64121406271755, 77.21955482132051")}
                    latAndLong={"28.64121406271755, 77.21955482132051"}
                    address="H-5/6, Plaza Building, Connaught Place, Hamirpur"
                />
            </aside>
        </div>
    );
};

export default Overview;

// const [restaurant, setRestaurant] = useState({
//     _id: "124ksjf435245jv34fg3",
//     isPro: true,
//     isOff: true,
//     name: "Nathu's Sweets",
//     restaurantReviewValue: "3.7",
//     cuisine: [
//         "Mithai",
//         "South Indian",
//         "Chinese",
//         "Street Food",
//         "Fast Food",
//         "Desserts",
//         "North Indian",
//     ],
//     averageCost: "450",
// });


// const [reviews, setReviews] = useState([
//     {
//         rating: 3.7,
//         isRestaurantReview: false,
//         createdAt: "Sun Aug 4 2022 20:20:34 GMT+0530 (India Standard Time)",
//         reviewText: "excelent exprience.",
//     },
//     {
//         rating: 4.5,
//         isRestaurantReview: false,
//         createdAt: "Fri Oct 14 2022 20:19:34 GMT+0530 (India Standard Time)",
//         reviewText: "Very good experience.",
//     },
// ]);


// const [menuImages, setMenuImages] = useState([
//     "https://b.zmtcdn.com/data/menus/377/19498377/4ab520aa6d3cb624dd7814626d3a3514.jpg",
//     "https://b.zmtcdn.com/data/menus/377/19498377/a817aefd6e25ac3286b5427fb2fe241a.jpg",
//     "https://b.zmtcdn.com/data/menus/377/19498377/4557e19a745dba780e284a727a9bb7f9.jpg",
//     "https://b.zmtcdn.com/data/menus/931/931/d40e86a957d1ed6e6fabe5a67a161904.jpg",
//     "https://b.zmtcdn.com/data/menus/931/931/36f8a3b9e5dbf6435f903c9a8745bcc8.jpg",
//     "https://b.zmtcdn.com/data/menus/931/931/8d6623791860b054953b6c2c14d61bcb.jpg",
//     "https://b.zmtcdn.com/data/menus/931/931/6d462a04051c0eabb0067149aa84cc64.jpg",
// ]);