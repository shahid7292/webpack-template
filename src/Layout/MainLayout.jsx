import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import cookieService from "../Services/Cookies";
import Sidebar from "../Component/Sidebar/Sidebar";
import { appRoutes } from "../routes";

function MainLayout() {
  const isTokenAvailable = cookieService().isTokenAvailable();
  return (
    <div>
      <Sidebar />
      <div>
        <Routes>
          {appRoutes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={
                  isTokenAvailable ? (
                    route.component()
                  ) : (
                    <Navigate to="/login" />
                  )
                }
                key={index}
              />
            );
          })}
          <Route
            path="*"
            replace
            element={
              isTokenAvailable ? (
                <Navigate to="home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default MainLayout;
