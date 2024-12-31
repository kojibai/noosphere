"""
Flask Connector for Noosphere
-----------------------------
Handles communication with Flask-based backend services.

"""

import requests

class FlaskConnector:
    def __init__(self, base_url):
        self.base_url = base_url

    def send_request(self, endpoint, payload):
        """
        Sends a request to the Flask backend.

        Args:
            endpoint (str): The Flask API endpoint to call.
            payload (dict): The data to send with the request.

        Returns:
            Response: The response from the Flask backend.
        """
        url = f"{self.base_url}/{endpoint}"
        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error communicating with Flask backend: {e}")
            return {"error": str(e)}
