import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Image } from "lucide-react";

const UpdateVehiclePage = () => {
  const navigate = useNavigate();

  // store uploaded image
  const [vehicleImage, setVehicleImage] = useState(null);

  const handleImageUpload = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/profile")}
        className="flex items-center gap-2 mb-4 text-gray-700"
      >
        <ArrowLeft size={22} /> Back
      </button>

      {/* Title */}
      <h2 className="font-bold text-xl mb-4">Vehicle Details</h2>

      {/* Form Box */}
      <div className="bg-white p-4 rounded-xl shadow mb-4">
        
        {/* Vehicle Name */}
        <label className="font-semibold text-gray-700">Vehicle Name</label>
        <input
          className="w-full p-2 border rounded-lg mt-1"
          defaultValue="Eicher"
        />

        {/* Vehicle Number */}
        <label className="font-semibold text-gray-700 mt-4 block">
          Vehicle Number
        </label>
        <input
          className="w-full p-2 border rounded-lg mt-1"
          defaultValue="AP 12 D 56252"
        />

        {/* Engine CC */}
        <label className="font-semibold text-gray-700 mt-4 block">
          Engine CC
        </label>
        <input
          className="w-full p-2 border rounded-lg mt-1"
          defaultValue="10000 CC"
        />
      </div>

      {/* Vehicle Image Section */}
      <p className="font-semibold text-gray-700 mb-2">Vehicle Image</p>

      {/* Image Upload Box */}
      <div
        onClick={handleImageUpload}
        className="w-40 h-40 bg-white border rounded-xl shadow flex flex-col items-center justify-center mx-auto cursor-pointer overflow-hidden"
      >
        {vehicleImage ? (
          <img
            src={URL.createObjectURL(vehicleImage)}
            alt="Vehicle"
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <Image size={40} className="opacity-70" />
            <p className="mt-2 text-gray-600">Add Image</p>
          </>
        )}
      </div>

      {/* Hidden Input For Upload */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => setVehicleImage(e.target.files[0])}
      />
      
    </div>
  );
};

export default UpdateVehiclePage;
