import React, { useState, useEffect } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn";
import FoodList from "../OrderOnline/FoodList";
import MenuListContainer from "../OrderOnline/MenuListContainer";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getFoodList } from "../../redux/reducers/food/food.action";

const OrderOnline = () => {
    const [menu, setMenu] = useState([]);
    const [selected, setSelected] = useState("");

    const dispatch = useDispatch();

    const restaurant = useSelector(
        (globaldata) => globaldata.restaurant.selectedRestaurant.restaurant
    );

    useEffect(() => {
        restaurant &&
            dispatch(getFoodList(restaurant.menu)).then((data) => {
                setMenu(data.payload.menus.menus);
            });
    }, [restaurant]);


    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelected(e.target.id);
        }
        return;
    };

    return (
        <>
            <div className="w-full flex items-start">
                <aside className="sticky top-16 hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 w-1/4 h-screen">
                    {menu.map((item, index) => (
                        <MenuListContainer
                            {...item}
                            key={index}
                            onClickHandler={onClickHandler}
                            selected={selected}
                            target={index}
                        />
                    ))}
                </aside>
                <div className="w-full px-3 md:w-3/4 sticky overflow-auto h-screen top-16">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    <section className="flex  overflow-y-screen flex-col gap-3 md:gap-5">
                        {menu.map((item, index) => (
                            <FoodList key={index} {...item} target={index} />
                        ))}
                    </section>
                </div>
            </div>
            <FloatMenuBtn
                menu={menu}
                onClickHandler={onClickHandler}
                selected={selected}
            />
        </>
    );
};
export default OrderOnline;










// const [menu, setMenu] = useState([
//     {
//         name: "Today's Special",
//         items: [
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/7bb/4b9ce19d00df408e19c5bc9b8bdb87bb.jpg",
//                 name: "Classic Cheese Pasta",
//                 rating: 3.5,
//                 price: 191,
//                 description: "Margherita .",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/505/e32a5d978b698a74ea894b4d41638505.jpg",
//                 name: "Veggie Treat Pizza",
//                 rating: 4.5,
//                 price: 262,
//                 description: "apsicum, Onion, Red Paprika .",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/c5e/7467ca4eb57423091563289281d81c5e.jpg",
//                 name: "Reshmi Paneer Pizza",
//                 rating: 4.5,
//                 price: 238,
//                 description: "Paneer, Capsicum, Onion, Secret Kadhai Sauce .",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/c0b/42c07fcd5a58b6da5e978b763370ec0b.jpg",
//                 name: "Palak Patta Chaat",
//                 rating: 4.5,
//                 price: 55,
//                 description: "This chatpata Palak Patta Chaat Recipe, is a delicious assembly of crispy batter .",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
//                 name: "Butter Pancakes with Bacon",
//                 rating: 4.5,
//                 price: 695,
//                 description: "Rashers and bourbon caramel sauce.",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
//                 name: "Amritsari Fish Tikka",
//                 rating: 5,
//                 price: 545,
//                 description:
//                     "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/599/111dd44381fecc63bb4bf37ab8179599.jpg",
//                 name: "Amritsari Fish Tikka",
//                 rating: 3.5,
//                 price: 375,
//                 description:
//                     "Spiced chicken minced and toasted served with butter buns.",
//             },
//         ],
//     },
//     {
//         name: "Soup",
//         items: [
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/300/5183873ca8e3fbf66bb82a9e37f31300.jpg",
//                 name: "Peeking Soup Veg.",
//                 rating: "2.9",
//                 price: "120",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/c6f/ad3668dd0e4215fdc3aeedfb3d3aec6f.png",
//                 name: "Mun Chow Soup",
//                 rating: "3.7",
//                 price: "120",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/c7b/da86667e2a69ff4467c4155a7219fc7b.jpg",
//                 name: "Chicken & Corn Soup",
//                 rating: "4.5",
//                 price: "1970",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/c3c/7ed2652d58a67ce963704db111b44c3c.jpg",
//                 name: "Chicken Manchow Soup",
//                 rating: "4",
//                 price: "190",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/03e/1834a3a8fb1d08bba554e6c35ee6d03e.jpg",
//                 name: "Hot & Sour Soup",
//                 rating: "3",
//                 price: "165",
//                 description: "",
//             },
//         ],
//     },
//     {
//         name: "Chinese Hut",
//         items: [
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/caa/6e64b9f5c8b18154e91f63356d089caa.png",
//                 name: "Crispy Babycorn",
//                 rating: "4.5",
//                 price: "240",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/f97/b101015981b07529e983f3a233cb2f97.png",
//                 name: "Chilli Paneer Roll",
//                 rating: "3.7",
//                 price: "150",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/6aa/e170c00b9219c1c3b05b8d58394066aa.png",
//                 name: "Cheese Roll",
//                 rating: "4.5",
//                 price: "140",
//                 description: "",
//             },

//         ],
//     },
//     {
//         name: "Mini Meals",
//         items: [
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/f5d/677782248da3aa2f59a77dc2916cbf5d.jpg",
//                 name: "Veg Biryani",
//                 rating: "4.5",
//                 price: "210",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/5e0/d7f7fb9996772b862d1e0ce6d29105e0.jpg",
//                 name: "Chilli Paneer + Veg Fried Rice + Coke",
//                 rating: "3.7",
//                 price: "250",
//                 description: "",
//             },
//             {
//                 image:
//                     "https://b.zmtcdn.com/data/dish_photos/e27/7919475f03b19f390f638a9bb1331e27.jpg",
//                 name: "Aloo Paratha With Chole",
//                 rating: "4.5",
//                 price: "170",
//                 description: "",
//             },

//         ],
//     },
// ]);