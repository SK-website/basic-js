const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!arr || !Array.isArray(arr)) return false;

  let res = "";

  let a = arr.filter((item) => typeof item === "string");
  a.forEach((el) => {
    let e = el.trim();
    res += e[0].toUpperCase();
  });
  res = res.split("").sort().join("");
  return res;
};
