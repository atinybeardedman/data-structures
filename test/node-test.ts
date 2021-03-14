import * as tape from 'tape';
import {Node, LinkedNode} from '../src/node';

tape('node class functionality', (test) => {
  const data = 'example data';
  const node = new Node<string>(data);
  test.true(node);

  test.equal(node.data, data);

  test.end();
});

tape('node data can be set', (test) => {
  const startData = 'start';
  const endData = 'end';
  const node = new Node(startData);
  node.data = endData;

  test.equal(node.data, endData);

  test.end();
});

tape('linked node can be linked', (test) => {
  const node1 = new LinkedNode(1);
  const node2 = new LinkedNode(2);
  node1.next = node2;
  node2.previous = node1;

  test.equal(node1.next, node2);
  test.equal(node2.previous, node1);

  test.equal(node1.previous, null);
  test.equal(node2.next, null);


  test.end();
});
