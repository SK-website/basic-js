const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countMax = 0;

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let currentCount = this.calculateDepth(el);
        if (currentCount > countMax) countMax = currentCount;
      }
    });

    return countMax + 1;
  }
};
