import React, { useState } from "react";
import {
  FiNavigation2,
  FiBox,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiCheck,
  FiArrowLeft,
} from "react-icons/fi";

const OrderPage = () => {
  const [tab, setTab] = useState("active"); // 'active' | 'completed' | 'cancelled'
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailOrderId, setDetailOrderId] = useState(null);

  // sample data
  const activeOrders = [
    {
      id: "ORD-2548",
      packages: "2 packages",
      pickup: "123 Hotel Arya St, Industrial Area",
      delivery: "456 Customer Ave, Downtown",
      distance: "8.5 km",
      time: "30 mins",
      amount: "24.50",
      status: "In Progress",
      statusColor: "bg-green-100 text-green-800", // updated from dark green to light green
    },
    {
      id: "ORD-2848",
      packages: "1 package",
      pickup: "789 Store Rd, Mall Area",
      delivery: "321 Residential St, Suburban",
      distance: "12.2 km",
      time: "45 mins",
      amount: "18.00",
      status: "Pending Pickup",
      statusColor: "bg-yellow-100 text-yellow-800", // updated to match image
    },
  ];

  const completedOrders = [
    {
      id: "ORD-2846",
      packages: "3 packages",
      from: "555 Depot Ave",
      to: "888 Oak Street",
      distance: "8.5 km",
      amount: "24.50",
      when: "2 hours ago",
    },
    {
      id: "ORD-2847",
      packages: "2 packages",
      from: "200 Supply Rd",
      to: "900 Market St",
      distance: "10.2 km",
      amount: "18.75",
      when: "5 hours ago",
    },
    {
      id: "ORD-2456",
      packages: "3 packages",
      from: "555 Lulu Mall Avenue",
      to: "437 Pine Street",
      distance: "10.5 km",
      amount: "20.45",
      when: "6 hours ago",
    },
  ];

  const cancelledOrders = [
    {
      id: "ORD-3001",
      packages: "packages",
      from: "555 Dept AVe",
      to: "888 Oak Street",
      reason: "Customer cancelled",
    },
  ];

  const openDetails = (orderId) => {
    setDetailOrderId(orderId);
    setDetailOpen(true);
  };

  const CompletedOrderDetails = ({ order }) => {
    if (!order) return null;

    return (
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setDetailOpen(false)}
            className="p-2 rounded-md bg-gray-100"
            aria-label="Back"
          >
            <FiArrowLeft size={20} />
          </button>
          <div>
            <p className="text-xl font-bold">Order Details</p>
            <p className="text-gray-500">{order.id}</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="bg-white p-4 rounded-xl shadow-md mb-4 text-center">
          <p className="text-lg font-semibold">Order Status</p>
          <p className="text-green-600 font-bold flex items-center justify-center gap-2">
            <FiCheck /> Completed
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md mb-4">
          <p className="text-lg font-semibold mb-3">Package Information</p>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <FiBox size={18} />
              <p>Number of Packages</p>
            </div>
            <p className="font-semibold">{order.packages}</p>
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <FiMapPin size={18} />
              <p>Distance</p>
            </div>
            <p className="font-semibold">{order.distance}</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiDollarSign size={18} />
              <p className="font-semibold">Payment</p>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <FiDollarSign size={16} /> {order.amount}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <p className="text-lg font-semibold mb-3">Locations</p>

          <div className="mb-3">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-green-600" />
              <p className="font-semibold">Pickup</p>
            </div>
            <p className="text-gray-700 mt-1">{order.from}</p>
            <p className="text-sm text-gray-500 mt-1">{order.distance} travel distance</p>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-red-600" />
              <p className="font-semibold">Delivery</p>
            </div>
            <p className="text-gray-700 mt-1">{order.to}</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              setDetailOpen(false);
              setTab("active");
            }}
            className="w-full bg-gray-200 px-4 py-3 rounded-xl font-semibold"
          >
            Back to orders
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 pb-24 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">My Orders</h1>
      <p className="text-gray-600 mt-1 mb-4">Track and manage your deliveries</p>

      {/* Tabs */}
      <div className="flex gap-3 mb-5">
        {[
          { key: "active", label: `Active (${activeOrders.length})` },
          { key: "completed", label: `Completed (${completedOrders.length})` },
          { key: "cancelled", label: `Cancelled (${cancelledOrders.length})` },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => {
              setTab(t.key);
              setDetailOpen(false);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              tab === t.key
                ? "bg-white text-gray-900 shadow-md border border-gray-300"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {detailOpen && tab === "completed" ? (
        <CompletedOrderDetails
          order={completedOrders.find((o) => o.id === detailOrderId)}
        />
      ) : (
        <>
          {/* Active Tab */}
          {tab === "active" && (
            <div>
              {activeOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl shadow-md p-4 mb-4" // updated shadow
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{order.id}</h3>
                    <span
                      className={`${order.statusColor} px-3 py-1 rounded-full text-sm`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-2">{order.packages}</p>

                  <div className="flex items-start mb-2">
                    <FiMapPin className="text-green-600 mt-1" />
                    <div className="ml-2">
                      <p className="font-semibold">Pickup</p>
                      <p className="text-gray-600 text-sm">{order.pickup}</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-3">
                    <FiMapPin className="text-red-600 mt-1" />
                    <div className="ml-2">
                      <p className="font-semibold">Delivery</p>
                      <p className="text-gray-600 text-sm">{order.delivery}</p>
                    </div>
                  </div>

                  <hr className="my-3" />

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <FiMapPin /> <span>{order.distance}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiClock /> <span>{order.time}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiDollarSign /> <span>{order.amount}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => {
                        window.location.href = "/order-details";
                      }}
                      className="bg-white border border-green-500 text-green-600 w-[48%] px-4 py-2 rounded-lg"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => {
                        window.location.href = "/navigation";
                      }}
                      className="bg-green-500 text-white w-[48%] px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                    >
                      <FiNavigation2 /> Navigate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Completed & Cancelled Tabs remain the same but updated shadow */}
          {tab === "completed" && (
            <div>
              {completedOrders.map((c) => (
                <div key={c.id} className="bg-white rounded-xl shadow-md p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{c.id}</h3>
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <FiCheck /> Completed
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <FiBox />
                    <span className="text-gray-700">{c.packages}</span>
                  </div>

                  <div className="mt-2 mb-2">
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-gray-800" />
                      <span>From {c.from}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <FiMapPin className="text-red-600" />
                      <span>To: {c.to}</span>
                    </div>
                  </div>

                  <hr className="my-3" />

                  <div className="flex justify-between text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <FiMapPin /> <span>{c.distance}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FiDollarSign /> <span>{c.amount}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FiClock /> <span>{c.when}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => openDetails(c.id)}
                      className="w-full bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "cancelled" && (
            <div>
              {cancelledOrders.map((c) => (
                <div key={c.id} className="bg-white rounded-xl shadow-md p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{c.id}</h3>
                    <span className="flex items-center gap-1 text-red-500 font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 8.586L15.657 2.93l1.414 1.414L11.414 10l5.657 5.657-1.414 1.414L10 11.414l-5.657 5.657-1.414-1.414L8.586 10 2.93 4.343l1.414-1.414L10 8.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Cancelled
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <FiBox /> <span>{c.packages}</span>
                  </div>

                  <p className="text-gray-700 mt-1">From: {c.from}</p>
                  <p className="text-gray-700 mt-1">To: {c.to}</p>

                  <hr className="my-3" />

                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <span>{c.reason}</span>
                    <span>5 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPage;
