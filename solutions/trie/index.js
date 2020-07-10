class TrieNode {
  constructor(parent, val, isWord=false, children=new Map()) {
    this.parent = parent
    this.val = val
    this.isWord = isWord
    this.children = children
  }

  checkVal(s) {
    if(this.val === s) {
      return true
    }
    return false
  }

  getChild(s) {
    return this.children.get(s)
  }

  addChild(s, isWord=false) {
    const newChild = new TrieNode(this, s, isWord)
    this.children.set(s, newChild)
    return newChild
  }
}

class Trie {
  root = new TrieNode(null, '')
  add(word) {
    let cur = this.root
    for(let i=0; i<word.length; i++) {
      const char = word.charAt(i)
      let find = cur.getChild(char)
      if(!find) {
        find = cur.addChild(char, i===word.length)
      } 
      cur = find
    }
    cur.isWord = true
  }

  judgeIsWord(word) {
    let cur = this.root
    for(let i=0;i<word.length; i++) {
      const char = word.charAt(i)
      cur = cur.getChild(char)
      if(!cur) {
        return false
      }
    }
    return cur.isWord;
  }
}

const trie = new Trie()
// trie.add('leet')
// trie.add('code')
trie.add('leetcode')
console.log(trie.judgeIsWord('code'))