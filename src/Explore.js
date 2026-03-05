import React, { useState } from 'react';
import './Chat.css';

function Explore() {
  const [input, setInput] = useState('');
  const welcomeMsg = `Welcome to Product Explorer! Ask me to find products, compare prices, or show you trending deals across top e-commerce platforms. Try something like "Show me trending smartphones" or "Find shoes under ₹1000".`;

  return (
    <div className="chat-page">
      <div className="chat-header-gradient">
        <div className="chat-header-left">
          <div className="chat-header-avatar">
            <span role="img" aria-label="explore">🔍</span>
          </div>
          <div>
            <div className="chat-header-title">Product Explorer</div>
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
          placeholder="What product are you looking for?"
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

export default Explore; 