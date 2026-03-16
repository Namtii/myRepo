// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnb = {
    name: "Castle",
    yourcomment: "I want to go there as first Trip",
    rooms:{
        firstRoom:{
            guest: 2,
            beds: 2,
            bath: 1,
            available: true  
        },
        secondRoom:{
            guest: 2,
            beds: 2,
            bath: 1,
            available: true   
            
        },       
    },
    price: 173 + " / per night",
    location:{
        country: "Italy",
        city: "Rome",
    },
     reviews:{
        numberOfReviews: 271,
        reviewText: ["it was good", "far from bus", "no shops arround"]
     },
     selectedDateIsAvailable: true   
}

console.log("Your wishlist group: " + airbnb.name)
console.log("Your comment: " + airbnb.yourcomment)
console.log(airbnb.location)
console.log("price: " + airbnb.price)
console.log(airbnb.rooms)
console.log(airbnb.reviews)

// console.log("country location: "+ airbnb.location.country)
// console.log("city location: " + airbnb.location.city )
// console.log("Reviews: " + airbnb.reviews.numberOfReviews)
// console.log("Reviews comments: " + airbnb.reviews.reviewText)





