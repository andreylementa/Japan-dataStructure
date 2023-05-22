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
