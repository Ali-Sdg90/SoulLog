import React from "react";
import { MenuProvider } from "./Menu/MenuProvider";
import { ThemeProvider } from "./Theme/ThemeProvider";

const StoreProvider = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <MenuProvider>
                    <>{children}</>
                </MenuProvider>
            </ThemeProvider>
        </>
    );
};

export default StoreProvider;
