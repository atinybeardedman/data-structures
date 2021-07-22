import * as tape from "tape";
import { MinHeap, MaxHeap } from "../src/heap";

tape("Max Heap should be created", (test) => {
  const maxHeap = new MaxHeap<number>();
  test.true(maxHeap);
  test.end();
});

tape("Max Heap should always pop the maximum value", (test) => {
    const maxHeap = new MaxHeap<number>();
    const numbers = [1,8,4,7];
    for(const n of numbers){
        maxHeap.add(n);
    }
    // sort numbers array in decending order
    numbers.sort((a, b) => b - a);
    for(const n of numbers){
        const max = maxHeap.pop();
        test.equal(max, n);
    }
    test.end();
});

tape("Min Heap should always pop the minimum value", (test) => {
    const minHeap = new MinHeap<number>();
    const numbers = [1,8,4,7];
    for(const n of numbers){
        minHeap.add(n);
    }
    // sort numbers array in ascending order
    numbers.sort((a, b) => a - b);
    for(const n of numbers){
        const max = minHeap.pop();
        test.equal(max, n);
    }
    test.end();
});
