class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    // check if priority queue is empty
    if (this.value.length === 0) {
      this.value.push(newNode);
      return;
    }

    let parentIndex = this.value.length - 1;
    this.value.push(newNode);
    let childIndex = this.value.length - 1;
    while (
      parentIndex >= 0 &&
      this.value[childIndex].priority > this.value[parentIndex].priority
    ) {
      // swap parent and child node
      let temp = this.value[childIndex];
      this.value[childIndex] = this.value[parentIndex];
      this.value[parentIndex] = temp;
      // index to next step
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.value.length === 1) return this.value.pop();
    else if (this.value.length === 0) return null;

    // swap max node to last index
    let temp = this.value[0];
    this.value[0] = this.value[this.value.length - 1];
    this.value[this.value.length - 1] = temp;

    // record for latter return
    let result = this.value.pop();

    // maxheapify
    this.maxHeapify(0);

    return result;
  }

  maxHeapify(i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (
      left < this.value.length &&
      this.value[left].priority > this.value[largest].priority
    )
      largest = left;
    if (
      right < this.value.length &&
      this.value[right].priority > this.value[largest].priority
    )
      largest = right;
    // swap if child's priority larger than parent's
    if (largest !== i) {
      let temp = this.value[largest];
      this.value[largest] = this.value[i];
      this.value[i] = temp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat Breakfast", 5);
pq.enqueue("Learn Java", 2);
pq.enqueue("Learn Python", 7);
pq.enqueue("Buy Textbooks", 8);
pq.enqueue("Watch Netflix", 12);
pq.enqueue("Pay Bills", 15);

while (pq.value.length > 0) {
  let task = pq.dequeue();
  console.log(`Task: ${task.value}, Priority: ${task.priority}`);
}
