import React from "react";
import SideBar from "./sidebar";
import "../styles/layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <SideBar />
      <div className="page-wrapper">{children}</div>
    </div>
  );
}

export default Layout;
