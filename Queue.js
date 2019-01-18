class Queue {
  constructor(sizeMax) {
    this.max = sizeMax;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
    this.data = new Array(sizeMax);
  }

  empty() {
    return this.size == 0;
  }

  full() {
    return this.size == this.data.length;
  }

  enqueue(x) {
    if (this.size == this.max) {
      return false;
    }
    this.data[this.tail] = x;
    this.size++;
    this.tail++;
    if(this.tail == this.max) {
      this.tail = 0
    }
    return true;

  }

  dequeue() {
    if (this.size == 0) {
      return null;
    }
    const x = this.data[this.head];
    this.size--;
    this.head++;
    if (this.head == this.max) {
      this.head = 0;
    }
    return x;
  }
}

module.exports = Queue;
