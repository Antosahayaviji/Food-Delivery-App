import React, { useState } from "react";
import { FiArrowLeft, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HelpSupportPage = () => {
  const navigate = useNavigate();
  
  // State to track which section is open
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-gray-700"
      >
        <FiArrowLeft size={20} /> Back
      </button>

      <h2 className="font-bold text-xl mb-4">Help & Support</h2>

      <div className="bg-white rounded-xl shadow mb-4">
        {/* Technical Assistance */}
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection("technical")}
        >
          <span>Technical Assistance</span>
          {openSection === "technical" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "technical" && (
          <div className="p-4 pt-0 text-gray-600 text-sm">
            About some content of technical assistance
          </div>
        )}
        <hr />

        {/* Updates */}
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => toggleSection("updates")}
        >
          <span>Get to know about the updates</span>
          {openSection === "updates" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "updates" && (
          <div className="p-4 pt-0 text-gray-600 text-sm">
            No available updates
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSupportPage;
