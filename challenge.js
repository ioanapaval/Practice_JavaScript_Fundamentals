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

//const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}

const averageDolphinsScores = (97 + 112 + 80) / 3;
const averageKoalasScores = (109 + 95 + 50) / 3;

console.log(averageDolphinsScores)
console.log(averageKoalasScores)

if (averageDolphinsScores > averageKoalasScores && averageDolphinsScores >= 100) {
    console.log(`Dolphins are the winners!`)
} else if (averageDolphinsScores < averageKoalasScores && averageKoalasScores >= 100) {
    console.log(`Koalas are the winners!`)
} else if (averageDolphinsScores === averageKoalasScores && averageDolphinsScores >= 100 && averageKoalasScores >= 100) {
    console.log(`There is a tie.`)
} else {
    console.log(`There is no winner!`)
}*/

const bill = 430;
const tip = (bill >= 50 && bill <= 300 ? (0.15 * bill) : (0.2 * bill));

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)

