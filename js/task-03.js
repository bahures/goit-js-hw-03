"use strict";
const findBestEmployee = function (employees) {
  let result = "";
  const values = Object.values(employees);
  const max = Math.max(...values);

  const names = Object.keys(employees);

  for (const name of names) {
    if (employees[name] === max) {
      result = name;
      return result;
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
