'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive!`);
// const interface = `Audio`

`use strict`;

// function logger() {
//     console.log(`My name is Ioana`);
// }
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration;
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1989);
console.log(age1);

//function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1989);
// console.log(age2);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1989, `Ioana`));
console.log(yearsUntilRetirement(1980, `Bob`));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3))


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    // return `${ firstName } retires in ${ retirement } years`
}
console.log(yearsUntilRetirement(1989, `Ioana`));
console.log(yearsUntilRetirement(1950, `Mike`));

// arrays !
`use strict`;
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

const firstName = `Ioana`;
const ioana = [firstName, `Paval`, 2037 - 1989, `teacher`, friends];
console.log(ioana);

//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = [`Michael`, `Steven`, `Peter`];
//add elements;
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);
friends.unshift(`John`);
console.log(friends);

//remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(`23`));

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven.`)
}

const ioanaArray = [
    `Ioana`,
    `Paval`,
    2037 - 1989,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];
console.log(ioanaArray);

const ioana = {
    firstName: `Ioana`,
    lastName: `Paval`,
    age: 2037 - 1989,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
}
console.log(ioana);
console.log(ioana.lastName);
console.log(ioana[`lastName`]);

const nameKey = 'Name';
console.log(ioana[`first` + nameKey]);
console.log(ioana[`last` + nameKey]);

// const interestedIn = prompt(`What do you want to know about jonas? Choose between firstName, lastName, age, job and friends`);

// if (ioana[interestedIn]) {
//     console.log(ioana[interestedIn]);
// } else {
//     console.log(`Wrong request! Choose between firstName, lastName, age, job and friends `)
// }

ioana.location = `United States`;
ioana[`twitter`] = `@ioanapaval`;
console.log(ioana);

//challenge

console.log(`${ioana.firstName} has ${ioana.friends.length} friends and his best friend is called ${ioana.friends[0]}`)

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear
    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    //}
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;



        // console.log(jonas.calcAge());
        // console.log(jonas[`calcAge`](jonas.birthYear));
        // console.log(jonas.age);
        // console.log(jonas.age);
        // console.log(jonas.age);

        //Challenge
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} years old teacher and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`
    }
}
console.log(jonas.getSummary())
console.log(jonas.calcAge())
console.log(jonas.age);

//`for` loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1989,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true,
];
const type = [];
for (let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
    // filling types array
    // type[i] = typeof jonas[i];
    type.push(typeof jonas[i]);
}
console.log(type);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    // ages[i] = 2037 - years[i];
    ages.push(2037 - years[i]);
}

console.log(ages)

//continue and break
console.log(`---Only string---`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== `string`) continue;
    console.log(jonas[i], typeof jonas[i]);
}
//break with number
console.log(`---Break with number---`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === `number`) break;
    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    `Jonas`,
    `Schmedtmann`,
    2037 - 1989,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
};

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---Starting exercise ${exercise}---`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Weight lifting nr. ${rep}`);
    };
}*/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
};

//'while' loop
let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}