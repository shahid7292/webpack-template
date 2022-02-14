import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import MainLayout from "./Layout/MainLayout";
import Toaster from "./Component/toaster/Toaster";
import configureStore from "./redux/store";

function App() {
  const storeObject = configureStore();
  const { store, persistor } = storeObject;
  return (
    <div>
      <Provider store={store}>
        <Toaster />
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/*" extact element={<AuthLayout />} />
            <Route path="app/*" element={<MainLayout />} />
            <Route path="*" replace element={<Navigate to="/login" />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
