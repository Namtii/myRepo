// Task 4: Operating on arrays (for loops)

const arr = [1, 2, 3, 4, 5];

// 1. Write for loop which displays odd elements in arr

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(`Odd elements using for loop: ${arr[i]}`);
    }};


// TODO: your code goes here

// 2. Do the same using forEach

arr.forEach((value, index) => {
    if (value % 2 !== 0) {
        console.log(`Odd elements using forEach: ${arr[index]}`);
    }});
 
// TODO: your code goes here

// 3. Do the same using for...of

for (const num  of arr) {{
    if (num % 2 != 0){
        console.log(`Odd elements using for...of: ${num}`);     
    }
}};

// TODO: your code goes here

for (const num in arr) {
    if (arr[num] % 2 !==0)
    console.log(`Odd elements using for...in: ${arr[num]}`);
};

// 4. Do the same using for...in
 
// TODO: your code goes here