import * as tape from 'tape';
import {FixedStack, Stack} from '../src/stack';

tape('stack should be created', (test) => {
  const stack = new Stack();
  test.true(stack);

  test.end();
});

tape('stack should function correctly', (test) => {
  const stack = new Stack();
  stack.push(3);
  stack.push(2);
  stack.push(1);

  test.equal(stack.peek(), 1);
  const removed = stack.pop();
  test.equal(removed, 1);

  test.equal(stack.peek(), 2);
  stack.pop();
  stack.pop();

  test.equal(stack.peek(), null);

  test.throws(() => {
    stack.pop();
  }, /Stack Underflow/);

  test.end();
});

tape('fixedstack should function correctly', (test) => {
  const stack = new FixedStack(3);

  stack.push(3);
  stack.push(2);
  stack.push(1);

  test.throws(() =>{
    stack.push(4);
  }, /Stack Overflow/);

  test.equal(stack.peek(), 1);
  stack.pop();
  stack.pop();
  stack.pop();
  test.equal(stack.peek(), null);

  test.throws(() => {
    stack.pop();
  }, /Stack Underflow/);

  test.end();


});
