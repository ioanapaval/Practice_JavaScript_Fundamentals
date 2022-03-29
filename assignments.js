/*const country = "Romania";
const continent = "Europe";
let population = 19.23;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

language = "romanian";

let halfPopulation = population / 2;

population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description)

if (population > 33) {
    console.log(`${country} population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million bellow average`);
}

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border.`)
// } else {
//     console.log(`No borders`);
//}

if (language !== `english` && population < 50 && !isIsland) {
    console.log(`You should live in Romania`);
} else {
    console.log(`Romania does not meet your criteria :(.)`)
}

switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
        break;
}

console.log(`${country}'s population is ${population > 33 ? `above` : `below`} average`)

`use strict`;

//funtion declarations vs. expressions
const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
let italy = describeCountry(`Italy`, 59.55, `Rome`);
let spain = describeCountry(`Spain`, 47.35, `Madrid`);
let denmark = describeCountry(`Denmark`, 5.83, `Copenhagen`);
console.log(italy);
console.log(spain);
console.log(denmark);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
italy = percentageOfWorld1(59.55);
spain = percentageOfWorld1(47.35);
denmark = percentageOfWorld1(5.83);
console.log(italy);
console.log(spain);
console.log(denmark);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
italy = percentageOfWorld1(59.55);
spain = percentageOfWorld1(47.35);
denmark = percentageOfWorld1(5.83);
console.log(italy);
console.log(spain);
console.log(denmark);

//arrow functions
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(59.55));
console.log(percentageOfWorld3(47.35));
console.log(percentageOfWorld3(5.83));

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world`
}
const china = describePopulation(`China`, 1441);
italy = describePopulation(`Italy`, 59.55);
spain = describePopulation(`Spain`, 47.35);
denmark = describePopulation(`Denmark`, 5.83);
console.log(china);
console.log(italy);
console.log(spain);
console.log(denmark);

const populations = [1441, 59.55, 47.35, 5.83];
console.log(populations.length === 4 ? `true` : `false`);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages)

const neighbours = [`Ukraine`, `Moldova`, `Bulgaria`, `Serbia`, `Hungary`]
neighbours.push(`Utopia`);
console.log(neighbours)

neighbours.pop();
console.log(neighbours)

if (!neighbours.includes(`Germany`)) {
    console.log(`Probably not a central European country :D`)
}

const indexCountry = neighbours.indexOf(`Bulgaria`)
neighbours[indexCountry] = `Republic of Bulgaria`;
console.log(neighbours)*/
`use strict`;
const myCountry = {
    country: `Romania`,
    capital: `Bucharest`,
    language: `romanian`,
    population: 19,
    neighbours: [`Ukraine`, `Moldova`, `Bulgaria`, `Serbia`, `Hungry`],
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)