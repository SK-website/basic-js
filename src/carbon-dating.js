const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  if (
    !str ||
    typeof str !== "string" ||
    str === null ||
    str === NaN ||
    Number(str) > MODERN_ACTIVITY ||
    Number(str) <= 0 ||
    isNaN(Number(str)) ||
    Number(str) > 9000
  )
    return false;

  sampleActivity = Number(str);
  age = Math.ceil(
    -(
      (HALF_LIFE_PERIOD * Math.log(sampleActivity / MODERN_ACTIVITY)) /
      Math.log(2)
    )
  );

  return age;
};
