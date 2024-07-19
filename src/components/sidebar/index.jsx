import React from "react";
import "../../styles/sidebar/index.css";
import { FaHome } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import SideBarIcon from "./SideBarIcon";
import { IoMdCart } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
function SideBar() {
  const { pathname } = useLocation();

  const menus = [
    {
      icon: (
        <h3 style={{ lineHeight: 0, color: "wheat" }}> S. </h3>
      ),
      path: false,
    },
    {
      icon: <FaHome />,
      path: "/",
    },
    {
      icon: <GiKnifeFork />,
      path: "/shop",
    },
    {
      icon: <IoMdCart />,
      path: "/cart",
    },
    {
      icon: <IoLogOutOutline />,
      path: false,
    },
  ];

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        {menus.map((menu, index) => (
          <Link
            className="menu-link"
            key={index}
            to={menu.path}
          >
            <SideBarIcon
              icon={menu.icon}
              active={pathname == menu.path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
