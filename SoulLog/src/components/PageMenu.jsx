import React, { useContext } from "react";
import { Menu } from "antd";
import { MenuContext } from "../store/Menu/MenuContext";
import { menuItems } from "../constants/menuItems";

const PageMenu = () => {
    const { currentMenu, setCurrentMenu } = useContext(MenuContext);

    const onClick = (e) => {
        setCurrentMenu(e.key);
    };

    return (
        <div style={{ padding: 20 }}>
            <Menu
                onClick={onClick}
                selectedKeys={[currentMenu]}
                mode="horizontal"
                items={menuItems}
            />
        </div>
    );
};

export default PageMenu;
