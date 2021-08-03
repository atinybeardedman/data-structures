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

  private* _nodes() {
    let node = this._head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  get head(): LinkedNode<T> | null {
    return this._head;
  }

  get tail(): LinkedNode<T> | null {
    return this._tail;
  }

  get nodes(): Generator<LinkedNode<T>> {
    return this._nodes();
  }

  isEmpty() {
    return this._head === null;
  }


  addToHead(data: T): void {
    if (!this.isEmpty()) {
      const oldHead = this._head as LinkedNode<T>;
      this._head = new LinkedNode<T>(data);
      this._head.next = oldHead;
      if (!oldHead.hasNext()) {
        this._tail = oldHead;
      }
    } else {
      this._head = new LinkedNode<T>(data);
      this._tail = this._head;
    }
  }

  removeHead(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      const oldHead = this._head as LinkedNode<T>;
      this._head = oldHead.next;


      if (!this._head) {
        this._tail = null;
      }

      return oldHead.data;
    }
  }

  addToTail(data: T): void {
    if (!this.isEmpty()) {
      const oldTail = this._tail as LinkedNode<T>;
      this._tail = new LinkedNode<T>(data);
      oldTail.next = this._tail;
    } else {
      this._tail = new LinkedNode<T>(data);
      this._head = this._tail;
    }
  }

  removeTail(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      if (this._head === this._tail) {
        return this.removeHead();
      }

      let currentNode = this._head;
      while (currentNode!.next !== this._tail) {
        currentNode = currentNode!.next;
      }
      const oldTail = currentNode!.next as LinkedNode<T>;
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
    if (!this.isEmpty()) {
      const oldHead = this._head as LinkedNode<T>;
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
    if (this.isEmpty()) {
      return null;
    } else {
      const oldHead = this._head as LinkedNode<T>;
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
    if (!this.isEmpty()) {
      const oldTail = this._tail as LinkedNode<T>;
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
    if (this.isEmpty()) {
      return null;
    }
    if (this._head === this._tail) {
      return this.removeHead();
    }

    const oldTail = this._tail as LinkedNode<T>;
    this._tail = oldTail.previous;
    this._tail!.next = null;
    return oldTail.data;
  }
}
