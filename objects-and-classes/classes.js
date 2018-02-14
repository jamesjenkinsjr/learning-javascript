class Vehicle {
    constructor(color = 'red', stank = 'new car') {
        this.color = color;
        this.stank = stank;
    }
}

const v = new Vehicle();
const v2 = new Vehicle('yellow', 'old car smell');
console.log(v);
console.log(v2);

//Crea an object assigned to the variable 'vLiteral' using syntax
//similar to the circle, but you are to make a vehicle.
//Consider the properties that a vehcle has.

// const vLiteral = new Vehicle();
// console.log(vLiteral);

const vLiteral = {
    color: 'red',
    stank: 'new car',
};
console.log(vLiteral);