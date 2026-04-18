 

let string = "komputronik ";


let array = [`komputer1`, `komputer2`, `komputer3`, `komputer4`, `komputer5`];



let map = new Map();
map.set("komputer1", [`ram16`, `dysk1tb`, `procesorI3`, `karta graficzna_gtx4090`,`monitor`, 22]);
map.set("komputer2", `ram32`, `dysk2tb`, `procesorI5`, `karta graficzna_gtx4400`);
map.set("komputer3", [`ram64`, `dysk4tb`, `procesorI7`, `karta graficzna_gtx4800`]);
map.set("komputer4", [`ram128`, `dysk8tb`, `procesorI9`, `karta graficzna_gtx4600`]);
map.set("komputer5", [`ram256`, `dysk16tb`, `procesorI9`, `karta graficzna_gtx4700`]);

 let wyposazenie = {
    komputer1: [`myszka`, `klawiatura`, `monitor`],
    komputer2: [`myszka`, `myszka`,`klawiatura`, `monitor`],
    komputer3: [`myszka`, `klawiatura`,`klawiatura`, `monitor`],
    komputer4: [`myszka`, `klawiatura`, `monitor`,`monitor`],
    komputer5: [`myszka`, `klawiatura`, `monitor`]

 }
console.log(`test`); 


for (let i of array) {
    console.log(i.search(`komputer1`));
   if (i.search(`komputer3`)         !== -1) {  
        console.log(`znaleziono ${i}`);
    } else {
        console.log(`nie znaleziono ${i}`);
    }}



// for (let [key, value] of map) {

//     if (value[2] === `procesorI9`){
//         console.log(`komputer z procesorem I9 to ${key}`);
//     } else {
//         console.log(` ${key} nie posiada procesora I9`);
//     }
//     if (value.includes(`ram256`)){
//         console.log(` ${key} posiada 256GB RAM`);
//     }
    
// }



// let maporo = new Map()

//  maporo.forEach((value, key, yolo   ) => {
//     console.log(`${key}: ${value} :${yolo.size} :  `);
// })



// [1,2].forEach((element, index, array) => {
//     console.log(`   Element: ${element} Index: ${index} Array: ${array}`); 
// });

// map.forEach((value, key, yolo   ) => {
//     console.log(`${key}: ${value} :${yolo.size} : ${yolo.delete(`komputer1`)}  `);
// });
 



// array.forEach((element, index, array) => {
//     console.log(`   Element: ${element} Index: ${index} Array: ${array}`);
// });
 




// array.forEach((element) => {
//     console.log(element);
// });
 

// map.forEach((value, key,m) => {
//     console.log(`${key} : ${value} : ${m}`);
// });



 

// array.forEach(element => {     
//     console.log(element);
// });



// for (let i of wyposazenie.komputer1) {
//     console.log(i);
// // }  



// for (let [key, value] of map) {
//     console.log(`${key}` );
// }       


//  for (let i in wyposazenie.komputer1) {
//     console.log(wyposazenie.komputer1[i]);
//  } 



//  for (let i in array) {
//     console.log(array[i]);
//  } 


//  for (let i in string) {
//     console.log(string[i]);
//  }      

