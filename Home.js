import React, { useState } from "react";
import { MapPin, Send, DollarSign, TrendingUp, Clock } from "lucide-react";
import ToggleSwitch from "../components/ToggleSwitch";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [driverOnline, setDriverOnline] = useState(true);
  const navigate = useNavigate();

  const boxShadow = { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" };

  return (
    <div className="pb-20 p-5 bg-gray-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-lg font-semibold text-gray-600">Good Morning!</p>
          <p className="text-2xl font-bold text-gray-900">John Driver</p>
        </div>

        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">
          JD
        </div>
      </div>

      {/* Driver Status Box */}
      <div className={`p-5 rounded-xl ${driverOnline ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gray-200 text-gray-700'}`} style={boxShadow}>
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-black">Driver Status</p>
          <ToggleSwitch
            isOn={driverOnline}
            handleToggle={() => setDriverOnline(!driverOnline)}
          />
        </div>

        <p className="mt-1 font-semibold text-black">
          {driverOnline ? "Online" : "Offline"}
        </p>

        {driverOnline && (
          <div className="mt-4 bg-white bg-opacity-20 p-4 rounded-lg flex items-center justify-center" style={boxShadow}>
            <Send size={20} className="text-green-600 mr-2" />
            <p className="font-medium text-white">Ready to accept delivery</p>
          </div>
        )}
      </div>

      {/* Active Delivery */}
      {driverOnline && (
        <>
          <p className="text-lg font-semibold mb-2 text-gray-900">Active Delivery</p>

          <div className="bg-white p-5 rounded-xl mb-6 border-l-4 border-green-400" style={boxShadow}>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-gray-900">Order#ORD-2548</p>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                In Progress
              </span>
            </div>

            <p className="text-gray-600 mb-3">2 packages</p>

            <div className="flex items-start mb-3">
              <MapPin size={20} className="text-green-600 mt-1" />
              <div className="ml-2">
                <p className="font-semibold text-gray-900">Pickup</p>
                <p className="text-gray-600">123 Hotel Arya ST, Industrial Area</p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <MapPin size={20} className="text-red-600 mt-1" />
              <div className="ml-2">
                <p className="font-semibold text-gray-900">Delivery</p>
                <p className="text-gray-600">456 Customer Ave, Downtown</p>
              </div>
            </div>

            <div className="flex justify-between mt-3">
              <button
                onClick={() => navigate("/order-details")}
                className="w-[48%] py-2 rounded-lg font-semibold text-black"
                style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                View Details
              </button>

              <button
                onClick={() => navigate("/support")}
                className="w-[48%] py-2 rounded-lg font-semibold text-black"
                style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
              >
                Support
              </button>
            </div>
          </div>
        </>
      )}

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl flex flex-col" style={boxShadow}>
          <div className="flex items-center gap-2">
            <DollarSign size={22} className="text-green-500" />
            <p className="font-semibold text-gray-700">Today's Earning</p>
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-900">128.50$</p>
        </div>

        <div className="bg-white p-4 rounded-xl flex flex-col" style={boxShadow}>
          <div className="flex items-center gap-2">
            <TrendingUp size={22} className="text-green-500" />
            <p className="font-semibold text-gray-700">Completed</p>
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-900">12 Orders</p>
        </div>

        <div className="bg-white p-4 rounded-xl flex flex-col" style={boxShadow}>
          <div className="flex items-center gap-2">
            <Clock size={22} className="text-green-500" />
            <p className="font-semibold text-gray-700">Hours Online</p>
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-900">6.5 hrs</p>
        </div>

        <div className="bg-white p-4 rounded-xl flex flex-col" style={boxShadow}>
          <div className="flex items-center gap-2">
            <MapPin size={22} className="text-green-500" />
            <p className="font-semibold text-gray-700">Distance</p>
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-900">2.4 km</p>
        </div>
      </div>

      {/* Quick Actions */}
      <p className="text-lg font-semibold mb-2 text-gray-900">Quick Actions:</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div 
          onClick={() => navigate("/navigation")} 
          className="p-5 rounded-xl text-center cursor-pointer hover:bg-gray-100"
          style={boxShadow}
        >
          <p className="font-semibold text-gray-900">View Map</p>
        </div>

        <div 
          onClick={() => navigate("/support")} 
          className="p-5 rounded-xl text-center cursor-pointer hover:bg-gray-100"
          style={boxShadow}
        >
          <p className="font-semibold text-gray-900">Support</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
