import {LinkedNode} from './node';

/**
 * A implementation of a single linked list with pointers to the head and the tail
 */
export class LinkedList<T> {
  protected _head: LinkedNode<T> | null;
  protected _tail: LinkedNode<T> | null;
  constructor() {
    this._head = null;
    this._tail = null;
  }

  get head(): LinkedNode<T> | null {
    return this._head;
  }

  get tail(): LinkedNode<T> | null {
    return this._tail;
  }

  addToHead(data: T): void {
    if (this._head) {
      const oldHead = this._head;
      this._head = new LinkedNode<T>(data);
      this._head.next = oldHead;
      if (!oldHead.next) {
        this._tail = oldHead;
      }
    } else {
      this._head = new LinkedNode<T>(data);
      this._tail = this._head;
    }
  }

  removeHead(): T | null {
    if (!this._head) {
      return null;
    } else {
      const oldHead = this._head;
      this._head = oldHead.next;

      if (!this._head) {
        this._tail = null;
      }

      return oldHead.data;
    }
  }

  addToTail(data: T): void {
    if (this._tail) {
      const oldTail = this._tail;
      this._tail = new LinkedNode<T>(data);
      oldTail.next = this._tail;

      if (!this._head) {
        this._head = oldTail;
      }
    } else {
      this._tail = new LinkedNode<T>(data);
      this._head = this._tail;
    }
  }

  removeTail(): T | null {
    if (!this._tail) {
      return null;
    } else {
      if (this._head === this._tail) {
        return this.removeHead();
      }

      let currentNode = this._head;
      while (currentNode!.next !== this._tail) {
        currentNode = currentNode!.next;
      }
      const oldTail = currentNode!.next;
      this._tail = currentNode;
      this._tail!.next = null;
      return oldTail.data;
    }
  }
}

export class DoublyLinkedList<T> extends LinkedList<T> {
  constructor() {
    super();
  }

  addToHead(data: T): void {
    if (this._head) {
      const oldHead = this._head;
      this._head = new LinkedNode<T>(data);
      this._head.next = oldHead;
      oldHead.previous = this._head;

      if (!oldHead.next) {
        this._tail = oldHead;
      }
    } else {
      this._head = new LinkedNode<T>(data);
      this._tail = this._head;
    }
  }

  removeHead(): T | null {
    if (!this._head) {
      return null;
    } else {
      const oldHead = this._head;
      this._head = oldHead.next;

      if (this._head) {
        this._head.previous = null;
      } else {
        this._tail = null;
      }

      return oldHead.data;
    }
  }

  addToTail(data: T): void {
    if (this._tail) {
      const oldTail = this._tail;
      this._tail = new LinkedNode<T>(data);
      this._tail.previous = oldTail;
      oldTail.next = this._tail;

      if (!oldTail.previous) {
        this._head = oldTail;
      }
    } else {
      this._tail = new LinkedNode<T>(data);
      this._head = this._tail;
    }
  }

  removeTail(): T | null {
    if (!this._tail) {
      return null;
    }
    if (this._head === this._tail) {
      return this.removeHead();
    }

    const oldTail = this._tail;
    this._tail = oldTail.previous;
    this._tail!.next = null;
    return oldTail.data;
  }
}
