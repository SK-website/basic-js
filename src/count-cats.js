const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (!arr.length) return 0;
  let number = 0;

  if (Array.isArray(arr)) {
    openedArr = arr.reduce((a, b) => {
      return a.concat(b);
    });

    openedArr.forEach((element) => {
      if (element === "^^") number++;
    });
  }
  return number;
};
