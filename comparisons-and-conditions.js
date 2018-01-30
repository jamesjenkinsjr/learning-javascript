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