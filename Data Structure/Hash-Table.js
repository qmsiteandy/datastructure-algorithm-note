class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < size; i++) this.table.push([]);
  }

  // division method
  hash1(key) {
    return key % this.size;
  }

  // multiplication method
  hash2(key) {
    let x = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * x) % 1));
  }

  // parse string to integer
  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result = str.charCodeAt(i); // MDN
    }
    return result % this.size;
  }

  set(key, value) {
    let parsedKey = 0;
    if (typeof key !== "number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key;
    }
    let index = this.hash2(parsedKey);
    this.table[index].push({ key, value });
  }

  get(key) {
    let parsedKey = 0;
    if (typeof key !== "number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key;
    }
    let index = this.hash2(parsedKey);
    for (let obj of this.table[index]) {
      if (obj.key === key) return obj.value;
    }
  }

  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new HashTable(6);
// myHashTable.set(11424, "Mike");
// myHashTable.set(6254, "James");
// myHashTable.set(4171, "Drake");
// myHashTable.set(554, "Kevin");
myHashTable.set("black", "#000000");
myHashTable.set("red", "#ff0000");
myHashTable.set("green", "#00ff00");
myHashTable.set("blue", "#0000ff");
myHashTable.set("white", "#ffffff");
myHashTable.printAll();
console.log(myHashTable.get("blue"));
