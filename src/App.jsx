import React from "react";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//import Login from "./Views/Login/Login";
//import Register from "./Views/Login/Register";
//import ForgetPwd from "./Views/Login/ForgetPwd";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="app/*" element={<MainLayout />} />
        <Route path="/" element={<Navigate to="auth/*" />} />
        <Route path="*" replace element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
}

export default App;
