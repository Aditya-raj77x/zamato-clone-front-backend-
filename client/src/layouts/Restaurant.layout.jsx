import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = ({ children: Component, ...props }) => {
  const [restaurant, setRestaurant] = useState({
    images: [
      {
        location:
          "https://b.zmtcdn.com/data/pictures/3/19545403/be3197d99d70acbd2902ccdd46c716f8.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/3/19545403/2e383ecc0b371370ecb6b810b7f05bff.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/3/19545403/6433b2d5cd45c3ebb5aac2e001f7e847.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/reviews_photos/0f7/a2a8df1141bc531b8500a2e9c350b0f7_1608219386.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/3/19545403/7925b4560eaf24c288afa3ac391f4c6e.jpg",
      },
    ],
    name: "Molecule Gastro Bar",
    cuisine: ["Italian", "North Indian", "Fast Food", "Desserts", "Finger Food", "Sichuan"],
    address: "Hamirpur, UP",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });

  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo {...restaurant} />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive="true">
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10 sticky z-10 top-0 pt-2 bg-white">
          <Tabs />
        </div>
        {Component}
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;