class Vehicle {
    constructor(color = 'red', stank = 'new car') {
        this.color = color;
        this.stank = stank;
    }
    drive() {
        console.log('VROOOOOM!');
    }
}

const v = new Vehicle();
const v2 = new Vehicle('yellow', 'old car smell');
console.log(v);
console.log(v2);
v.drive();

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

class Truck extends Vehicle {
    constructor(color='red', stank='new stank', hasLiftKit=true) {
        super(color, stank);
        this.hasLiftKit = hasLiftKit;
    }
    goMudding() {
        console.log('suuuuuuuuuuueeyyyy!');
    }
    drive() {
        console.log('bwaabwabwabwabwah');
    }
}
const t = new Truck();
t.goMudding();
t.drive();
console.log(t);