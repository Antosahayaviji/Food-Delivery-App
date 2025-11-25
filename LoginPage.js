import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(username && password){
      navigate("/"); // Navigate to home/profile page
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full max-w-sm p-3 mb-4 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-sm p-3 mb-4 border rounded-lg"
      />
      <button
        onClick={handleLogin}
        className="w-full max-w-sm p-3 bg-black text-white rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
