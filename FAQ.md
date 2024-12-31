# Frequently Asked Questions (FAQ)

This FAQ provides answers to common questions about Noosphere. If your question isn’t listed here, feel free to open a discussion or issue on our GitHub repository.

---

## General Questions

### What is Noosphere?
Noosphere is a middleware framework that dynamically routes user requests to multiple backend services using AI-based intent classification. It simplifies backend orchestration, improves scalability, and supports modular integration of new services.

### Who is Noosphere for?
Noosphere is designed for developers building scalable applications with multiple backend services. It’s particularly useful for projects requiring intelligent routing and modular architecture.

### How is Noosphere different from traditional middleware?
Unlike traditional middleware, Noosphere uses AI to classify user intents and dynamically route requests. This allows it to adapt to complex use cases and support intelligent decision-making.

---

## Setup and Installation

### What are the system requirements?
- **Node.js**: Version 16 or higher
- **Python**: Version 3.7 or higher
- **Redis**: For caching (optional, planned integration)
- **Git**: For cloning the repository

### How do I install Noosphere?
Refer to the [Setup Guide](docs/setup.md) for detailed installation instructions.

### Can I run Noosphere on Windows/Mac/Linux?
Yes, Noosphere is platform-independent and works on any OS that supports Node.js, Python, and Redis.

---

## Development and Contribution

### How can I contribute to Noosphere?
We welcome contributions! Check out the [Contributing Guide](docs/contributing.md) for details on how to report issues, submit features, and contribute code.

### How do I create a new backend?
Refer to the [Sample Backends Guide](examples/sample-backends.md) for step-by-step instructions on creating and integrating new backend services.

### Are there templates for creating backends?
Yes, the `connectors/` folder contains templates for common frameworks like Flask and Express.js.

---

## Usage and Features

### How does Noosphere classify user intents?
Noosphere uses a Python-based AI server powered by Hugging Face Transformers to classify user inputs into predefined intents (e.g., `analytics`, `chat`).

### What happens if the AI server cannot classify an intent?
If the AI server returns an `unknown` intent, Noosphere responds with an error message (`Service not found`).

### Can I add custom intents?
Yes, you can customize the AI server model or augment its classification logic to handle additional intents. Refer to the AI server documentation for details.

---

## Scaling and Optimization

### Does Noosphere support caching?
Caching integration using Redis is planned. This will improve performance by storing frequent AI server responses and reducing response times.

### Can Noosphere handle high traffic?
Yes, Noosphere’s modular architecture supports horizontal scaling. Each component (middleware, AI server, backends) can run independently and scale as needed.

### Can I deploy Noosphere using containers?
Yes, all components can be containerized using Docker for consistent deployments. Kubernetes can be used for orchestration.

---

## Troubleshooting

### Why am I getting a "Service not found" error?
This error occurs when the AI server returns an intent that is not mapped to any backend in the middleware. Ensure that:
1. The AI server is running and correctly classifies intents.
2. The middleware configuration (`core/index.js`) includes the required backend.

### How do I debug issues with middleware routing?
- Check the middleware logs for error messages.
- Verify the AI server is running and reachable.
- Test each backend individually using `curl` or Postman.

### Where can I report bugs?
You can report bugs by opening an issue on our GitHub repository. Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) for consistency.

---

For additional support, visit the [Noosphere Discussions](https://github.com/kojibai/discussions) or contact the maintainers.

