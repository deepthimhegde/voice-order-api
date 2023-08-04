from flask import Flask, jsonify, request
from orders import Orders

app = Flask(__name__)
orders_queue = Orders()

@app.route('/')
def index():
   return "Welcome!"

@app.route('/orders', methods = ['GET'])
def homepage():
    name = request.args.get('name')
    if name is None:
        text = 'Hello!'
    else:
        text = 'Hello ' + name + '!'
    return jsonify({"message": text})

@app.route('/orders/place-order', methods=['POST'])
def place_order():
    data = request.json
    # TODO: Validate order json schema 
    orders_queue.add_order_to_queue(data)
    return f"Order received! Your order is number {orders_queue.order_num} in the queue"

if __name__ == '__main__':
    app.run(debug=True, port=8000)
