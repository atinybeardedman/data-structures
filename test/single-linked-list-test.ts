import * as tape from 'tape';
import {LinkedList} from '../src/linked-list';

tape('linked list should be created', (test) => {
  const list = new LinkedList();
  test.true(list);

  test.end();
});

tape('add to head should work', (test) => {
  const list = new LinkedList<number>();
  list.addToHead(1);
  test.equal(list.head!.data, 1);
  test.equal(list.tail!.data, 1);

  list.addToHead(2);
  test.equal(list.head!.data, 2);
  test.equal(list.tail!.data, 1);
  test.equal(list.head!.next, list.tail);


  test.end();
});


tape('add to tail should work', (test) => {
  const list = new LinkedList<number>();
  list.addToTail(1);
  test.equal(list.tail!.data, 1);
  test.equal(list.head!.data, 1);

  list.addToTail(2);
  test.equal(list.head!.data, 1);
  test.equal(list.tail!.data, 2);
  test.equal(list.head!.next, list.tail);

  test.end();
});

tape('remove head should work', (test) => {
  const list = new LinkedList<number>();
  list.addToHead(3);
  list.addToHead(2);
  list.addToHead(1);

  test.equal(list.removeHead(), 1);
  test.equal(list.head!.data, 2);
  test.equal(list.tail!.data, 3);

  test.equal(list.removeHead(), 2);
  test.equal(list.head!.data, 3);
  test.equal(list.tail!.data, 3);
  test.equal(list.tail, list.head);

  test.equal(list.removeHead(), 3);
  test.equal(list.head, null);
  test.equal(list.tail, null);

  test.end();

});

tape('remove tail should work', (test) => {
  const list = new LinkedList<number>();
  list.addToTail(1);
  list.addToTail(2);
  list.addToTail(3);

  test.equal(list.removeTail(), 3);
  test.equal(list.head!.data, 1);
  test.equal(list.tail!.data, 2);

  test.equal(list.removeTail(), 2);
  test.equal(list.head!.data, 1);
  test.equal(list.tail!.data, 1);
  test.equal(list.tail, list.head);

  test.equal(list.removeTail(), 1);
  test.equal(list.head, null);
  test.equal(list.tail, null);

  test.end();

});
