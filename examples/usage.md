# Examples and Usage Scenarios

This guide provides examples of how to use Noosphere in various scenarios, showcasing its flexibility and dynamic routing capabilities.

---

## Example 1: Analytics Request

### Scenario
A user submits a request to analyze a dataset.

### Steps
1. **User Input**:
   The user sends a request to the middleware:
   ```bash
   curl -X POST http://localhost:4000/api -H "Content-Type: application/json" -d '{"userInput": "I need to analyze this data."}'
   ```

2. **Middleware Action**:
   - The middleware forwards the input to the AI server.
   - The AI server classifies the intent as `analytics`.
   - The middleware routes the request to the Analytics Backend (`http://localhost:5000`).

3. **Analytics Backend Response**:
   The Analytics Backend processes the request and returns a response:
   ```json
   {
     "message": "Analytics processed",
     "data": {
       "query": "I need to analyze this data."
     }
   }
   ```

---

## Example 2: Chat Request

### Scenario
A user starts a chat session.

### Steps
1. **User Input**:
   The user sends a request to the middleware:
   ```bash
   curl -X POST http://localhost:4000/api -H "Content-Type: application/json" -d '{"userInput": "Start a chat session."}'
   ```

2. **Middleware Action**:
   - The middleware forwards the input to the AI server.
   - The AI server classifies the intent as `chat`.
   - The middleware routes the request to the Chat Backend (`http://localhost:3000`).

3. **Chat Backend Response**:
   The Chat Backend processes the request and returns a response:
   ```json
   {
     "message": "You said: \"Start a chat session.\"",
     "response": "Chat response processed"
   }
   ```

---

## Example 3: Unknown Intent

### Scenario
A user sends a request that cannot be classified by the AI server.

### Steps
1. **User Input**:
   The user sends a request to the middleware:
   ```bash
   curl -X POST http://localhost:4000/api -H "Content-Type: application/json" -d '{"userInput": "What is the weather today?"}'
   ```

2. **Middleware Action**:
   - The middleware forwards the input to the AI server.
   - The AI server classifies the intent as `unknown`.
   - The middleware responds with an error message:
     ```json
     {
       "error": "Service not found"
     }
     ```

---

## Adding New Backends

### Scenario
You want to add a new backend for handling a specific intent, e.g., `weather`.

### Steps
1. **Update Middleware Configuration**:
   Add the new backend to the `backends` object in `core/index.js`:
   ```javascript
   const backends = {
       analytics: 'http://localhost:5000',
       chat: 'http://localhost:3000',
       weather: 'http://localhost:6000'
   };
   ```

2. **Create the Backend**:
   Develop the new backend service (e.g., a Weather Backend) to handle `weather` requests.
   Example for a Python Flask backend:
   ```python
   from flask import Flask, request, jsonify

   app = Flask(__name__)

   @app.route("/weather", methods=["POST"])
   def get_weather():
       data = request.json
       return jsonify({"message": "Weather service response", "data": data})

   if __name__ == "__main__":
       app.run(host="0.0.0.0", port=6000)
   ```

3. **Restart the Middleware**:
   Restart the middleware to apply the updated configuration.
   ```bash
   node index.js
   ```

4. **Test the New Backend**:
   Send a request for the new intent:
   ```bash
   curl -X POST http://localhost:4000/api -H "Content-Type: application/json" -d '{"userInput": "Tell me the weather."}'
   ```

---

These examples demonstrate how Noosphere can dynamically route requests and how easy it is to expand its functionality with new backends.

