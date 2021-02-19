const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = ["winter", "spring", "summer", "autumn"];
  console.log(Boolean(date));
  if (date == null) return "Unable to determine the time of year!";

  if (Object.prototype.toString.apply(date) !== `[object Date]`)
    throw new Error(`Unable to determine the time of year!`);

  if (Object.prototype.toString.apply(date) === `[object Date]`) {
    let month = date.getMonth(date);
    if (month === 11 || month <= 1) return seasons[0];
    if (month >= 2 && month <= 4) return seasons[1];
    if (month >= 5 && month <= 7) return seasons[2];
    if (month >= 8 && month <= 10) return seasons[3];
  }
};
