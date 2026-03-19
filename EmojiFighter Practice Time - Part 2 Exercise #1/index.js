let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let roll1 = Math.floor(Math.random() * fighters.length);
    console.log("roll 1: " + roll1)
    let roll2 = Math.floor(Math.random() * fighters.length);
    console.log("roll 2: " + roll2)  
   
   stageEl.textContent = fighters[roll1] + " vs " + fighters[roll2] 
    
})

 