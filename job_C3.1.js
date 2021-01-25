// **
// задание 1
// **
function getObjProp(pObj) {
  for (prop in pObj) {
    if (pObj.hasOwnProperty(prop)) {
      console.log(`This is ${prop} own property`);
    }
  }
}

const objTest = Object.create(obj);
objTest["pr3"] = "c";
objTest.pr4 = "d";

console.log("");
getObjProp(objTest);
console.log(`objTest.prop1=${objTest.prop1}`);
