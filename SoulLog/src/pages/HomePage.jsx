import React, { useContext, useState } from "react";
import { ConfigProvider, theme } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CSCalendar from "./components/CSCalendar";
import { ThemeContext } from "./store/Theme/ThemeContext";
import FloatButtonSection from "./components/FloatButtonSection";
import AnnouncementModule from "./components/AnnouncementModule";
import Toastify from "./components/Toastify";
import SidebarContent from "./components/SidebarContent";
import PageMenu from "./components/PageMenu";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastifyObj, setToastifyObj] = useState("");
    const [addToCurrentWeek, setAddToCurrentWeek] = useState(0);
    const [announcementData, setAnnouncementData] = useState({
        startWeekDate: "",
        endWeekDate: "",
        firstEventDate: "",
        secondEventDate: "",
        firstEvent: "",
        secondEvent: "",
    });

    const { theme: currentTheme } = useContext(ThemeContext);

    const [sidebarWidth, setSidebarWidth] = useState(250);
    const [isResizing, setIsResizing] = useState(false);

    const startResizing = () => setIsResizing(true);
    const stopResizing = () => setIsResizing(false);

    const handleMouseMove = (e) => {
        if (isResizing) {
            const newWidth = e.clientX;
            if (newWidth > 150 && newWidth < 600) {
                setSidebarWidth(newWidth);
            }
        }
    };

    return (
        <ConfigProvider
            theme={{
                algorithm:
                    currentTheme === "dark"
                        ? theme.darkAlgorithm
                        : theme.defaultAlgorithm,
            }}
        >
            <Toastify toastifyObj={toastifyObj} />

            <Header />

            {/* ===== Main Layout ===== */}
            <div
                onMouseMove={handleMouseMove}
                onMouseUp={stopResizing}
                className="app-main-layout"
            >
                <div style={{ width: sidebarWidth }} className="sidebar">
                    <SidebarContent />

                    <div
                        onMouseDown={startResizing}
                        className="sidebar-handler"
                    />
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, overflow: "auto" }}>
                    <PageMenu />
                    <CSCalendar
                        setAnnouncementData={setAnnouncementData}
                        addToCurrentWeek={addToCurrentWeek}
                    />
                </div>
            </div>

            <Footer />
            <FloatButtonSection setIsModalOpen={setIsModalOpen} />

            {/* <ConfigProvider direction={"rtl"}>
                <AnnouncementModule
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    setToastifyObj={setToastifyObj}
                    announcementData={announcementData}
                    setAddToCurrentWeek={setAddToCurrentWeek}
                />
            </ConfigProvider> */}
        </ConfigProvider>
    );
};

export default HomePage;
