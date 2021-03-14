/**
 * An implementation of a node that contains a single data property
 */
export class Node<T> {
    private _data: T;
    constructor(data: T) {
      this._data = data;
    }

    get data(): T {
      return this._data;
    }

    set data(value: T) {
      this._data = value;
    }
}

/**
 * An implementation of a node that contains a data property
 */
export class LinkedNode<T> extends Node<T> {
    private _next: LinkedNode<T> | null;
    private _previous: LinkedNode<T> | null;
    constructor(data: T) {
      super(data);
      this._next = null;
      this._previous = null;
    }

    get next(): LinkedNode<T> | null {
      return this._next;
    }

    set next(node: LinkedNode<T> | null) {
      this._next = node;
    }

    get previous(): LinkedNode<T> | null {
      return this._previous;
    }

    set previous(node: LinkedNode<T> | null) {
      this._previous = node;
    }

}
