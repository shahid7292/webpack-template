import React from "react";
import { NavLink as NavLinkRRD } from "react-router-dom";
import "./sidebarStyle.scss";

import { sidebarRoutes } from "../../routes";
const Sidebar = () => {
  const createLinks = () => {
    return (
      <div className="outer-main">
        {sidebarRoutes.map((route, index) => {
          return (
            <NavLinkRRD
              to={`/app/${route.path}`}
              className={({ isActive }) =>
                `sidebar-option  ${isActive ? "active-sidebar" : ""}`
              }
              key={index}
            >
              {route.name}
            </NavLinkRRD>
          );
        })}
      </div>
    );
  };
  return (
    <div className="sidenav-main">
      <div>{createLinks()}</div>
    </div>
  );
};

export default Sidebar;
