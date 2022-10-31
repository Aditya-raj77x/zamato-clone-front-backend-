import React, { useState } from "react";
import { IoMdArrowFropdown, IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// components
import FoodItem from "./FoodItem";

const CartData = ({ toggle }) => {
    const [cart, setCart] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/caa/6e64b9f5c8b18154e91f63356d089caa.png",
            name: "Crispy Babycorn",
            rating: "4.5",
            price: 240,
            description: "",
            quantity: 2,
            totalPrice: 480,
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/f97/b101015981b07529e983f3a233cb2f97.png",
            name: "Chilli Paneer Roll",
            rating: "3.7",
            price: 150,
            description: "",
            quantity: 1,
            totalPrice: 150,
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/6aa/e170c00b9219c1c3b05b8d58394066aa.png",
            name: "Cheese Roll",
            rating: "4.5",
            price: 140,
            description: "",
            quantity: 2,
            totalPrice: 280,
        },
    ]);
    const navigate = useNavigate();
    const continueToCheckout = () => navigate("/checkout/orders");

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <small className="flex items-center gap-1" onClick={toggle}>
                        {cart.length} Item <IoMdArrowDropup />
                    </small>
                    <h4>
                        ₹ {cart.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
                        <sub>(plus tax)</sub>
                    </h4>
                </div>
                <button
                    onClick={continueToCheckout}
                    className={
                        "flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"
                    }
                >
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    );
};

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [cart, setCart] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/caa/6e64b9f5c8b18154e91f63356d089caa.png",
            name: "Crispy Babycorn",
            rating: "4.5",
            price: 240,
            description: "",
            quantity: 2,
            totalPrice: 480,
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/f97/b101015981b07529e983f3a233cb2f97.png",
            name: "Chilli Paneer Roll",
            rating: "3.7",
            price: 150,
            description: "",
            quantity: 1,
            totalPrice: 150,
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/6aa/e170c00b9219c1c3b05b8d58394066aa.png",
            name: "Cheese Roll",
            rating: "4.5",
            price: 140,
            description: "",
            quantity: 2,
            totalPrice: 280,
        },
    ]);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
            {cart.length && (
                <>
                    {isOpen && (
                        <div className="w-full overflow-y-scroll h-48 bg-white z-20 p-2 bottom-14 px-3 fixed">
                            <div className="flex items-center justify-between md:px-20">
                                <h3 className="text-xl font-semibold">Your Orders</h3>
                                <IoCloseSharp onClick={closeCart} className="cursor-pointer" />
                            </div>

                            <hr className="my-2" />

                            <div className="flex flex-col gap-2 md:px-20">
                                {cart.map((food) => (
                                    <FoodItem key={food._id} {...food} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0 mx-auto lg:px-20">
                        <CartData toggle={toggleCart} />
                    </div>
                </>
            )}
        </>
    );
};

export default CartContainer;