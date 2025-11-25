import React, { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [brightness, setBrightness] = useState(100);

  const containerClasses = `p-5 min-h-screen ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`;
  const boxClasses = `p-4 rounded-xl shadow mb-4 flex justify-between items-center ${
    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
  }`;
  const brightnessBoxClasses = `p-4 rounded-xl shadow mb-4 ${
    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
  }`;

  return (
    <div className={containerClasses} style={{ filter: `brightness(${brightness}%)` }}>
      {/* Dark Mode Toggle */}
      <div className={boxClasses}>
        <span>Dark Mode Accessibility</span>
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={() => setDarkMode(!darkMode)}
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      {/* Notifications Toggle */}
      <div className={boxClasses}>
        <span>Notifications</span>
        <input 
          type="checkbox" 
          checked={notifications} 
          onChange={() => setNotifications(!notifications)}
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      {/* Brightness Control */}
      <div className={brightnessBoxClasses}>
        <span className="font-semibold">Brightness</span>
        <div className="mt-2 flex gap-2">
          <button
            className={`p-2 rounded ${darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-900"}`}
            onClick={() => setBrightness((prev) => Math.min(prev + 10, 150))}
          >
            Increase
          </button>
          <button
            className={`p-2 rounded ${darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-900"}`}
            onClick={() => setBrightness((prev) => Math.max(prev - 10, 50))}
          >
            Decrease
          </button>
        </div>
        <p className="mt-2 text-sm">{brightness}%</p>
      </div>
    </div>
  );
};

export default SettingsPage;
