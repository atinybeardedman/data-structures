export class Node<T> {
    private _data: T;
    constructor(data: T){
        this._data = data;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }
}

export class LinkedNode<T> extends Node<T> {
    private _next: Node<T> | null;
    private _previous: Node<T> | null;
    constructor(data: T){
        super(data);
        this._next = null;
        this._previous = null;
    }

    get next(): Node<T> | null {
        return this._next;
    }

    set next(node: Node<T> | null) {
        this._next = node;
    }

    get previous(): Node<T> | null {
        return this._previous;
    }

    set previous(node: Node<T> | null) {
        this._previous = node;
    }

    
}