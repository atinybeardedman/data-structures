import {LinkedList} from './linked-list';

export class Stack<T> {
  protected stack: LinkedList<T>;
  constructor() {
    this.stack = new LinkedList<T>();
  }

  public push(data: T): void {
    this.stack.addToHead(data);
  }

  public pop(): T {
    if (!this.stack.isEmpty()) {
      return this.stack.removeHead() as T;
    } else {
      throw new Error('Stack Underflow');
    }
  }

  public peek(): T | null {
    return this.stack.isEmpty() ? null : this.stack.head!.data;
  }
}

export class FixedStack<T> extends Stack<T> {
  private maxSize: number;
  private size: number;

  constructor(maxSize: number) {
    super();
    this.maxSize = maxSize;
    this.size = 0;
  }

  private isFull(): boolean {
    return this.size === this.maxSize;
  }

  public push(data: T): void {
    if (!this.isFull()) {
      super.push(data);
      this.size++;
    } else {
      throw new Error('Stack Overflow');
    }
  }

  public pop(): T {
    const result = super.pop();
    this.size--;
    return result;
  }
}
