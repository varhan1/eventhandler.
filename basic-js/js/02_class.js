console.log("------ Class ------");

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

// Array of car brands
let carBrands = ["Ford", "Toyota", "BMW", "Tesla", "Honda"];
let cars = [];

// Creating instances of Car for each brand using loop
for (let m = 0; m < carBrands.length; m++) {
    let car = new Car(carBrands[m]);
    cars.push(car);
}

// Presenting each car
for (let car of cars) {
    console.log(car.present());
}