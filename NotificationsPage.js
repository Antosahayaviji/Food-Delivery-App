import React from "react";
import {
  FiBox,
  FiDollarSign,
  FiCheck,
  FiAlertCircle,
  FiTrendingUp,
  FiBell,
  FiUser,
  FiClipboard
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const NotificationsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();   // ⭐ Detect current route

  const isActive = (path) => location.pathname === path;

  return (
    <div className="p-5 pb-24 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className="text-green-600 font-semibold">
          Mark all read
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 mb-4">Stay updated with your activities</p>

      {/* 1️⃣ Order Assigned */}
      <div
        className="bg-green-50 p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-green-600"
        onClick={() => navigate("/order-details?order=ORD-2548")}
      >
        <div className="flex items-center gap-3">
          <FiBox size={22} className="text-green-600" />
          <p className="font-semibold">Mark all read</p>
        </div>
        <p className="text-gray-700 mt-1">
          Order #ORD-2848 has been assigned to you
        </p>
        <p className="text-gray-500 text-sm mt-1">5 mins ago</p>
      </div>

      {/* 2️⃣ Payment Received */}
      <div className="bg-green-50 p-4 rounded-xl shadow-md mb-4 border-l-4 border-green-600">
        <div className="flex items-center gap-3">
          <FiDollarSign size={22} className="text-green-600" />
          <p className="font-semibold">Payment Received</p>
        </div>
        <p className="text-gray-700 mt-1">
          $24.50 has been credited to your account
        </p>
        <p className="text-gray-500 text-sm mt-1">1 hour ago</p>
      </div>

      {/* 3️⃣ Delivery Completed */}
      <div
        className="bg-white p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-green-600"
        onClick={() => navigate("/order-details?order=ORD-2846")}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
            <FiCheck size={18} className="text-green-600" />
          </div>
          <p className="font-semibold">Delivery Completed</p>
        </div>
        <p className="text-gray-700 mt-1">
          Order #ORD-2846 marked as completed
        </p>
        <p className="text-gray-500 text-sm mt-1">2 hours ago</p>
      </div>

      {/* 4️⃣ Order Cancelled */}
      <div
        className="bg-white p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-red-600"
        onClick={() => navigate("/order-details?order=ORD-2784&cancelled=true")}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center">
            <FiAlertCircle size={18} className="text-red-600" />
          </div>
          <p className="font-semibold text-black">Order Cancelled</p>
        </div>
        <p className="text-gray-700 mt-1">
          Order #ORD-2784 has been cancelled by customer
        </p>
        <p className="text-gray-500 text-sm mt-1">5 hours ago</p>
      </div>

      {/* 5️⃣ Milestone Reached */}
      <div className="bg-purple-50 p-4 rounded-xl shadow-md mb-4 border-l-4 border-purple-600">
        <div className="flex items-center gap-3">
          <FiTrendingUp size={22} className="text-purple-600" />
          <p className="font-semibold">Milestone Reached!</p>
        </div>
        <p className="text-gray-700 mt-1">
          Congratulations! You completed 100 deliveries
        </p>
        <p className="text-gray-500 text-sm mt-1">1 day ago</p>
      </div>

      {/* 6️⃣ System Update */}
      <div className="bg-green-50 p-4 rounded-xl shadow-md mb-4 border-l-4 border-green-600">
        <div className="flex items-center gap-3">
          <FiBell size={22} className="text-green-600" />
          <p className="font-semibold">System Update</p>
        </div>
        <p className="text-gray-700 mt-1">
          New features added to driver app. Check them out!
        </p>
        <p className="text-gray-500 text-sm mt-1">2 days ago</p>
      </div>

      {/* ⭐ Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-3 flex justify-around border-t">

        {/* HOME */}
        <button
          className={`flex flex-col items-center ${isActive("/") ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => navigate("/")}
        >
          <FiBox size={20} />
          <span className="text-xs">Home</span>
        </button>

        {/* ORDERS */}
        <button
          className={`flex flex-col items-center ${isActive("/orders") ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => navigate("/orders")}
        >
          <FiClipboard size={20} />
          <span className="text-xs">Orders</span>
        </button>

        {/* NOTIFICATIONS - Active */}
        <button
          className={`flex flex-col items-center ${isActive("/notifications") ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => navigate("/notifications")}
        >
          <FiBell size={20} />
          <span className="text-xs">Notification</span>
        </button>

        {/* PROFILE */}
        <button
          className={`flex flex-col items-center ${isActive("/profile") ? "text-blue-600" : "text-gray-600"}`}
          onClick={() => navigate("/profile")}
        >
          <FiUser size={20} />
          <span className="text-xs">Profile</span>
        </button>

      </div>
    </div>
  );
};

export default NotificationsPage;
