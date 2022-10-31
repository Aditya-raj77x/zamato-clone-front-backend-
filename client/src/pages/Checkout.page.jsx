import React, { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";

// Layout
import CheckoutLayout from "../layouts/Checkout.layout";

// components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

const Checkout = () => {
    const [cart, setCart] = useState([
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/7bb/4b9ce19d00df408e19c5bc9b8bdb87bb.jpg",
            name: "Classic Cheese Pasta",
            rating: 3.5,
            price: 191,
            description: "Margherita .",
            quantity: 1,
            totalPrice: 191,
        },
        {
            image:
                "https://b.zmtcdn.com/data/dish_photos/505/e32a5d978b698a74ea894b4d41638505.jpg",
            name: "Veggie Treat Pizza",
            rating: 4.5,
            price: 262,
            description: "apsicum, Onion, Red Paprika .",
            quantity: 2,
            totalPrice: 524,
        },
    ]);

    const address = [
        {
            name: "Home",
            address: "ramedi hamirpur",
        },
        {
            name: "Work",
            address: "king road hamirpur",
        },
    ];

    const payNow = () => {
        let options = {
            key: "rzp_test_sYyQGrQmJhhOvT",
            amount:
                cart.reduce((total, current) => total + current.totalPrice, 0) * 100,
            currency: "INR",
            name: "Zomato By Aditya Raj",
            description: "Best Delivery Service",
            handler: (data) => {
                alert("Payment Successful");
                console.log(data);
            },
            prefill: {
                name: "Aditya raj",
                email: "rex@email.com",
            },
            theme: {
                color: "#e23744",
            },
        };

        let razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div className="my-3 flex flex-col gap-3 items-center">
            <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
            <div className="w-full md:w-3/5 rounded-lg py-3 drop-shadow-2xl bg-white flex flex-col items-center p-4">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex w-full flex-col gap-2 items-center">
                    <h5 className="text-base tracking-wider">ORDER FROM</h5>
                    <div className="flex w-full flex-col items-center text-gray-400">
                        <h4>Burger King</h4>
                        <small>Shop No 1, Ground Floor, Kidwai nagar Kanpur</small>
                    </div>
                    <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
                        {cart.map((item) => (
                            <FoodItem key={item._id} {...item} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-3/5 items-center">
                        <h4 className="text-xl font-semibold">Choose Address</h4>
                        <AddressList address={address} />
                    </div>
                </div>
                <button
                    onClick={payNow}
                    className=" flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white fomt-medium text-lg bg-zomato-400 rounded-lg"
                >
                    Pay Securely <BsShieldLockFill />
                </button>
            </div>
        </div>
    );
};

export default CheckoutLayout(Checkout);