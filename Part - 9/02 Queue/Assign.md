Implement Queue from Scratch https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/

Watch this video to have a better understanding of how to design using classes - https://www.youtube.com/watch?v=eb6UHsS5WWk

Write the code in Javascript

```js
class Queue {
  constructor(queue) {
    this.queue = queue;
    this.minpos = 0;
    this.maxpos = queue.length - 1;
  }

  pushIntoQueue(value) {
    // Complete this function
    // Push the value into the queue
    this.queue.push(value);
    this.maxpos++;
  }

  popFromQueue() {
    // Complete this function
    //return the elements based on FIFO logic
    //When no elements remain to return , return -1
    if (this.maxpos === -1) {
      return -1;
    }
    let front = this.queue[this.minpos];
    this.queue.shift();
    if (this.queue.length === 0) {
      this.maxpos = -1;
    }
    return front;
  }
}
```
