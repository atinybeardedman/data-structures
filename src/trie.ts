/**
 * An implementation of a Trie
 */
export class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  add(s: string): void {
    let currentNode = this.root;
    for (const char of s) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char) as TrieNode;
    }
    currentNode.children.set('*', new TrieNode());
  }
  search(word: string): TrieNode | null {
    let currentNode = this.root;
    for (const char of word) {
      if (currentNode.children.has(char)) {
        currentNode = currentNode.children.get(char) as TrieNode;
      } else {
        return null;
      }
    }
    return currentNode;
  }

  collectWords(node=this.root, word='', words:string[]=[]): string[] {
    for (const [char, childNode] of node.children.entries()) {
      if (char === '*') {
        words.push(word);
      } else {
        this.collectWords(childNode, word + char, words);
      }
    }
    return words;
  }
}

export class TrieNode {
  public children: Map<string, TrieNode>;
  constructor() {
    this.children = new Map<string, TrieNode>();
  }
}
