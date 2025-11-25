import React from "react";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
          isOn ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
