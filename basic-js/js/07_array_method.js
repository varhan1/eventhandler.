console.log("------ Array Method ------");

// forEach: Iterating over array elements
let arr = [10, 20, 30, 40];
arr.forEach(function(val, key) {
    console.log(`Array value in index-${key} is ${val}`);
});
// Output: 
// Array value in index-0 is 10
// Array value in index-1 is 20
// Array value in index-2 is 30
// Array value in index-3 is 40

// Map: Creating a new array with squared values
let arrSquare = arr.map((val) => val * val);
console.log(arrSquare);
// Output: [100, 400, 900, 1600]
