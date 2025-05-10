import json
from flask import Flask, jsonify, request
import time
from zapv2 import ZAPv2
from zap_functions import connection, attack_target, fetch_alerts;
from flask_cors import CORS, cross_origin

app = Flask(__name__)

#cors["headers"] = {'Access-Control-Allow-Origin'='*'}
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

zap = connection()

@app.route('/', methods=['GET'])
@cross_origin()
def health_probe():
    return 'Server is Up & Running', 200

@app.route('/attack_target/', methods=['GET'])
@cross_origin()
def post_attack():
    global zap
    # target = json.loads(request.data)
    # 127.0.0.1:5000/attack-target?target=url
    target = request.args.get('target')
    if not target:
        return jsonify({ 'error': 'Need Target to launch an Attack' }), 400
    
    return jsonify(attack_target(target, zap)), 200

@app.route('/get_alerts', methods=['GET'])
@cross_origin()
def fetch_target_alerts():
    global zap
    try:
        return jsonify(fetch_alerts(zap)), 200
    except Exception as e:
        return e

if __name__ == '__main__':
   app.run(port=5000)
