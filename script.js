'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
  [weekdays[2]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 10,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [weekdays[6]]: {
    open: 12,
    close: 23,
  },
};

const japaneseRestaurant = {
  restName: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],
  workingHours: {
    wed: {
      open: 10,
      close: 23,
    },
    fri: {
      open: 10,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
    sun: {
      open: 12,
      close: 23,
    },
  },
  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
  foodDelivery: function ({
    mainMenuIndex,
    appetizersIndex,
    adress,
    deliveryTime,
  }) {
    console.log(
      `Ваш заказ приедет по адрессу ${adress} в ${deliveryTime} ${this.mainMenu[mainMenuIndex]}, ${this.appetizers[appetizersIndex]}}`
    );
  },
  orderSushi: function (ing1, ing2, ing3) {
    console.log(`Вы заказали суши с ${ing1}, ${ing2}, ${ing3}`);
  },
};

japaneseRestaurant.foodDelivery({
  deliveryTime: '12:30',
  adress: '18 Markham Woods',
  mainMenuIndex: 0,
  appetizersIndex: 1,
});

// Desctructuring Objects

//const { restName, workingHours, mainMenu } = japaneseRestaurant;
//console.log(restName, workingHours, mainMenu);

const {
  menu = [],
  workingHours: Hours = [],
  mainMenu = [],
} = japaneseRestaurant;
console.log(menu, Hours, mainMenu);

// Desctructuring arrays

//const [a, b] = japaneseRestaurant.orderFood(1, 2);
//console.log(a, b);

//// Nested desctructuring

//const nestedArr = [1, 2, [7, 9]];

////const [x1, , x3] = nestedArr;
////console.log(x1, x3);

//const [x1, , [x3, x4]] = nestedArr;
//console.log(x1, x3, x4);

//// Default values

//Spread

const arr = [1, 4, 7];
const newArrSpread = [2, 0, ...arr];
console.log(newArrSpread);
console.log(...newArrSpread);
const newMenu = [...japaneseRestaurant.mainMenu, 'Filad'];
console.log(newMenu);

// Arrays copy

const categoriesCopy = [...japaneseRestaurant.categories];
console.log(categoriesCopy);

// Merge arrays

const menuMerge = [
  ...japaneseRestaurant.appetizers,
  ...japaneseRestaurant.mainMenu,
];
console.log(menuMerge);

//const ingridients = [
//  prompt('Enter ingridient1'),
//  prompt('Enter ingridient2'),
//  prompt('Enter ingridient3'),
//];

//japaneseRestaurant.orderSushi(...ingridients);

// Objects

const newJapanseRestaurant = {
  foundationDate: 2023,
  ...japaneseRestaurant,
  owner: 'Suzuki',
};

console.log(newJapanseRestaurant);

const japaneseRestaurantCopy = { ...japaneseRestaurant };
japaneseRestaurantCopy.restName = 'Sushi Suzuki';
console.log(japaneseRestaurant.restName);
console.log(japaneseRestaurantCopy.restName);

//Rest

const [seawed, , adamami, ...otherFood] = [
  ...japaneseRestaurant.appetizers,
  ...japaneseRestaurant.mainMenu,
];
console.log(seawed, adamami, otherFood);

const { fri, sat, ...weekDays } = japaneseRestaurant.workingHours;
console.log(fri, sat, weekDays);

const sum = function (...nums) {
  console.log(nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
};

sum(2, 5);
sum(1, 4, 7, 3);

const numbers = [3, 10, 11];
sum(...numbers);

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

const [players1, players2] = game.players;
console.log(players1);

console.log(players2);

const [goalkeeper, ...fieldPlayers] = players1;

console.log(goalkeeper);

console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

const players1Total = [
  ...players1,
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];
console.log(players1Total);

const {
  odds: { team1, team2, draw },
} = game;
console.log(team1);
console.log(team2);
console.log(draw);

const printGoals = function (...gamePlayers) {
  let scores = gamePlayers.length;
  console.log(scores);
  for (let i = 0; i < gamePlayers.length; i++) {
    console.log(gamePlayers[i]);
  }
};

printGoals('Kroos', 'Benzema', 'Mingueza');

// 7

team1 < team2 && console.log(game.team2);
team1 > team2 && console.log(game.team1);

const menuAll = [
  ...japaneseRestaurant.appetizers,
  ...japaneseRestaurant.mainMenu,
];
console.log(menuAll);

// for of in Arrays

for (const x of menuAll) {
  console.log(x);
}

for (const x of menuAll.entries()) {
  console.log(`${x[0] + 1}. ${x[1]}`);
}

for (const [index, food] of menuAll.entries()) {
  console.log(`${index + 1}. ${food}`);
}

// Using optional chaining
console.log(japaneseRestaurant.workingHours.fri?.open);

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const x of daysOfWeek) {
  const open = japaneseRestaurant.workingHours[x]?.open ?? 'never';
  console.log(`On ${x} restaurant opens at ${open}`);
  //console.log(
  //  `On ${x} restaurant opens at ${japaneseRestaurant.workingHours[x]?.open}`
  //);
}

