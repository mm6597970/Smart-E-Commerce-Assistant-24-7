import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [input, setInput] = useState('');
  const welcomeMsg = `Hi! I'm your Smart E-commerce Assistant. I can help you find products across multiple platforms. Try asking me something like "Find me a water bottle under ₹500" or "Show me the best laptops for students".`;

  return (
    <div className="chat-page">
      <div className="chat-header-gradient">
        <div className="chat-header-left">
          <div className="chat-header-avatar">
            <span role="img" aria-label="chat">💬</span>
          </div>
          <div>
            <div className="chat-header-title">Smart Shopping Assistant</div>
            <div className="chat-header-status">Online • Ready to help</div>
          </div>
        </div>
        <button className="chat-header-close" onClick={() => window.history.back()}>×</button>
      </div>
      <div className="chat-body">
        <div className="chat-bubble-welcome">{welcomeMsg}</div>
      </div>
      <div className="chat-input-row-main">
        <input
          className="chat-input-main"
          type="text"
          placeholder="Ask me about any product..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="chat-send-main">
          <span role="img" aria-label="send">✈️</span>
        </button>
      </div>
    </div>
  );
}

export default Chat; 