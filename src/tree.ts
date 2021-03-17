import {Node} from './node';

export class TreeNode<T> extends Node<T> {
    private _children: TreeNode<T>[];
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
