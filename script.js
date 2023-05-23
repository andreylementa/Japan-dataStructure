'use strict';

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
