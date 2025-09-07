import React from "react";
import StoreProvider from "./store/StoreProvider";
import Toastify from "./components/Toastify";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <StoreProvider>
            <Toastify />
            <AppRoutes />
        </StoreProvider>
    );
};

export default App;
