/*
set
1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

get
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // from example
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    var hashIndex = this._hash(key);

    console.log("hashIndex: ", hashIndex);

    if (!this.keyMap[hashIndex]) {
      this.keyMap[hashIndex] = [];
    }
    var data = [key, value];
    this.keyMap[hashIndex].push(data);

    console.log("keyMap[hashIndex]", this.keyMap[hashIndex]);
  }

  get(key) {
    var hashIndex = this._hash(key);
    var column = this.keyMap[hashIndex];

    if (this.keyMap[hashIndex]) {
      for (let item of column) {
        console.log("item[0] ", item[0]);
        if (item[0] === key) {
          return item;
        }
      }
    }

    return undefined;
  }
}

var hashTable = new HashTable(4);

hashTable.set("salmon", "#111");
hashTable.set("darkblue", "#222");
hashTable.set("pink", "#333");
hashTable.set("black", "#000");

console.log(hashTable);

console.log(hashTable.get("salmon"));
console.log(hashTable.get("test"));


// keyMap[2]: [ [ 'salmon', '#111' ], [ 'pink', '#333' ] ]

// [ 'salmon', '#111' ]