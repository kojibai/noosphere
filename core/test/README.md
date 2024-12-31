# Tests: Noosphere Testing Guide

The **tests** folder contains unit tests, integration tests, and end-to-end tests for the Noosphere middleware and its components. This guide explains how to run, write, and manage tests to ensure the stability and reliability of Noosphere.

---

## Folder Structure

```plaintext
tests/
├── unit/                 # Unit tests for individual components
├── integration/          # Tests for interactions between middleware and backends
├── e2e/                  # End-to-end tests for the complete system
├── fixtures/             # Mock data and configurations for testing
└── README.md             # This documentation
```

---

## Prerequisites

### 1. Install Dependencies
Ensure all dependencies for the middleware and AI server are installed:

#### Middleware:
```bash
cd core
npm install
```

#### AI Server:
```bash
cd ../ai
pip install -r requirements.txt
```

### 2. Install Testing Tools
#### For Node.js (Middleware):
```bash
npm install --save-dev jest supertest
```

#### For Python (AI Server):
```bash
pip install pytest pytest-mock
```

---

## Running Tests

### 1. Middleware Tests
#### Run All Tests:
```bash
cd core
npm test
```

#### Run Specific Test Files:
```bash
npx jest tests/unit/example.test.js
```

### 2. AI Server Tests
#### Run All Tests:
```bash
cd ../ai
pytest
```

#### Run Specific Test Files:
```bash
pytest tests/unit/test_example.py
```

---

## Writing Tests

### 1. Unit Tests
- Focus on testing individual functions or methods in isolation.
- Use mock data from the `fixtures/` folder for consistency.

#### Example (Node.js):
**File**: `tests/unit/example.test.js`
```javascript
const request = require('supertest');
const app = require('../../index');

describe('Middleware Unit Tests', () => {
  it('should return 404 for unknown service', async () => {
    const res = await request(app)
      .post('/api')
      .send({ userInput: 'Unknown intent' });
    expect(res.statusCode).toEqual(404);
    expect(res.body.error).toBe('Service not found');
  });
});
```

#### Example (Python):
**File**: `tests/unit/test_example.py`
```python
from app import app
import pytest

def test_unknown_intent():
    client = app.test_client()
    response = client.post('/classify', json={"input": "Unknown intent"})
    assert response.status_code == 200
    assert response.json["intent"] == "unknown"
```

### 2. Integration Tests
- Test interactions between the middleware and backends.
- Simulate realistic request/response scenarios.

### 3. End-to-End Tests
- Test the full workflow from user input to backend response.
- Use tools like `curl` or a testing framework (e.g., Cypress).

---

## Test Coverage

### Generate Coverage Report
#### For Middleware:
```bash
npx jest --coverage
```

#### For AI Server:
```bash
pytest --cov=.
```

### View Coverage Report
- Middleware: Open `core/coverage/index.html` in your browser.
- AI Server: Open the generated coverage report in your Python project.

---

## Contributing Tests
1. Add your tests to the appropriate folder (`unit`, `integration`, or `e2e`).
2. Use descriptive file and test names.
3. Ensure all tests pass before submitting a pull request.

---

For more details, refer to the [Contributing Guide](../docs/contributing.md).

