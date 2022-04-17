const crypto = require("crypto");

class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
  }
}

class BlockChain {
  constructor() {
    this.blocks = [this.getGenesisBlock()];
  }
  calcuteHash() {
    return crypto.SHA256();
  }
  getGenesisBlock() {
    const time = +new Date();
    return new Block(
      0,
      "0",
      time,
      "genesis block",
      "810f9e854ade9bb8730d776ea02622b65c02b82ffa163ecfe4cb151a14412ed4"
    );
  }
  getLatestBlock() {
    return this.blocks[this.blocks.length - 1];
  }
  generateNextBlock() {}
}

const r = crypto.createHash("sha256").update("123").digest("hex");
console.log(r);

const quick = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  const middle = arr.splice(Math.floor(this.len / 2), 1)[0];
  arr.forEach((val) => {
    val >= middle ? right.push(val) : left.push(val);
  });
  return quick(left).concat(middle, quick(right));
};

console.log(quick([2, 4, 5, 1, 4, 9, 7]));
