from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analytics", methods=["POST"])
def process_analytics():
    data = request.json
    # Simulate processing analytics data
    return jsonify({"message": "Analytics processed", "data": data})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
