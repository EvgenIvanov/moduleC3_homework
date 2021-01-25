// **
// задание 2
// **
function objHasProp(propName, pObj) {
  //return Object.keys(pObj).includes(propName);
  return propName in pObj;
}
const obj = { prop1: "a", prop2: "b" };
let propName = "prop1";
console.log(
  `This object has ${
    objHasProp(propName, obj) ? "the" : "no"
  } property "${propName}"`
);
propName = "KY-KY";
console.log(
  `This object has ${
    objHasProp(propName, obj) ? "the" : "no"
  } property "${propName}"`
);
