# Noosphere Setup Guide

Follow these steps to install and set up Noosphere on your system.

---

## Prerequisites

1. **Node.js (v16 or higher)**: [Install Node.js](https://nodejs.org/)
2. **Python (v3.7 or higher)**: [Install Python](https://www.python.org/)
3. **Redis**: [Install Redis](https://redis.io/docs/getting-started/installation/)
4. **Git**: [Install Git](https://git-scm.com/)

---

## Installation

1. Clone the Noosphere repository:
   ```bash
   git clone https://github.com/your-username/noosphere.git
   cd noosphere
   ```

2. Set up the middleware:
   ```bash
   cd core
   npm install
   ```

3. Set up the AI server:
   ```bash
   cd ../ai
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. Set up the example backends:
   - Analytics backend (Python):
     ```bash
     cd ../ai
     python analytics_backend.py
     ```
   - Chat backend (Node.js):
     ```bash
     cd ../core/chat_backend
     npm install
     node index.js
     ```

---

## Running the System

1. Start the AI server:
   ```bash
   cd ai
   python ai_server.py
   ```

2. Start the middleware:
   ```bash
   cd core
   node index.js
   ```

3. Test the system using `curl` or a frontend application:
   - Analytics request:
     ```bash
     curl -X POST http://localhost:4000/api -H "Content-Type: application/json" -d '{"userInput": "I need to analyze this data."}'
     ```
   - Chat request:
     ```bash
     curl -X POST http://localhost:4000/api -H "Content-Type: application/json" -d '{"userInput": "Start a chat session."}'
     ```

