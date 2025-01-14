class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const elementToDequeue = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return elementToDequeue;
  }

  peek() {
    return this.items[this.head];
  }

  size() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue);
console.log(queue.dequeue());
