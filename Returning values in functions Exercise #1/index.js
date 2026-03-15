let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
let sum = 0
function totalracetime(){
   return sum = player1Time + player2Time
    // console.log(sum)
}

let sumoftime = totalracetime()
// Call/invoke the function and store the returned value in a new variable
let newvariable = sumoftime
console.log(sumoftime)
// Finally, log the variable out



