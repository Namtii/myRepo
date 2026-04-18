const edibles = ["food", "fruits", "vegetables", "meat", "seafood", "dairy", "grains", "sweets", "beverages"];

// let [positionOne, positionTwo] = edibles;
// console.log(positionOne, positionTwo);

// food, fruits


let [aaa, eee, iii, ooo] = edibles;
console.log(aaa, eee, iii, ooo);
 

// let [positionOne, positionTwo] = edibles;
//  let temp = positionOne;

// positionOne = positionTwo;
// positionTwo = temp;
// console.log(positionOne, positionTwo);

// temp = positionOne;
// positionOne = positionTwo;
// positionTwo = temp;

// console.log(positionOne, positionTwo);

// fruits, food
 

// let [positionOne, positionTwo] = edibles;
// [positionOne, positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);
// [positionOne, positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);
// fruits, food

let [positionOne, positionTwo, positionThree] = edibles;
[positionOne, , positionThree] = [positionThree , ,positionOne ];
console.log(positionOne, positionThree);
