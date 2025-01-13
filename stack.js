class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
    console.log(this.items, this.count);
  }
  pop() {
    if (this.count === 0) return "Stack is empty";
    const removedElement = this.items[this.count - 1];
    this.count--;
    console.log(removedElement);
    return (this.items.length = this.count);
  }
  peek() {
    if (this.count === 0) return "Stack is empty";
    const lastElement = this.items[this.count - 1];
    console.log(lastElement);
    return lastElement;
  }
  length() {
    return this.count;
  }
  clear() {
    this.items = [];
    this.count = 0;
    console.log(this.items, this.count);
  }
}

const items = new Stack();

items.push(1);
console.log(items.length());
items.push(2);
console.log(items.length());
items.push(3);
console.log(items.length());
items.pop();
items.pop();
items.pop();
items.pop();
items.pop();
console.log(items.pop());
console.log(items.peek());
console.log(items.items);
console.log("length", items.length());
