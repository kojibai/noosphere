from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load zero-shot classification model
classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

@app.route("/classify", methods=["POST"])
def classify_intent():
    try:
        data = request.json
        user_input = data.get("input", "")

        # Define candidate labels
        candidate_labels = ["analytics", "chat"]

        # Use the zero-shot classifier
        result = classifier(user_input, candidate_labels)
        intent = result['labels'][0]  # Get the top label

        return jsonify({"intent": intent})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
