# Noosphere API Reference

This document provides an overview of the API endpoints for the Noosphere system, including the middleware and example backends.

---

## Middleware API

### `/api`
- **Method:** POST
- **Description:** Routes requests to the appropriate backend based on AI-classified intent.
- **Request Body:**
  ```json
  {
    "userInput": "I need to analyze this data."
  }
  ```
- **Response:**
  - On success:
    ```json
    {
      "message": "Request routed to http://localhost:5000"
    }
    ```
  - On failure:
    ```json
    {
      "error": "Service not found"
    }
    ```

---

## Analytics Backend API

### `/analytics`
- **Method:** POST
- **Description:** Processes analytics-related requests.
- **Request Body:**
  ```json
  {
    "query": "Analyze this dataset"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Analytics processed",
    "data": {
      "query": "Analyze this dataset"
    }
  }
  ```

---

## Chat Backend API

### `/chat`
- **Method:** POST
- **Description:** Handles chat-related requests.
- **Request Body:**
  ```json
  {
    "message": "Hello!"
  }
  ```
- **Response:**
  ```json
  {
    "message": "You said: \"Hello!\"",
    "response": "Chat response processed"
  }
  ```

