# Stacks and Queues
<!-- Short summary or background information -->

- **Stack**: is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

![stack](./pic/stack.jpeg)

- **Queue**: It is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).

![queue](./pic/queue.png)

---

## Challenge

**Stack**:

Create a Stack class that has a top property, and push, pop, peek, and is empty methods:

1. `push`: adds a new node with that value to the top of the stack with an O(1) Time performance.
2. `pop`: Removes the node from the top of the stack.
3. `peek`: Returns the Value of the node located at the top of the stack.
4. `isEmpty`: Returns boolean indicating whether or not the stack is empty.

**Queue**:

Create a Queue class that has a front property, and enqueue, dequeue, peek, and is empty methods:

1. `enqueue`: adds a new node with that value to the back of the queue with an O(1) Time performance.
2. `dequeue`: Removes the node from the front of the queue.
3. `peek`: Returns the Value of the node located at the front of the queue
4. `isEmpty`: Returns boolean indicating whether or not the queue is empty.

---
## Approach & Efficiency

- Space : O(1)
- Time : O(1)

---
## testing

![img](./pic/test.png)