/**
 * An implementation of a min/max heap using an array as the underlying data structure
 */
export abstract class Heap<T> {
  protected _list: T[];

  constructor() {
    this._list = [];
  }

  protected get lastNodeIndex(): number {
    return this._list.length - 1;
  }

  public add(data: T): void {
    this._list.push(data);
    this.trickleUp();
  }

  public pop(): T | null {
    let data: T | null = null;
    if (this._list.length === 0) {
      data = null;
    } else {
      data = this._list[0];
      const lastNode = this._list.pop();
      if (lastNode) {
        this._list[0] = lastNode;
        this.trickleDown();
      }
    }
    return data;
  }

  protected abstract shouldSwapUp(child: T, parent: T): boolean;
  protected abstract shouldSwapDown(parent: T, child: T): boolean;
  protected abstract compare(index1: number, index2: number): number;

  protected findChildSwap(parentIndex: number): number {
    const leftIndex = this.getLeftChildIndex(parentIndex);
    const rightIndex = this.getRightChildIndex(parentIndex);
    const leftChild = this._list[leftIndex];
    const rightChild = this._list[rightIndex];
    let swapIndex = -1;
    if (leftChild && rightChild) {
      swapIndex = this.compare(leftIndex, rightIndex);
    } else if (leftChild) {
      swapIndex = leftIndex;
    }
    return swapIndex;
  }

  protected getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  protected swap(index1: number, index2: number): void {
    [this._list[index1], this._list[index2]] = [
      this._list[index2],
      this._list[index1],
    ];
  }

  protected getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  protected getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  protected trickleUp(): void {
    let currentIndex = this.lastNodeIndex;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      this.shouldSwapUp(this._list[currentIndex], this._list[parentIndex])
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  protected trickleDown(): void {
    let currentIndex = 0;
    let childIndex = this.findChildSwap(currentIndex);
    while (
      this.shouldSwapDown(this._list[currentIndex], this._list[childIndex])
    ) {
      this.swap(currentIndex, childIndex);
      currentIndex = childIndex;
      childIndex = this.findChildSwap(currentIndex);
    }
  }
}

export class MinHeap<T> extends Heap<T> {
  protected compare(index1: number, index2: number): number {
    if (this._list[index1] < this._list[index2]) {
      return index1;
    }
    return index2;
  }
  protected shouldSwapUp(child: T, parent: T): boolean {
    return parent && child < parent;
  }

  protected shouldSwapDown(parent: T, child: T): boolean {
    return child && parent > child;
  }
}

export class MaxHeap<T> extends Heap<T> {
  protected compare(index1: number, index2: number): number {
    if (this._list[index1] > this._list[index2]) {
      return index1;
    }
    return index2;
  }
  protected shouldSwapUp(child: T, parent: T): boolean {
    return parent && child > parent;
  }

  protected shouldSwapDown(parent: T, child: T): boolean {
    return child && parent < child;
  }
}
