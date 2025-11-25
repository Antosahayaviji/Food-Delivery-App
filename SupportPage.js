import React, { useState, useRef, useEffect } from "react";

const SupportPage = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "👋 Hi! I'm your support assistant. How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to latest message automatically
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  const generateOfflineAIResponse = (userMsg) => {
    const msg = userMsg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "👋 Hello! How can I assist you today?";
    }

    if (msg.includes("delivery")) {
      return "📦 If you are facing delivery issues, try refreshing the order list. Still having trouble? I can help further!";
    }

    if (msg.includes("login")) {
      return "🔑 If you cannot login, please check your username or password. You may also try resetting your account.";
    }

    if (msg.includes("map")) {
      return "🗺️ The map might take a few seconds to load depending on your network. Try reopening it.";
    }

    if (msg.includes("support")) {
      return "🛠️ Our support team is here 24/7. Tell me what issue you're facing!";
    }

    if (msg.includes("order")) {
      return "📋 Your order details can be found in the Active Delivery section. Would you like help tracking it?";
    }

    if (msg.includes("app")) {
      return "📱 If the app is slow, please close and reopen it. This usually fixes performance issues.";
    }

    if (msg.includes("update")) {
      return "🔄 Currently, no updates are available. You will be notified when a new version is released.";
    }

    return "🤔 I understand. Can you explain a little more?";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", content: message };
    setChatHistory((prev) => [...prev, userMsg]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateOfflineAIResponse(message);
      setChatHistory((prev) => [...prev, { role: "assistant", content: aiReply }]);
      setIsTyping(false);
    }, 800); // AI "thinking" animation
  };

  // Optional: voice input
  const handleVoiceInput = () => {
    const recognition = new window.SpeechRecognition() || new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setMessage(spokenText);
    };

    recognition.start();
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">💬 Support Chat</h1>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto mb-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-xl max-w-[80%] break-words ${
              msg.role === "user" ? "bg-blue-200 ml-auto" : "bg-white mr-auto"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {/* Typing Animation */}
        {isTyping && (
          <div className="my-2 p-3 rounded-xl max-w-[80%] bg-white mr-auto">
            🤖 Typing<span className="animate-pulse">...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-3 rounded-xl border border-gray-300"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-3 bg-blue-600 text-white rounded-xl"
        >
          Send
        </button>
        {window.SpeechRecognition || window.webkitSpeechRecognition ? (
          <button
            onClick={handleVoiceInput}
            className="px-4 py-3 bg-green-500 text-white rounded-xl"
          >
            🎤
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SupportPage;
