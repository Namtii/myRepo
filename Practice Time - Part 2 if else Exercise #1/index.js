let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

let free = "discount for ess than 6 years old is ticket for free "
let childDiscount = "child discount is for 6 to 17 years old "
let studentDiscount = "student discount is for 18 to 26 years old "
let fullPrice = "full Price is for 27 to 66 years old "
let seniorCitizenDiscount = "senior citizen discount is for over 66 years old "



function discount(){
    if(age < 6){
    console.log(free)
    }
    else if(age >= 6 && age <= 17){
        console.log(childDiscount)
    }
    else if(age > 17 && age <= 26){
        console.log(studentDiscount)
    }
    else if(age > 26 && age <= 66){
        console.log(fullPrice)
    }
    else{
        console.log(seniorCitizenDiscount)
    }
}


discount()
// let age = 5
// discount()
// let age = 22
// discount()
// let age = 33
// discount()
// let age = 69
// discount()

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

