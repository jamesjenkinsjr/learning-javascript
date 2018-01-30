// single line comment
/**
* multiple line
* comment
**/

//Variables
var name = "James"; //old skool JS (deprecated)
const fruit = "Banana"; //constant binding (lock it in the cup)
let veggie = "Carrot"; //similar to var but other differences...
console.log("Name: ", name); //print thing
console.log("Fruit: ", fruit);
console.log("Veggie: ", veggie);
//Simple Data Types
//Strings
const aString = "sterf and thangz";
const anotherString = 'other thangs and sterf';
const stringWithNumbers = '1234.56';
console.log("aString: ", aString);
console.log("anotherString: ", anotherString);
console.log("stringWithNumbers: ", stringWithNumbers);
console.log("What is the type of 'aString'? ", typeof aString);

//Numbers
const aNumber = 1;
const anotherNumber = 3.5;
console.log("aNumber: ", aNumber);
console.log("anotherNumber: ", anotherNumber);
console.log("aNumber: ", typeof aNumber);
console.log("anotherNumber: ", typeof anotherNumber);

//Arrays
const anArray = [1, 2, 3, 4];
console.log("anArray: ", anArray);
console.log("anArray: ", typeof anArray);
console.log("Items in anArray?", anArray.length);
//Dot after anArray accesses property 'length' of the var
const aStringArray = ["Cheese", "Bacon", "Eggs"];
console.log("aStringArray: ", aStringArray);
console.log("aStringArray: ", typeof aStringArray);

//Objects
let X = [];
const anObject = {
    'color': 'red', //key:value => key is 'color' the value is 'red'
    size: 500, //keys are strings, but the quotes are implied
    'toppings': ['pepperoni', 'cheese', 'jalapenos']
};
console.log("anObject: ", anObject);
console.log("aStringArray: ", typeof anObject);
console.log("What is the color of 'anObject'?", anObject.color);
console.log("What is the size of the object?", anObject.size);
console.log("What is the 2nd topping?", anObject.toppings[1]);