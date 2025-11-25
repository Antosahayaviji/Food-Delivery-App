import React, { useState } from "react";
import { 
  FiDollarSign, FiCalendar, FiTrendingUp, FiZap, FiTruck, 
  FiSettings, FiChevronRight, FiHelpCircle, FiLogOut 
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">

      {/* Top Profile Box */}
      <div className="bg-white p-4 rounded-xl mb-6 flex items-center gap-4" style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <div className="w-12 h-12 rounded-full bg-green-400 text-white flex items-center justify-center text-xl font-bold">
          JD
        </div>
        <div>
          <p className="font-semibold text-lg">Driver ID: #DR-5843</p>
          <p className="text-yellow-600 font-semibold flex items-center gap-1 text-sm">
            ⭐ 4.8 (245 ratings)
          </p>
        </div>
      </div>

      {/* Earnings Overview */}
      <p className="font-bold text-lg mb-3">Earnings Overview</p>

      {/* Earnings 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center gap-2 text-gray-700">
            <FiDollarSign /> Today
          </div>
          <p className="text-xl font-bold mt-1">$128.50</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center gap-2 text-gray-700">
            <FiCalendar /> This Week
          </div>
          <p className="text-xl font-bold mt-1">$856.75</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center gap-2 text-gray-700">
            <FiTrendingUp /> This Month
          </div>
          <p className="text-xl font-bold mt-1">$3,245.20</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex items-center gap-2 text-gray-700">
            <FiZap /> Total
          </div>
          <p className="text-xl font-bold mt-1">$12,890.50</p>
        </div>
      </div>

      {/* Vehicle Details */}
      <p className="font-bold text-lg mb-3">Vehicle Details</p>

      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <FiTruck /> Vehicle Type
        </div>
        <p className="font-semibold mb-3">Cargo Van</p>

        <hr className="my-3" />

        <div className="flex justify-between mb-2 text-sm">
          <p>Make & Model</p>
          <p className="font-semibold">Ford Transit 2022</p>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <p>License Plate</p>
          <p className="font-semibold">ABC-1234</p>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <p>Color</p>
          <p className="font-semibold">White</p>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <p>Capacity</p>
          <p className="font-semibold">1,500 kg</p>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <p>Insurance Expiry</p>
          <p className="font-semibold text-green-500">Valid until Dec 2025</p>
        </div>

        {/* Update Vehicle Button inside Vehicle Details */}
        <div
          onClick={() => navigate("/update-vehicle")}
          className="p-3 rounded-xl text-center font-semibold cursor-pointer border border-green-400 text-green-400"
        >
          Update Vehicle Details
        </div>
      </div>

      {/* Performance Status */}
      <p className="font-bold text-lg mb-3">Performance Status</p>

      <div className="bg-white p-4 rounded-xl shadow mb-6 text-sm">
        <div className="flex justify-between mb-2">
          <p>Make & Model</p>
          <p className="font-semibold">245</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>License Plate</p>
          <p className="font-semibold">98.2%</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Color</p>
          <p className="font-semibold">96.5%</p>
        </div>
        <div className="flex justify-between">
          <p>Capacity</p>
          <p className="font-semibold">2,458 km</p>
        </div>
      </div>

      {/* Settings & Support */}
      <p className="font-bold text-lg mb-3">Settings & Support</p>

      <div className="bg-white rounded-xl shadow">
        {/* Settings Row */}
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <div className="flex items-center gap-2"><FiSettings /> Settings</div>
          <FiChevronRight />
        </div>
        <hr />

        {/* Help & Support Row */}
        <div 
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => navigate("/help-support")}
        >
          <div className="flex items-center gap-2"><FiHelpCircle /> Help & Support</div>
          <FiChevronRight />
        </div>
        <hr />

        {/* Logout */}
        <div
          className="flex justify-between items-center p-4 text-red-600 cursor-pointer"
          onClick={() => setShowLogoutConfirm(true)}
        >
          <div className="flex items-center gap-2"><FiLogOut /> Logout</div>
          <FiChevronRight />
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <p className="mb-4 font-semibold">Are you sure you want to logout?</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="w-1/2 p-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/login")}
                className="w-1/2 p-2 bg-red-600 text-white rounded-lg"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfilePage;
