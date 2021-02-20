const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";

  let newArr = arr.concat();

  let res = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === discardNext) {
      if (i != newArr.length - 1) newArr[i + 1] = " ";
    } else if (newArr[i] === discardPrev) {
      if (i != 0 && !(newArr[i - 1] === " ")) res.pop();
    } else if (newArr[i] === doubleNext) {
      if (i != newArr.length - 1) res.push(newArr[i + 1]);
    } else if (newArr[i] === doublePrev) {
      if (i != 0 && !(newArr[i - 1] === " ")) res.push(newArr[i - 1]);
    } else if (!(newArr[i] === " ")) res.push(newArr[i]);
  }
  console.log(res);

  return res;
};
