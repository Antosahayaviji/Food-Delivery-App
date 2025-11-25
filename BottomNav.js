import React from "react";
import { FiHome, FiShoppingBag, FiBell, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-3 flex justify-around items-center z-50">

      {/* Home */}
      <button
        onClick={() => navigate("/")}
        className="flex flex-col items-center text-gray-700"
      >
        <FiHome size={22} />
        <span className="text-xs mt-1">Home</span>
      </button>

      {/* Orders */}
      <button
        onClick={() => navigate("/orders")}
        className="flex flex-col items-center text-gray-700"
      >
        <FiShoppingBag size={22} />
        <span className="text-xs mt-1">Orders</span>
      </button>

      {/* Notifications */}
      <button
        onClick={() => navigate("/notifications")}
        className="flex flex-col items-center text-gray-700"
      >
        <FiBell size={22} />
        <span className="text-xs mt-1">Notification</span>
      </button>

      {/* Profile */}
      <button
        onClick={() => navigate("/profile")}
        className="flex flex-col items-center text-gray-700"
      >
        <FiUser size={22} />
        <span className="text-xs mt-1">Profile</span>
      </button>

    </div>
  );
};

export default BottomNav;
