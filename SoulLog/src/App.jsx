import React from "react";
import StoreProvider from "./store/StoreProvider";
import Toastify from "./components/Toastify";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Toastify />
                {/* <AppRoutes /> */}
                <HomePage />
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;
