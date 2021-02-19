const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  if (
    !str ||
    str === NaN ||
    !typeof str === "string" ||
    Number(str) > 9000 ||
    Number(str) === NaN ||
    Number(str) != "number"
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
