import * as tape from 'tape';
import {Queue} from '../src/queue';

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
