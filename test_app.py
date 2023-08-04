import requests
import json

# Replace this URL with your Flask API endpoint
# url = 'http://127.0.0.1:8000/orders/place-order'
url = 'https://azuresampleapp.azurewebsites.net/orders/place-order'

# JSON object to be sent to the API
data_to_send = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}

# Convert the data to JSON format
json_data = json.dumps(data_to_send)

# Set the headers to indicate the content type as JSON
headers = {'Content-Type': 'application/json'}
print(json_data)
# Make the POST request
response = requests.post(url, data=json_data, headers=headers)

# Check the response
if response.status_code == 200:
    print("Data sent successfully.")
    print(response.text)
else:
    print(response)
    print("Failed to send data.")