// Methods

console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'NOT');
console.log(japaneseRestaurant.order1Food?.(1, 2) ?? 'NOT');

// Arrays

const posts = [
  { name: 'Js is cool', username: 'Dick' },
  { name: 'Js is cool', username: 'Dick' },
];

console.log(posts[0]?.name ?? 'not exist');
console.log(posts[2]?.name ?? 'not exist');

// TASK
// 1

for (const [scores, player] of game.scored.entries()) {
  console.log(scores + 1, player);
}
// 2

let sumOdds = 0;

const oddsValue = Object.values(game.odds);
for (let x of oddsValue) {
  sumOdds += x;
}
console.log(sumOdds / Object.values(game.odds).length);
// 3

for (const [teamName, odd] of Object.entries(game.odds)) {
  const mutableText =
    teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
  console.log(`Rate for ${mutableText} : ${odd}`);
}

// 4

const goalScores = {};

for (const player of game.scored) {
  goalScores[player] ? goalScores[player]++ : (goalScores[player] = 1);
}
console.log(goalScores);

// Set

const ingridients = new Set(['sushi', 'ramen', 'sushi', 'ramen', 'adamami']);

console.log(ingridients);
console.log(ingridients.size);
ingridients.add('pizza');
console.log(ingridients);
console.log(ingridients.size);
console.log(ingridients.has('pizza'));
for (const item of ingridients) {
  console.log(item);
}

// Set remove dublicates

const ingirientsArray = ['sushi', 'ramen', 'sushi', 'ramen', 'adamami', 'luk'];
console.log(ingirientsArray);
const ingridientsRemoveDublicates = new Set(ingirientsArray);
console.log(ingridientsRemoveDublicates);

// Map

const restaurant = new Map();
restaurant.set('name', 'Bench');
restaurant.set(1, 'London, England');
restaurant.set(2, 'Paris, France');
restaurant.set(3, 'Kiev, Ukraine');
console.log(restaurant);

restaurant
  .set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic'])
  .set('open', 10)
  .set('close', 23)
  .set(true, 'Bench is open')
  .set(false, 'Bench is closed');
console.log(restaurant);

const currentTime = 24;
console.log(
  restaurant.get(
    currentTime > restaurant.get('open') &&
      currentTime < restaurant.get('close')
  )
);

console.log(restaurant.has('opens'));
restaurant.delete(1);
console.log(restaurant);
console.log(restaurant.size);
const arrForMap = [1, 2, 3];
restaurant.set(arrForMap, 'hello');
console.log(restaurant);
console.log(restaurant.get(arrForMap));

const question = new Map([
  ['question', 'what is the most popular programming language for frontend?'],
  [1, 'JavaScript'],
  [2, 'Python'],
  [3, 'Java'],
  ['correctAnswer', 1],
  [true, 'correct answer :D'],
  [false, 'This is incorrect'],
]);
console.log(question);

// Converting objects to map

console.log(Object.entries(workingHours));
const workingHoursMap = new Map(Object.entries(workingHours));
console.log(workingHoursMap);

// Quiz app

console.log(question.get('question'));

for (const [key, item] of question) {
  if (typeof key === 'number') {
    console.log(key, item);
  }
}

//const userAnswer = Number(prompt('Choose the option nubmer'));
//console.log(userAnswer);

//console.log(question.get(question.get('correctAnswer') === userAnswer));

document.querySelector('h2').addEventListener('click', function () {
  document.querySelector('h2').style.color = 'red';
  console.log('asdasd');
});

// TASK 3 ______________________________________________________________

const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

// 1

const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

// 2

events.delete(75);
console.log(events);

//3

console.log(90 / events.size);

//4

