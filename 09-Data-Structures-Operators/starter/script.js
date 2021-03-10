'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will 
    be delivered to ${address} at ${time}.`)
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Clayton Hill Dr.',
  starterIndex: 1
});

//Notes:

//**Object Destructuring**

const {name, openingHours, categories} = restaurant;
  //This will create 3 new variables based on the restuarant object:
console.log(name, openingHours, categories);

//How to assign variables from object to new variable names:
const {
    name: restuarantName,
    openingHours: hours,
    categories: tags
  } = restaurant;
console.log(restuarantName, hours, tags);

//Can combine default values with new variable names:
const {
  menu = [],
  starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

//Mutating variables when destructuring objects:
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
  //cannot use let or const to create a new variable: must mutate the original variables:
  //The example below won't work since you cant assign a code block (JS thinks the curly braces are a code block):
  // {a, b} = obj;
  // console.log(a, b);
  //Must wrap it in parentheses:
  ({a, b} = obj);
  console.log(a, b);

//Nested Objects:
//Assume we want to create variables for the open/close hours for Friday (it's a nested object);
const { fri: {open: o, close: c} } = openingHours;
console.log(o, c);


//**Array Destructuring**
//Destructuring Method: Assigning multiple variables to array:
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

//Destructuring Method: Skipping array index while destructuring:
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Destructuring Method: Swapping variables:
//Old method:
    // const temp = main;
    // main = secondary;
    // secondary = temp;
    // console.log(main, secondary);
//New method (no temp variable needed):
[main, secondary] = [secondary, main];
console.log(main, secondary);


//Destructuring Method: receive 2 return values from a function:
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring:
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
//I will be assigned to 2, 4 is skipped, and j/k assigned to nested 5/6
console.log(i, j, k);

//Default Values:
const [p, q, r] = [8, 9];
console.log(p, q, r);
  //logs r as undefined:
//You can assign default values:
const [f=1, e=1, g=1] = [8, 9];
console.log(f, e, g);