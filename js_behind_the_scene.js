'use strict';

// Scope and Chain Scope
function calcAge1(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating New variable wwith same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      // output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // add(2, 3); if the function id called outside of the if statement if will produce an error, since it was invoked outside of its scope
    console.log(millenial);
  }
  printAge(); // If a function was declared inside another function it needs to be called inside that function
  return age;
}

const firstName = 'Jonas';
calcAge1(1991);

// Hoisting & Temporal Dead Zone (TDZ)

// Variables
console.log(me); //undefined
// console.log(job); //error:uninitialized
// console.log(year); //error:uninitialized

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); //function declaration can be access before it is defined
// console.log(addExpr(2, 3)); error:unitialization
// console.log(addArrow(2, 3)); error:undefined

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); //numProducts is undefined, not 10 because of hoisting
var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// This keyword
console.log(this); // it belongs to the window object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // it's undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // it belongs to the window object; the arrow function doesn't have a this keyword
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this keyword will now point to matilda object

const f = jonas.calcAge;
f(); //will return undefined because f is just a regular function; it in NOT attached to any object
