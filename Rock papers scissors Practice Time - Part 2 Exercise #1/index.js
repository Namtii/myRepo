let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

 let roll = Math.floor(Math.random() * 3);

console.log("random number: " + roll)
 
 function random(){
    // let random = hands[roll]
    // console.log(random)
    return  hands[roll]
 }
//  random()
 
 let rollko = random()
 
 console.log("data from array: " + rollko )


// for(let i=0; i<=3; i++){
//     console.log(hands[i])
// }
