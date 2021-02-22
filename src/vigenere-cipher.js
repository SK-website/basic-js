const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(string, key, direct) {
    this.string = string;
    this.key = key;
    this.direct = direct;
    this.letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  getLetterIndex(letter) {
    for (let i = 0; i < this.letters.length; i++) {
      if (letter === this.letters[i]) return i;
    }
    return -1;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined)
      throw new Error(`Please give arguments`);
    let keyArr = key.toUpperCase().split("");
    let strArr = string.toUpperCase().split("");
    let resArr = [];
    let n = -1;

    for (let i = 0; i < strArr.length; i++) {
      let currStrIndx = this.getLetterIndex(strArr[i]);
      if (currStrIndx < 0) {
        resArr.push(strArr[i]);
        continue;
      }
      n = (n + 1) % keyArr.length;
      let currKeyIndx = this.getLetterIndex(keyArr[n]);

      let nextLetterIndx = (currStrIndx + currKeyIndx) % this.letters.length;
      resArr.push(this.letters[nextLetterIndx]);
    }
    if (this.direct === false) {
      resArr = resArr.reverse();
      return resArr.join("");
    }
    return resArr.join("");
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined)
      throw new Error(`Please give arguments`);
    let keyArr = key.toUpperCase().split("");
    let strArr = string.toUpperCase().split("");

    let resArr = [];
    let n = -1;
    for (let i = 0; i < strArr.length; i++) {
      let currStrIndx = this.getLetterIndex(strArr[i]);
      if (currStrIndx < 0) {
        resArr.push(strArr[i]);
        continue;
      }
      n = (n + 1) % keyArr.length;
      let currKeyIndx = this.getLetterIndex(keyArr[n]);

      let nextLetterIndx =
        (currStrIndx - currKeyIndx + 26) % this.letters.length;
      resArr.push(this.letters[nextLetterIndx]);
    }
    if (this.direct === false) {
      resArr = resArr.reverse();
      return reaArr.join("");
    }
    return resArr.join("");
  }
}

module.exports = VigenereCipheringMachine;
