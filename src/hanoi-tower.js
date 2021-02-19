const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n, speed) {
  let turns = Math.pow(2, n) - 1;
  let seconds = Math.floor((3600 * turns) / speed);

  return {
    turns: turns,
    seconds: seconds,
  };
};
