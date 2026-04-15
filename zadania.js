// Task 4: Operating on arrays (for loops)

const arr = [1, 2, 3, 4, 5];

// 1. Write for loop which displays odd elements in arr

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }};

console.log('Odd elements using for loop:');
// TODO: your code goes here

// 2. Do the same using forEach

arr.forEach(zmienna => {
    if (zmienna % 2 !== 0) {
        console.log(zmienna);
    }});


console.log('Odd elements using forEach:');
// TODO: your code goes here

// 3. Do the same using for...of

for (const num  of arr) {{
    if (num % 2 != 0){
        console.log(num);     
    }
}};
console.log('Odd elements using for...of:');
// TODO: your code goes here

for (const num in arr) {
    if (arr[num] % 2 !==0)
    console.log(arr[num]);
};

// 4. Do the same using for...in
console.log('Odd elements using for...in:');
// TODO: your code goes here