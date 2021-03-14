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
      if (!this.queue.isEmpty()) {
        return this.queue.removeHead() as T;
      } else {
        throw new Error('Queue Underflow');
      }
    }

    public peek(): T | null {
      return !this.queue.isEmpty() ? this.queue!.head!.data : null;
    }
}

export class BoundedQueue<T> extends Queue<T> {
    private size: number;
    private maxSize: number;
    constructor(maxSize: number) {
      super();
      this.size = 0;
      this.maxSize = maxSize;
    }

    private isFull(): boolean {
      return this.size === this.maxSize;
    }

    public enqueue(data: T): void {
      if (!this.isFull()) {
        super.enqueue(data);
        this.size++;
      } else {
        throw new Error('Queue Overflow');
      }
    }

    public dequeue(): T {
      const result = super.dequeue();
      this.size--;
      return result;
    }
}
