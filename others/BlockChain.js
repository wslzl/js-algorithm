const crypto = require("crypto");

class Block {
  constructor(index, previousHash, timestamp, data) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }
  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.data)
      )
      .digest("hex");
  }
}

class BlockChain {
  constructor() {
    this.blocks = [this.getGenesisBlock()];
    this.index = 1;
  }
  calcuteHash() {
    return crypto.SHA256();
  }
  getGenesisBlock() {
    const time = +new Date();
    return new Block(0, "0", time, "genesis block");
  }
  getLatestBlock() {
    return this.blocks[this.blocks.length - 1];
  }
  generateNextBlock(data) {
    const time = +new Date();
    const previousHash = this.getLatestBlock().hash;
    const block = new Block(this.index++, previousHash, time, data);
    this.blocks.push(block);
  }
}

const chain = new BlockChain();
chain.generateNextBlock({ count: 99 });
console.log(chain);
