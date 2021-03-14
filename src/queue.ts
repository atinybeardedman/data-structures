import {LinkedList} from './linked-list';

export class Queue<T> {
    protected queue: LinkedList<T>;
    constructor() {
      this.queue = new LinkedList<T>();
    }

    public enqueue(data: T): void {
      this.queue.addToTail(data);
    }

    public dequeue(): T {
      if (this.queue.head) {
        return this.queue.removeHead() as T;
      } else {
        throw new Error('Queue Underflow');
      }
    }

    public peek(): T | null {
      return this.queue.head ? this.queue.head.data : null;
    }
}
