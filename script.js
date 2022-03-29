/*let js = "amazing";
console.log(40 + 4 - 3 + 5);

console.log("jonas")
console.log(23)

let firstName = "jonas"
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

firstName = "ioana"
console.log(firstName)
console.log(true)
let javascriptFun = true;
console.log(javascriptFun)
console.log(typeof true);
console.log(typeof javascriptFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');
javascriptFun = 'yes!'
console.log(typeof javascriptFun);

let year;
console.log(year);
console.log(typeof year);

let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer'
job = 'teacher';

lastName = 'Paval';
console.log(lastName);
const now = 2037;
const ageIoana = now - 1989;
const ageIulia = now - 2020;
console.log(ageIoana, ageIulia);

console.log(ageIoana * 2, ageIoana / 10, 2 ** 3)

const firstName = 'Ioana';
const lastName = 'Paval';
console.log(firstName + " " + lastName)

let x = 10 + 5;
x += 10;
x *= 4;
console.log(x)
x--;
console.log(x);
x++;
x++;
console.log(x)
console.log(ageIoana >= ageIulia);
const isFullAge = ageIulia >= 17;
console.log(isFullAge);
const now = 2037;
const ageIoana = now - 1989;
const ageIulia = now - 2020;
console.log(now - 1989 > now - 2020);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageIoana + ageIulia) / 2;
console.log(ageIoana, ageIulia, averageAge);*/

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = "Ioana";
const job = "teacher";
const birthYear = 1989;
const year = 2037;
const ioana = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(ioana);

const ioanaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(ioanaNew);

console.log(`String with \n\
multiple\n\
lines`);

console.log(`string
multiple
lines`)

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}
let century;
const birthYear = 2012;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ioana'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log(`23` + `10` - 3);
console.log(`23` * `2`);

let n = `1` + 1; //'11'
n = n - 1; // 11-1=10
console.log(n);

// in js there are 5 falsy values: 0,"",undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ioana"));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 0;
if (money) {
    console.log(`Don's spend it all;)`)
} else {
    console.log(`You should get a job!`)
}

let height;
if (height) {
    console.log(`Height is defined.`);
} else {
    console.log(`Height is undefined.`)
}

const age = '18';
if (age === 18) console.log(`You just become an adult. (strict)`)

if (age == 18) console.log(`You just become an adult. (loose)`)

const favourite = Number(prompt(`What's your favorite number`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//`23`=23
    console.log(`Cool! 23 is an amazing number`)
} else if (favourite === 7) {
    console.log(`7 is also a cool number!`)
} else if (favourite === 9) {
    console.log(`9 is also a cool number!`)
} else {
    console.log(`Number is not 23 or 7 or 9.`)
}
if (favourite !== 23) {
    console.log(`Why not 23!`)
}

const age = 21;
if (age >= 20 && age < 30) {
    console.log(`howdy!`)
}

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense)


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log(`Someone else should drive...`)
// }

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log(`Someone else should drive...`)
}

const day = `thursday`;
switch (day) {
    case `monday`:
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup.`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend.`);
        break;
    default:
        console.log(`Not a valid day!`)
        break
}

if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup.`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend.`)
} else {
    console.log(`Not a valid day!`)
}

if (23 > 10) {
    const str = `23 is bigger`;
}

const me = `Ioana `
console.log(`I'm ${2037 - 1991} years old ${me}`)*/

// conditional operator
const age = 23;
age >= 18
  ? console.log(`I like to drink wine.`)
  : console.log(`I like to drink water.`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `I like to drink wine.`;
} else {
  drink2 = `I like to drink water.`;
}

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

var pig = 10;
var pig = 21;
console.log(pig);
