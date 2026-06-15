from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load a pre-trained machine learning model
model = joblib.load("malware_model.pkl")

@app.route('/', methods=['GET'])
def index():
    return open('index.html').read()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    hash_value = data['hash']
    time = data['time']

    hash_len = len(hash_value)

    # Preprocess the data if needed
    # Here, you would convert the hash to its numerical representation
    # and perform any other necessary preprocessing.

    # Make predictions using the pre-trained model
    prediction = model.predict([[hash_len, time]])[0]

    result = {
        "prediction": "Malware" if prediction == 1 else "Not Malware"
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)