
`use strict`;
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgScoreDolphins = calcAverage(85, 54, 41);
const avgScoreKoalas = calcAverage(23, 34, 27);
console.log(avgScoreDolphins);
console.log(avgScoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs.${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koala win (${avgKoalas} vs. ${avgDolphins})`
    } else {
        return `No team wins!`
    }
}

console.log(checkWinner(avgScoreDolphins, avgScoreKoalas));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let averageDoplhins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);
console.log(averageDoplhins, averageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
    } else {
        return `No one wins`
    }
}

console.log(checkWinner(averageDoplhins, averageKoalas));

averageDoplhins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(averageDoplhins, averageKoalas));

const calcTip = function (billValue) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, total);

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

john.calcBMI()
mark.calcBMI()

if (mark.bmi > john.bmi) {
    console.log(`Mark's bmi (${mark.bmi}) is higher than John's (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`John's bmi (${john.bmi}) is higher than Mark's (${mark.bmi})`);
}*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

for (i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i]
    // tips.push(calcTip(bills[i]));
    // totals.push(bills[i] + tips[i])
}
console.log(bills, tips, totals);

const arr = [2, 4, 3, 2, 4, 7];


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    };
    return sum / arr.length;
};
console.log(calcAverage(arr));

