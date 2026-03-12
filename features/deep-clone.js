function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  let clone;

  if (Array.isArray(obj)) {
    clone = [];
  } else if (obj instanceof Date) {
    return new Date(obj);
  } else if (obj instanceof RegExp) {
    return new RegExp(obj);
  } else {
    clone = {};
  }

  map.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}

const obj = {};
obj.date = new Date();
obj.self = obj;
obj.fun = function () {
  console.log("hello");
};
obj.num = 1;
obj.arr = ["kld", "ds", { name: "divyansh" }];
obj.obj = { name: "divyansh", say: { greet: "hi" } };
obj.regex = /^[1-2]/;

const clonedObj = deepClone(obj);
console.log(
  obj === obj,
  obj.date === obj.date,
  obj.self === obj.self,
  obj.arr === obj.arr,
  obj.regex === obj.regex,
  obj.fun === obj.fun,
  "----",
  clonedObj === obj,
  "fun:",
  clonedObj.fun === obj.fun,
  clonedObj.date === obj.date,
  clonedObj.self === obj.self,
  clonedObj.arr === obj.arr,
  clonedObj.regex === obj.regex,
);
