from collections import deque
from time import time
class Orders():
    def __init__(self):
        self.unprocessed_orders = deque([])
        self.order_num = 0
    
    def add_order_to_queue(self, order):
        self.order_num += 1
        self.unprocessed_orders.append(
            {
            "order_number": self.order_num,
            "received_time": time(),
            "order": order
            }
        )
    
    def pop_top_order_from_queue(self):
        return self.unprocessed_orders.popleft()

    def get_top_order_in_queue(self):
        return self.unprocessed_orders[0]
    
    def count_orders_in_queue(self):
        return len(self.unprocessed_orders)