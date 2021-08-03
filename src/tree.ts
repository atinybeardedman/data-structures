import {Node} from './node';


export class TreeNode<T> extends Node<T> {
    protected _children: TreeNode<T>[];
    constructor(data: T) {
      super(data);
      this._children = [];
    }

    get children(): TreeNode<T>[] {
      return this._children;
    }

    addChild(data: T | TreeNode<T>) {
      const node = data instanceof TreeNode ? data : new TreeNode<T>(data);
      this._children.push(node);
    }

    removeChild(data: T | TreeNode<T>) {
      let removed = false;
      const node = data instanceof TreeNode ? data : new TreeNode<T>(data);
      this._children = this._children.filter(child => {
        if (child.data !== node.data) {
          return true;
        } else {
          removed = true;
          return false;
        }
      });
      if (removed) {
        for (const child of this._children) {
          child.removeChild(data);
        }
      }
    }

    toString(prefix = ''): string {
      let result = prefix + this.data;
      for (const child of this._children) {
        result += `\n${child.toString(prefix + '-')}`;
      }
      return result;
    }
}

export class BinaryTreeNode<T> extends Node<T> {
    private _left: BinaryTreeNode<T> | null;
    private _right: BinaryTreeNode<T> | null;
    constructor(data: T) {
      super(data);
      this._left = null;
      this._right = null;
    }

    set left(node: BinaryTreeNode<T> | null) {
      this._left = node;
    }

    get left(): BinaryTreeNode<T> | null {
      return this._left;
    }

    set right(node: BinaryTreeNode<T> | null) {
      this._right = node;
    }

    get right(): BinaryTreeNode<T> | null {
      return this._right;
    }

    addChild(data: T | BinaryTreeNode<T>): void {
      const node = data instanceof BinaryTreeNode ? data : new BinaryTreeNode<T>(data);
      if (node.data < this.data) {
        if (!this.left) {
          this.left = node;
        } else {
          this.left.addChild(node);
        }
      } else {
        if (!this.right) {
          this.right = node;
        } else {
          this.right.addChild(node);
        }
      }
    }

}
