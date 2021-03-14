import * as tape from 'tape';
import {Queue, BoundedQueue} from '../src/queue';

tape('queue should be created', (test) => {
  const queue = new Queue<number>();

  test.true(queue);

  test.end();
});

tape('queue methods should work', (test) => {
  const queue = new Queue<number>();

  queue.enqueue(1);
  test.equal(queue.peek(), 1);
  queue.enqueue(2);
  test.equal(queue.peek(), 1);

  const removed = queue.dequeue();
  test.equal(removed, 1);
  test.equal(queue.peek(), 2);

  queue.dequeue();
  test.equal(queue.peek(), null);

  test.throws(() => {
    queue.dequeue();
  }, /Queue Underflow/);

  test.end();

});


tape('boundedqueue should be created', (test) => {
  const queue = new BoundedQueue<number>(3);

  test.true(queue);

  test.end();
});

tape('boundedqueue should function correctly', (test) => {
  const queue = new BoundedQueue<number>(3);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  test.throws(() => {
    queue.enqueue(4);
  }, /Queue Overflow/);

  test.equal(queue.peek(), 1);

  test.equal(queue.dequeue(), 1);
  test.equal(queue.dequeue(), 2);
  test.equal(queue.dequeue(), 3);


  test.throws(() => {
    queue.dequeue();
  }, /Queue Underflow/);


  test.end();

});
