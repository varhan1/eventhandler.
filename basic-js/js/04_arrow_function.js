console.log("------ Arrow Function ------");

// Normal Function
function hello() {
    return "Hello World!";
}

console.log(hello());

// Reassign hello as a function expression (not recommended for named functions)
hello = function() {
    return "Hello World!";
}

console.log(hello());

// Arrow Function
hello = () => {
    return "Hello World! This is from Arrow Function";
}

console.log(hello());

// Arrow Function (shorter syntax)
hello = () => "Hello World! This is from Arrow Function";

console.log(hello());

// Arrow Function with 1 parameter
hello = (myName) => "Hello " + myName + "! This is from Arrow Function";

// Arrow Function with 1 parameter (using template literals)
hello = myName => `Hello ${myName}! This is from Arrow Function`;

console.log(hello("Purnama"));
