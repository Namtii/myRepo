let przyciskbtn = document.getElementById("log-btn");





let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
 przyciskbtn.addEventListener("click", function(){
    console.log("LOG JANE'S SCORE! cliked")
console.log(data[0].score)
console.log(data[1].score)
    
})
// Log Jane's score when the button is clicked (via data)


