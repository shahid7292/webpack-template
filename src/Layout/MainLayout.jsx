import React from "react";
import HomePage from "../Views/Home/HomePage";
import MainLayoutRoutes from "./MainLayoutRoutes";
function MainLayout() {
  return (
    <>
      <div>
        <HomePage />
      </div>
      <div>
        <MainLayoutRoutes />
      </div>
    </>
  );
}

export default MainLayout;
