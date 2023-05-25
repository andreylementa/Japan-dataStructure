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
