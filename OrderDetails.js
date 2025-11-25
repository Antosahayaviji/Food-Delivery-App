import React from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Package,
  Phone,
  DollarSign,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 pb-24">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ArrowLeft
          size={24}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div>
          <p className="text-xl font-bold">Order Details</p>
          <p className="text-gray-500">ORD-2548</p>
        </div>
      </div>

      <hr className="mb-4" />

      {/* Order Status */}
      <div
        className="p-4 rounded-xl mb-4 text-center"
        style={{
          backgroundColor: "#F6FFF9",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderLeft: "4px solid #22C55E",
        }}
      >
        <p className="text-gray-600 font-semibold">Order Status</p>
        <p className="text-green-600 font-bold text-lg">In Progress</p>
      </div>

      {/* Package Information */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <p className="text-lg font-semibold mb-4">Package Information</p>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Package size={18} />
            <p>Number of Packages</p>
          </div>
          <p className="font-semibold">2</p>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <p>Distance</p>
          </div>
          <p className="font-semibold">8.5 km</p>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <p>Estimated Time</p>
          </div>
          <p className="font-semibold">30 mins</p>
        </div>

        {/* Payment Inside */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t">
          <div className="flex items-center gap-2">
            <DollarSign size={20} />
            <p className="text-lg font-semibold">Payment</p>
          </div>
          <div className="flex items-center gap-1 font-semibold text-green-600">
            <DollarSign size={18} /> 24.50
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        <p className="text-lg font-semibold mb-2">Locations</p>

        {/* Pickup */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin size={20} className="text-green-600" />
          <div>
            <p className="font-semibold">Pickup</p>
            <p className="text-gray-600">123 Hotel Arya St, Industrial Area</p>
            <p className="text-green-600 flex items-center gap-1 mt-1">
              <Phone size={16} /> Call Sender
            </p>
            <p className="text-sm text-gray-500">8.5 km travel distance</p>
          </div>
        </div>

        {/* Delivery */}
        <div className="flex items-start gap-2">
          <MapPin size={20} className="text-red-600" />
          <div>
            <p className="font-semibold">Delivery</p>
            <p className="text-gray-600">456 Customer Ave, Downtown</p>
            <p className="text-green-600 flex items-center gap-1 mt-1">
              <Phone size={16} /> Call Recipient
            </p>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <p className="text-lg font-semibold mb-3">Customer Information</p>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={24} />
          </div>
          <div>
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-gray-600">+91 1234567890</p>
          </div>
        </div>

        <hr className="my-2" />

        <p className="text-lg font-semibold">Special Instructions</p>
        <p className="text-gray-600">
          Please call upon arrival. Leave at front desk if not availabel.
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-gray-200 rounded-xl font-semibold"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/navigation")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold"
        >
          Start Navigation
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
