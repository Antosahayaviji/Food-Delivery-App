import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderDetails from "./pages/OrderDetails";
import NavigationPage from "./pages/NavigationPage";
import OrderPage from "./pages/OrderPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateVehiclePage from "./pages/UpdateVehiclePage";
import SettingsPage from "./pages/SettingsPage";
import { AppProvider, AppContext } from "./context/AppContext";

import HelpSupportPage from "./pages/HelpSupportPage";
import LoginPage from "./pages/LoginPage";
import SupportPage from "./pages/SupportPage";



const AppWrapper = () => {
  const { darkMode, brightness } = useContext(AppContext);

  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}
      style={{ filter: `brightness(${brightness}%)` }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/navigation" element={<NavigationPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/update-vehicle" element={<UpdateVehiclePage />} />
         <Route path="/settings" element={<SettingsPage />} />
           <Route path="/help-support" element={<HelpSupportPage />} />
        <Route path="/login" element={<LoginPage />} />


  <Route path="/support" element={<SupportPage />} />  {/* <-- New route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <AppWrapper />
  </AppProvider>
);

export default App;
