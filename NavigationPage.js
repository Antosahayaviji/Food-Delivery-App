import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Check,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigationPage = () => {
  const navigate = useNavigate();
  const [picked, setPicked] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
      return "Hello driver! How can I assist you today?";
    }
    if (message.includes("where") && message.includes("pickup")) {
      return "Your pickup location is: 123 Warehouse St, Industrial Area.";
    }
    if (message.includes("customer") || message.includes("delivery")) {
      return "Customer address: 456 Customer Ave, Downtown.";
    }
    if (message.includes("distance")) {
      return "Your distance to customer is 8.5 km.";
    }
    if (message.includes("thanks") || message.includes("thank you")) {
      return "Happy to help! Ride safe 🚀";
    }

    return "I understand your message. I’m here to help with navigation or delivery support!";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg = { sender: "user", text: inputText };
    const aiMsg = { sender: "ai", text: getAIResponse(inputText) };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div className="p-5 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <ArrowLeft
          size={24}
          className="cursor-pointer"
          onClick={() => navigate("/order-details")}
        />
        <div>
          <p className="text-xl font-bold">Order Details</p>
          <p className="text-gray-500">ORD-2548</p>
        </div>
      </div>

      {/* Map Grid */}
      <div className="bg-gray-200 h-64 rounded-xl relative overflow-hidden mb-6">
        <div className="absolute top-3 left-3 right-3 bg-white rounded-xl shadow p-3 flex justify-between text-center">
          <div>
            <p className="text-sm text-gray-500">Distance</p>
            <p className="text-lg font-bold">8.5 km</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">ETA</p>
            <p className="text-lg font-bold text-green-600">15 mins</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Speed</p>
            <p className="text-lg font-bold">45 km/h</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 flex flex-col items-center">
          <MapPin size={28} className="text-green-600" />
          <p className="text-xs font-semibold">You</p>
        </div>

        <div className="absolute top-20 right-10 flex flex-col items-center">
          <MapPin size={28} className="text-red-600" />
          <p className="text-xs font-semibold">Pickup</p>
        </div>
      </div>

      {/* Pickup Location */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="text-green-600" />
          <div>
            <p className="font-semibold">Pickup Location</p>
            <p className="text-gray-600 text-sm">
              123 Warehouse St, Industrial Area
            </p>
          </div>
        </div>
        <div className="p-2 rounded-full bg-gray-200">
          <Phone size={20} />
        </div>
      </div>

      {/* Delivery Location */}
      <div className="flex items-start gap-2 mb-6">
        <MapPin className="text-red-600" />
        <div>
          <p className="font-semibold">Delivery Location</p>
          <p className="text-gray-600 text-sm">
            456 Customer Ave, Downtown
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setChatOpen(true)}
          className="px-5 py-3 border-2 border-green-600 text-green-600 rounded-xl font-semibold flex items-center gap-2 bg-white"
        >
          <MessageCircle size={20} /> Message
        </button>

        <button
          onClick={() => setPicked(true)}
          className="px-5 py-3 bg-green-600 text-white rounded-xl font-semibold flex items-center gap-2"
        >
          {picked ? (
            <>
              <Check size={20} /> Picked up
            </>
          ) : (
            <>
              <Send size={20} /> Start Navigation
            </>
          )}
        </button>
      </div>

      {/* Chat Box */}
      {chatOpen && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow">
          <p className="font-semibold mb-3">AI Chat Assistant</p>

          <div className="h-40 overflow-y-auto border rounded-md p-2 mb-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-600 text-white rounded-lg"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-3 flex justify-around">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center text-blue-600"
        >
          <Home size={26} />
          <span className="text-xs mt-1 font-semibold">Home</span>
        </button>
      </div>
    </div>
  );
};

export default NavigationPage;
