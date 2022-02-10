import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { appRoutes } from "../routes";
import cookieService from "../Services/Cookies";
const MainLayoutRoutes = () => {
  const isTokenAvailable = cookieService().isTokenAvailable();
  return (
    <>
      <Routes>
        {appRoutes.map((route, index) => {
          const { path, component: Component } = route;
          return (
            <Route
              exact
              path={path}
              element={
                isTokenAvailable ? (
                  <Component key={index} />
                ) : (
                  <Navigate to="/auth/login" />
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
              <Navigate to="Home" />
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default MainLayoutRoutes;
