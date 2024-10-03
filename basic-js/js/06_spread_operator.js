console.log("------ Spread Operator ------");

// Array
let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

// Without Spread Operator (Array inside array)
let arr3 = [arr1, arr2];
console.log(arr3); // Output: [[10, 20, 30], [100, 200, 300]]

// With Spread Operator (Combining arrays)
let arr4 = [...arr1, ...arr2];
console.log(arr4); // Output: [10, 20, 30, 100, 200, 300]

// With Spread Operator (Adding new values)
let arr5 = [...arr1, 40, 50];
console.log(arr5); // Output: [10, 20, 30, 40, 50]

// With Spread Operator (Adding new values at the start)
let arr6 = [30, 40, 50, ...arr1];
console.log(arr6); // Output: [30, 40, 50, 10, 20, 30]

// Object
let employee = {
    name: "Budi",
    age: 22,
    position: "Software Engineer"
};

// Without Spread Operator (Embedding an object inside another object)
let employee1 = {
    employee, // This will create a nested object
    age: 25,
    city: "Jakarta"
};
console.log(employee1); 
// Output: { employee: { name: 'Budi', age: 22, position: 'Software Engineer' }, age: 25, city: 'Jakarta' }

// With Spread Operator (Merging objects)
let employee2 = {
    ...employee, // This spreads the properties of employee into employee2
    age: 20, // Overwriting age property
    city: "Surabaya"
};
console.log(employee2); 
// Output: { name: 'Budi', age: 20, position: 'Software Engineer', city: 'Surabaya' }
