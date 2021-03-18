import * as tape from 'tape';
import {BinaryTreeNode, TreeNode} from '../src/tree';

tape('treenode should be created', (test) => {
  const node = new TreeNode<number>(1);

  test.true(node);
  test.end();
});

tape('treenode should allow adding children', (test) => {
  const tree = new TreeNode<number>(1);
  test.comment('Add by value');
  tree.addChild(2);

  test.equal(tree.children[0].data, 2);

  test.comment('Add by node');
  const node = new TreeNode<number>(3);
  tree.addChild(node);

  test.equal(tree.children[1], node);

  test.end();
});

tape('treenode should allow removing children', (test) => {
  const tree = new TreeNode<number>(1);
  tree.addChild(2);
  test.comment('Remove by value');
  tree.removeChild(2);
  test.equal(tree.children.length, 0);

  const node = new TreeNode<number>(3);
  tree.addChild(node);
  test.comment('Remove by node');
  tree.removeChild(node);
  test.equal(tree.children.length, 0);

  test.end();
});

tape('treenode should ignore removing child that doesn\'t exist', (test) => {
  const tree = new TreeNode<number>(1);
  tree.addChild(2);

  tree.removeChild(1);
  test.equal(tree.children.length, 1);
  test.equal(tree.children[0].data, 2);

  const node = new TreeNode<number>(4);
  tree.removeChild(node);
  test.equal(tree.children.length, 1);
  test.equal(tree.children[0].data, 2);

  test.end();
});

tape('toString() method should work', (test) => {
  const tree = new TreeNode<number>(1);
  tree.addChild(2);
  const node = new TreeNode<number>(3);
  node.addChild(4);
  tree.addChild(node);

  const expected = '1\n-2\n-3\n--4';
  test.equal(tree.toString(), expected);

  test.end();
});

tape('Binary tree should be created', (test) => {
    const tree = new BinaryTreeNode(5);
    
    test.true(tree);
    test.equal(tree.data, 5);
    test.end();
});

tape('Binary tree should allow left and right assignment', (test) => {
    const tree = new BinaryTreeNode(5);
    tree.left = new BinaryTreeNode(3);
    tree.right = new BinaryTreeNode(6);

    test.equal(tree.left.data, 3);
    test.equal(tree.right.data, 6);

    test.end();
});

tape('Binary tree addChild should work', (test) => {
  const tree = new BinaryTreeNode(5);
  const leftNode = new BinaryTreeNode(3);
  const rightData = 8;

  tree.addChild(leftNode);
  test.equal(tree.left, leftNode);
  
  tree.addChild(rightData);
  test.equal(tree.right!.data, rightData);

  tree.addChild(4);
  test.equal(tree.left!.right!.data, 4);
  
  test.end();
})
