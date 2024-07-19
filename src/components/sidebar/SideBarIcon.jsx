import React from "react";
import "../../styles/sidebar/SideBarIcon.css";

function SideBarIcon({ icon, active }) {
  return (
    <div className={`sidebar-icon ${active && "menu-active"} `}>
      {icon}
    </div>
  );
}

export default SideBarIcon;
