import React, { useState } from "react";
import { MenuContext } from "./MenuContext";

export const MenuProvider = ({ children }) => {
    const [currentMenu, setCurrentMenu] = useState("home");

    return (
        <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
