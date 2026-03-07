🛍️ Smart E-Commerce Assistant An AI-powered shopping companion designed to help users navigate multiple e-commerce platforms effortlessly. This project uses Large Language Models (LLMs) to provide detailed product summaries, price estimates, and buying guides in a human-friendly format.

🚀 Features AI-Powered Summaries: Get instant, structured details about any product (Key features, Technical specs, Pros/Cons).

Price Intelligence: View approximate price ranges and marketplace averages.

Smart Search Links: Automatically generates optimized search queries for platforms like Amazon and Flipkart.

Modern Chat UI: A clean, responsive React-based interface for a seamless user experience.

Markdown Support: AI responses are beautifully formatted for readability.

🛠️ Tech Stack Frontend:

React.js

CSS3 (Custom styles)

react-markdown (for rendering AI responses)

Backend:

Python 3.x

Flask (REST API)

Flask-CORS

Google Generative AI (Gemini 1.5 Flash)

⚙️ Setup & Installation

Backend Setup (Python/Flask) Navigate to the backend directory.
Create a virtual environment:

Bash python -m venv .venv source .venv/bin/activate # On Windows: .venv\Scripts\activate Install dependencies:

Bash pip install flask flask-cors google-generativeai Add your Gemini API Key in app.py.

Run the server:

Bash python app.py 2. Frontend Setup (React) Navigate to the frontend directory.

Install dependencies:

Bash npm install npm install react-markdown Start the development server:

Bash npm start 🔮 Roadmap: Agentic AI Integration "We are currently in the Development Phase. Our next major milestone is the transition from a "Chatbot" to a Full Agentic AI System."

What does this mean? Soon, the assistant won't just talk about products—it will act on your behalf.

Autonomous Research: The AI agent will use web-browsing tools to fetch real-time prices from live websites.

Task Execution: It will be able to filter products based on real-time availability and user-specific constraints.

Comparison Logic: Instead of a static summary, the agent will perform deep-dive comparisons across multiple browser tabs simultaneously to find the absolute best deal.