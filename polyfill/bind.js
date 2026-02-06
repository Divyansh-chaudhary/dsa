const obj = {
  name: "divyansh",
  sayName: function (age, a) {
    console.log("name: ", this.name, age, a);
  },
};

const sayName = obj.sayName.bind({ name: "rahul" }, 34);
sayName(44);

Function.prototype.customBind = function (obj, ...params) {
  const func = this;
  return function (...args) {
    obj.func = func;
    return obj.func(...params, ...args);
  };
};

const sayName1 = obj.sayName.customBind({ name: "rahul2" }, 35);
sayName1(45);
