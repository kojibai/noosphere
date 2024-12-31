"""
Connector Template for Noosphere
--------------------------------
Use this template to create new connectors for backend frameworks.

"""

import requests

class ConnectorTemplate:
    def __init__(self, base_url):
        self.base_url = base_url

    def send_request(self, endpoint, payload):
        """
        Sends a request to the backend service.

        Args:
            endpoint (str): The API endpoint to call.
            payload (dict): The data to send with the request.

        Returns:
            Response: The response from the backend.
        """
        url = f"{self.base_url}/{endpoint}"
        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error communicating with backend: {e}")
            return {"error": str(e)}
