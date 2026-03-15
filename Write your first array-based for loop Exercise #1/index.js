let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

function petelka(){
    for (let i = 0; i < cards.length; i += 1){
    console.log(cards[i])
    
}
}

// my small idea for fun
let randomowe = Math.floor(Math.random() * 10) + 1;
function playwithcards(){cards.push(randomowe)}
petelka()
console.log(cards)
console.log("first end")
playwithcards()
petelka()
console.log(cards)
console.log("second end")
