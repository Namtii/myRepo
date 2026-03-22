// Use .innerHTML to render a Buy! button inside the div container

const buyButtonEL = document.getElementById("container")
// const buyButtonEL2 = document.innerHTML(<button id="buy-btn">Buy</button>)

function przycisk(){
    buyButtonEL.innerHTML = "<button>Buy!</button>"
    
}
przycisk()

buyButtonEL.addEventListener("click", function(){
    console.log("Buy! button pressed ")
    
})

