// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

let personObject = {
    name: "Per",
    age: 35,
    country: "Norway"
    
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData(){
    let string =  personObject.name + " is " + personObject.age + " years old and lives in " + personObject.country
    console.log(string)
}


// Call the logData() function to verify that it works
logData()