for (const [timeEvents, event] of events) {
  timeEvents < 45
    ? console.log(`[FIRSTHALF] ${timeEvents}: ${event}`)
    : console.log(`[SECONDHALF] ${timeEvents}: ${event}`);
}

// Working with strings

const airline = 'SkyUp Airline';
const airplane = 'Boeing 737';

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[2]);
console.log('SkyUp'[0]);

console.log(airline.length);
console.log('Boeing 737'.length);

console.log(airplane.indexOf(' '));
console.log(airplane.indexOf('7'));
console.log(airplane.lastIndexOf('7'));
console.log(airline.indexOf('up'));

console.log(airplane.slice(7));
console.log(airplane);
console.log(airplane.slice(0, 6));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(2, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('This is a middle seat.');
  } else {
    console.log('This is not a middle seat.');
  }
};

checkMiddleSeat('21A');
checkMiddleSeat('7B');
checkMiddleSeat('14E');

const x = new String('Hello');
console.log(typeof x);
console.log(typeof x.slice(2));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix the passenger name
const passengerName = 'liNDa'; // Linda
const passengerNameLower = passengerName.toLowerCase();
console.log(passengerNameLower);
const passengerNameFixed =
  passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameFixed);

// Email validation
const email = 'someemail@gmail.com';
const loginEmail = '  SomeEmail@Gmail.com \n';

const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim();
console.log(emailTrimmed);

const emailNormalized = loginEmail.toLowerCase().trim();
console.log(emailNormalized);
console.log(email === emailNormalized);

// Replacing
const ticketPriceEU = '197,23€';
const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
console.log(ticketPriceUS);

const announcement =
  'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Methods return boolean
console.log(airplane);
console.log(airplane.includes('737'));
console.log(airplane.includes('738'));

console.log(airplane.startsWith('Boe'));
console.log(airplane.startsWith('Bt'));
console.log(airplane.startsWith('737'));

console.log(airplane.endsWith('737'));
console.log(airplane.endsWith('Boeing'));

const airplane1 = 'Airbus';

if (airplane.startsWith('Boeing')) {
  console.log('You gonna fly on Boeng!');
}

if (airplane1.startsWith('Boeing')) {
  console.log('You gonna fly on Boeng!');
}

// Example
const checkLuggage = function (luggage) {
  const luggageLower = luggage.toLowerCase();
  if (luggageLower.includes('knife') || luggageLower.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome to the board!');
  }
};

// // split() and join()
console.log('My+name+is+YouRa.'.split('+'));
console.log('YouRa Allakhverdov'.split(' '));

const [firstName, lastName] = 'YouRa Allakhverdov'.split(' ');
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesCapitalized = [];
  for (const n of names) {
    // namesCapitalized.push(n[0].toUpperCase() + n.slice(1));
    namesCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
  }
  const capitalizedFullName = namesCapitalized.join(' ');
  return capitalizedFullName;
};

console.log(capitalizeName('youra allakhverdov'));
console.log(capitalizeName('jack white tiger jr.'));

// Padding
const message = 'Hi there!';
console.log(message.padStart(27, '-').padEnd(37, '-'));

const maskCreditCard = function (cardNumber) {
  const strCardNumber = cardNumber + '';
  const last4 = strCardNumber.slice(-4);
  return last4.padStart(strCardNumber.length, '*');
};

console.log(maskCreditCard(1414312413591239515));
console.log(maskCreditCard('1251543661261363616146126'));

// repeat()
const greeting = 'Hi!';
console.log(greeting.repeat(50));

const howMuchYouLoveSomebody = function (loveNumber) {
  console.log(`I love you ${'❤️ '.repeat(loveNumber)}`);
};

howMuchYouLoveSomebody(100);

// TASK 4

//Test data (for inserting into the textarea including spaces):

//underscore_case
//  first_name
//next_Variable
//   Calculate_AGE
//arrived_flight

//This output should appear (5 separate console.log outputs):
//underscoreCase
//firstName
//nextVariable

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textLine = document.querySelector('textarea').value.split('\n');
  console.log(textLine);
  for (const i of textLine) {
    const [word1, word2] = i.split('_');
    //console.log(word1, word2);
    const wordTrim1 = word1.trim();
    const wordTrim2 = word2.trim();
    //console.log(wordTrim1, wordTrim2);
    const valueResult =
      wordTrim1.toLowerCase() +
      wordTrim2[0].toUpperCase() +
      wordTrim2.slice(1).toLowerCase();
    console.log(valueResult);
  }
});
