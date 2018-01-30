//comparison
//things that we compare must be comparible
//comparible means that I can use: 
//<, <=, >, >=, ===, !== (the essentials)
const aString = 'abc';
const anotherString = 'abcd';
const aNumber = 123;
const anotherNumber = 123.2;
console.log('aString === anotherString: ', aString === anotherString);
console.log('aString !== anotherString: ', aString !== anotherString);
console.log('aString < anotherString: ', aString < anotherString);
console.log('aString > anotherString: ', aString > anotherString);
console.log('aString >= anotherString: ', aString >= anotherString);
console.log('aString <= anotherString: ', aString <= anotherString);
console.log('aString === anotherString: ', aNumber === anotherNumber);
console.log('aString !== anotherString: ', aNumber !== anotherNumber);
console.log('aString < anotherString: ', aNumber < anotherNumber);
console.log('aString > anotherString: ', aNumber > anotherNumber);
console.log('aString >= anotherString: ', aNumber >= anotherNumber);
console.log('aString <= anotherString: ', aNumber <= anotherNumber);

//Conditional statements
// if -> using it to run code based on answer to question
//if - else -> run code based on answer to question, with fallback
//if - else if - else -> many questions that determine code to run
//Note: There is a switch statement as well

//if
if(3 === 3){
    console.log('Orange Crush is delicious');
}

if('a' === 'b'){
    console.log('this will never print');
}

//if else
if ('grape' === 'banana'){
    console.log('this will never happen');
} else {
    console.log('This is a backup plan');
}

//if elseif else
//const someNumber = 100;
const someNumber = 42;
if(someNumber === 100){
    console.log('it is 100');
} else if(someNumber === 42){
    console.log('The meaning of life');
} else {
    console.log('None of the others worked');
}