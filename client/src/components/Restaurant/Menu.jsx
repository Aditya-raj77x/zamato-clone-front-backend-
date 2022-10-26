import React, { useState } from "react";

// components
import MenuCollection from "./MenuCollection";

const Menu = () => {
    const [menus, setMenus] = useState([
        "https://b.zmtcdn.com/data/menus/377/19498377/4ab520aa6d3cb624dd7814626d3a3514.jpg",
        "https://b.zmtcdn.com/data/menus/377/19498377/a817aefd6e25ac3286b5427fb2fe241a.jpg",
        "https://b.zmtcdn.com/data/menus/377/19498377/4557e19a745dba780e284a727a9bb7f9.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/d40e86a957d1ed6e6fabe5a67a161904.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/36f8a3b9e5dbf6435f903c9a8745bcc8.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/8d6623791860b054953b6c2c14d61bcb.jpg",
        "https://b.zmtcdn.com/data/menus/931/931/6d462a04051c0eabb0067149aa84cc64.jpg",
    ]);

    return (
        <div className="flex flex-wrap gap-3">
            <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
        </div>
    );
};
export default Menu;