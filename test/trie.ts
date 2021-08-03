import * as tape from 'tape';
import {Trie, TrieNode} from '../src/trie';

tape('A trie should allow insertion', (test) => {
  const trie = new Trie();
  const s1 = 'car';
  trie.add(s1);
  let currentNode = trie.root;
  for (const char of s1) {
    test.true(currentNode.children.has(char));
    currentNode = currentNode.children.get(char) as TrieNode;
  }
  test.true(currentNode.children.has('*'));
  test.equal(currentNode.children.get('*')?.children.size, 0);

  const s2 = 'bat';
  trie.add(s2);

  currentNode = trie.root;
  for (const char of s1) {
    test.true(currentNode.children.has(char));
    currentNode = currentNode.children.get(char) as TrieNode;
  }
  test.true(currentNode.children.has('*'));
  test.equal(currentNode.children.get('*')?.children.size, 0);

  test.end();
});

tape('A trie should allow searching', (test) => {
  const trie = new Trie();
  const s = 'car';
  trie.add(s);
  const trueResult = trie.search('car');
  test.true(trueResult);
  const falseResult = trie.search('cat');
  test.false(falseResult);
  test.end();
});

tape('A trie should be able to collect all words', (test) => {
  const trie = new Trie();
  const words = ['car', 'cat', 'bat', 'bar', 'zip'];
  for (const word of words) {
    trie.add(word);
  }
  const collectedWords = trie.collectWords();
  test.deepEqual(words, collectedWords);
  test.end();
});
