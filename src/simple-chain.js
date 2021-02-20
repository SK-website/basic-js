const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const empty = "()";
    let chainPiece = "";
    if (!value === undefined) chainPiece = "( " + empty + " )";
    else chainPiece = "( " + value + " )";
    this.chain.push(chainPiece);
    return this;
  },
  removeLink(position) {
    let checked = this.checkPositionValue(position);
    if (!checked) {
      this.chain = [];
      throw new Error(`Position should be an integer number`);
    } else this.chain.splice(position - 1, 1);
    return this;
  },
  checkPositionValue(position) {
    if (
      isNaN(position) ||
      Number.isInteger(position) === false ||
      position > this.getLength() ||
      position < 1 ||
      position === undefined
    )
      return false;
    else return true;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
