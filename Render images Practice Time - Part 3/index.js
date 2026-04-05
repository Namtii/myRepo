// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
let zdjatka = document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function render(leads) {
     
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems +=             
                `<img class="team-img" src="${leads[i]}"> `
         
            console.log(listItems)
            
    }
    zdjatka.innerHTML = listItems
}
render(imgs)

 