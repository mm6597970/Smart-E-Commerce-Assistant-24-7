import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const platforms = [
  {
    name: 'Amazon',
    icon: '🛒',
    tagline: 'Everything Store',
    color: '#ff8800',
  },
  {
    name: 'Flipkart',
    icon: '🏪',
    tagline: 'Big Billion Days',
    color: '#3574e6',
  },
  {
    name: 'Meesho',
    icon: '🛍️',
    tagline: 'Lowest Prices',
    color: '#f24ca0',
  },
  {
    name: 'Walmart',
    icon: '🏬',
    tagline: 'Save Money',
    color: '#2563eb',
  },
];

function LogoSlider() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const total = platforms.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (idx) => setCurrent(idx);

  // For infinite loop effect
  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(platforms[(current + i) % total]);
    }
    return arr;
  };

  return (
    <div className="slider-card-outer">
      <h2 className="slider-heading">We Search Across Top Platforms</h2>
      <div className="logo-slider-section">
        <div className="logo-slider">
          {getVisible().map((platform, idx) => (
            <div
              key={platform.name}
              className="slider-card"
              style={{ background: platform.color }}
            >
              <div className="slider-emoji" aria-label={platform.name}>{platform.icon}</div>
              <div className="slider-title slider-title-bold">{platform.name}</div>
              <div className="slider-tagline slider-tagline-white">{platform.tagline}</div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {platforms.map((_, idx) => (
            <span
              key={idx}
              className={`slider-dot${idx === current ? ' active' : ''}`}
              onClick={() => goTo(idx)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: '🔍',
      title: 'Smart Search',
      desc: 'AI-powered product discovery across multiple platforms',
    },
    {
      icon: '💰',
      title: 'Best Prices',
      desc: 'Compare prices and find the best deals automatically',
    },
    {
      icon: '⚡',
      title: 'Instant Results',
      desc: 'Get product recommendations in seconds',
    },
    {
      icon: '🛡️',
      title: 'Secure Shopping',
      desc: 'Your data and searches are always private and secure',
    },
    {
      icon: '🎯',
      title: 'Personalized Deals',
      desc: 'Get recommendations tailored to your preferences',
    },
    {
      icon: '🌐',
      title: 'Multi-Platform Support',
      desc: 'Search and compare across all major e-commerce sites',
    },
  ];
  return (
    <section className="benefits-section">
      <h2 className="benefits-heading">Why Choose Our Smart Assistant?</h2>
      <div className="benefits-cards">
        {benefits.map((b) => (
          <div className="benefit-card" key={b.title}>
            <div className="benefit-icon">{b.icon}</div>
            <div className="benefit-title">{b.title}</div>
            <div className="benefit-desc">{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Shop Smarter with AI</h1>
        <p className="hero-subtitle">
          Compare products across multiple e-commerce platforms instantly. Our AI assistant helps you find the best deals and makes shopping effortless.
        </p>
        <div className="chatbot-buttons-section">
          <button className="main-chatbot-btn" onClick={() => navigate('/chat')}>
            <span role="img" aria-label="chat">💬</span> Chat with AI Assistant
          </button>
          <button className="main-chatbot-btn outline" onClick={() => navigate('/explore')}>
            <span role="img" aria-label="explore">🔍</span> Explore Products
          </button>
        </div>
      </section>
      {/* Logo Slider Section */}
      <div id="platforms"><LogoSlider /></div>
      {/* Benefits Section */}
      <div id="features"><BenefitsSection /></div>
    </div>
  );
}

export default Home; 