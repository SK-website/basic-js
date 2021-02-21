const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = "";
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  repeatStr = String(str);
  for (let i = 1; i <= repeatTimes; i++) {
    res += repeatStr;
    for (let n = 1; n <= additionRepeatTimes; n++) {
      res += addition;
      if (!(n === additionRepeatTimes)) res += additionSeparator;
    }
    if (!(i === repeatTimes)) res += separator;
  }
  return res;
};
