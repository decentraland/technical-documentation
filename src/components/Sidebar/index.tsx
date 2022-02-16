import React from "react";
import RootDir from "../RootDir";
import "./style.css";

const menu = require("./../../mocks/menu.json");

console.log(menu, 999);

export default function Sidebar() {
  return (
    <aside className="sidebar-container">
      <span>This is a sidebar</span>

      {menu.data &&
        menu.data.map((item: any, key: number) => {
          return (
            <RootDir
              name={item.name}
              icon={item.icon}
              children={item.children}
              key={key}
            />
          );
        })}
    </aside>
  );
}
