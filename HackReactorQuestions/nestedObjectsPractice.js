var coffeeRegions = [
    {
      country: 'Brazil',
      regions: [
        {
          region:'Bahia', 
          containers: 2,
          "price per container": 1200
        },
        {
          region:'São Paulo', 
          containers: 1,
          "price per container": 1350,
        },
      ],
    },
     {
      country: 'Ethiopia',
      regions: [
        {
          region:'Yirgacheffe', 
          containers: 4,
          "price per container": 1300,
        },
        {
          region:'Sidamo', 
          containers: 2,
          "price per container": 1250,
        },
      ],
    },
    {
      country: 'Indonesia',
      regions: [
        {
          region:'Sumatra', 
          containers: 5,
          "price per container": 1100,
        },
      ]
    }  
  ]
  
//   // "of" gets the values of an array
//   let arrayOfKeys = [];
//   for(let key in coffeeRegions[0]) arrayOfKeys.push(key);
//   console.log("Keys -> ", arrayOfKeys);

//   for(let country of coffeeRegions) {
//       console.log();
//       // "in" gets the keys in each object
//       let keyNumber = 1;
//       for(let key in country) {
//           console.log(`This is Key #${keyNumber} in the Object: ${key.toUpperCase()}`);
//           console.log(`This key has a value of: `, country[key])
//           if(key === 'regions') {
//             for(let regionName of country.regions) {
//                 console.log(`The name of this Region in Regions Array is:`, regionName.region);
//             }
//           }

//           keyNumber += 1;
//           console.log();
//       }
//       console.log();
// }
// let {country, regions: [{region, containers}]} = coffeeRegions[0];
// console.log(country, region, containers);


// function groupBy(arr) { 
//   // input is a arr of strings
  
//   // create the return obj
//   let grouped = {};
  
//   // iterate through the array of strings and create the keys
//   for(let value of arr) {
//     if(!grouped[value[0]]) {
//       grouped[value[0]] = [];
//     }
    
//     if(value[0] in grouped) {
//       grouped[value[0]].push(value); 
//     }
//   }
//   // return an object
//   return grouped;
// } 


// console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'])); 


//1) Warehouse Bins

/*
  Given an object of empty bins (arrays) and an array of items with their type (items), move the item name to 
  the correct bin based on the type. You can assume the type of item will always have a corresponding bin.

  ****Do not harcode check the bin names and do not loop over the objects
 */

  var unsortedItems = [
    {item: 'desk', type: 'homegoods'},
    {item: 'lamp', type: 'homegoods'},
    {item: 'laptop', type: 'electronics'},
    {item: 'moisturizer', type: 'skincare'},
    {item: 'towel', type: 'homegoods'},
    {item: 'mouse', type: 'electronics'},
    {item: 'sunscreen', type: 'skincare'},
    {item: 'bed frame', type: 'homegoods'}
  ]
  
  var binNames = {
    homegoods: [],
    electronics: [],
    skincare: [],
  };
  
  // function warehouseBins(items, bins) {
  //   // if the type keys value in items === to a key in bins, then append that items.item to bins[item['type']]
  //   // how do you do this w/o a loop over at least one of these data structures?

  //   // input is a item arr of objs & and bin obj
  //   for(let eachObj of items) {
  //     if(eachObj['type'] in bins) {
  //       bins[eachObj.type].push(eachObj.item)
  //     }
  //   }
  //   // return the modified bins
  //   return bins;
  // }
  
  // console.log(warehouseBins(unsortedItems, binNames)); // ==> 
  /*
    {
      homegoods: ['desk', 'lamp', 'towel', 'bed frame'],
      electronics: ['laptop', 'mouse'],
      skincare: ['moisturizer', 'sunscreen'],
    }
  */
  
  
  //2) How many treats
  
  /* A dog is being trained to fetch the paper. When the dog takes the right action, the dog receives a treat. Otherwise, 
  the dog receives nothing.
  
  Given an array of days the dog attempted to fetch the paper, return how many times the dog received a treat. 
  You know the dog performed the correct action when the description says 'brought the paper.' 
  */
  
  // var attempts = [
  //   {day: 'Monday', action: 'ran around the yard'},
  //   {day: 'Tuesday', action: 'barked at strangers'},
  //   {day: 'Wednesday', action: 'brought the paper'},
  //   {day: 'Thursday', action: 'dug a hole'},
  //   {day: 'Friday', action: 'brought the paper'},
  //   {day: 'Saturday', action: 'brought the paper'},
  //   {day: 'Sunday', action: 'went to sleep'},
  // ]
  
  // function howManyTreats(actions) {
  //   // create a counter that will return the amount of times the dog received a treat
  //   let counter = 0;

  //   // iterate through each obj in the arr
  //   for(let eachObj of attempts) {
  //     if(eachObj.action === 'brought the paper') counter += 1;
  //   }

  //   // return the counter
  //   return counter;
  // }
  
  // console.log(howManyTreats(attempts)); //==> 3
  
  
  // //3) Destroy the Robot
  
  // /*
  // There are killer robots on the loose! And they look like all the other robots. There is only one way to tell the robots apart: by what they say. 
  // All robots speak in 'beep' and 'boop'. A killer robot will always speak in a string that contains beeps or boops in multiples of 4, while a non-killer robot will never speak with both 'beeps' and 'boops' in multiples of four.
  
  // Given a an array of robots and their strings, find the killer robots! Return a array of true and false. True marks a killer robot and false marks a normal robot.
  //  */
  
  var robotTalk = [
    {str: 'boop beep boop'},
    {str: 'boop boop beep beep boop boop beep beep'},
    {str: 'beep beep beep beep boop boop boop'},
    {str: 'boop boop boop boop beep beep beep beep boop boop boop boop'},
    {str: 'boop beep boop beep boop'},
    {str: 'boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep'}
  ]
  
  // function killerRobots(strings) {
  //   // input is a arr of objs

  //   // create a arr for future boolean values
  //   let boolArr = [];

  //   // iterate through each obj in the arr
  //   for(let eachObj of strings) {
  //     // split the str keys value into a arr of strings using " " as the delimeter, get the length of the arr
  //     let arrOfStringsLength = eachObj.str.split(" ").length;

  //     // if the length is divisible by 4 then it is a killer robot and push true to the boolArr
  //     if(arrOfStringsLength %4 === 0) {
  //       boolArr.push(true);
  //     } else {
  //       boolArr.push(false);
  //     }
  //   }
  //   // return the boolArr
  //   return boolArr;
  // }

  // console.log(killerRobots(robotTalk)); //=> [false, true, false, true, false, false]
  
  


var students = [
  {
    name: 'joe',
    color: 'blue',
    age: 13,
    height: 61,
    "favorite hobbies": ['drawing', 'sports', 'swimming'],
    birthday: '1/12/1992'
  },
  {
    name: 'dave',
    color: 'red',
    age: 14,
    height: 60,
    "favorite hobbies": ['swimming', 'biking', 'hiking'],
    birthday: 'January 29, 1992'
  },
  {
    name: 'sally',
    color: 'yellow',
    age: 13,
    height: 64,
    "favorite hobbies": ['biking', 'singing', 'dancing']
  },
  {
    name: 'jane',
    color: 'white',
    age: 12,
    height: 58,
    "favorite hobbies": ['dancing', 'swimming', 'drawing']
  },
  {
    name: 'kayla',
    color: 'blue',
    age: 14,
    height: 62,
    "favorite hobbies": ['hiking', 'sports', 'drawing']
  },
];

// findHobbies, given an array of student objects, returns:
  // an object containing three properties:
    // hobby
      // the targeted hobby
    // students
      // array of student names that match target hobby
    // averageAge
      // average age of students that match target hobby

// var findHobbies = function (arr, target) {
//   // input is a arr of objs & a string target hobby 

//   // create the return obj
//   let returnObj = {"hobby": target, "students": [], "averageAge": null};

//   // create a agesSum variable to hold the sum of all the students ages with the target hobby
//   let agesSum = 0;

//   // iterate through the arr of objs
//   for(let eachObj of arr) {
//     // if students hobby is === "swimming", push their name into the returnObj.students arr
//     if(eachObj["favorite hobbies"].includes(target)) {
//       returnObj.students.push(eachObj.name);
//       agesSum += eachObj.age;
//     }
//   }
//   returnObj.averageAge = agesSum / returnObj.students.length;

//   // return the return obj
//   return returnObj;
// }

// console.log(findHobbies(students, 'swimming')); 
/* should return: 
  {
    hobby: 'swimming',
    students: ['joe', 'dave', 'jane'],
    averageAge: 13
  }
*/


//----------------------------------------

// Debugging: Expendable Income
  //Create a function that returns how much expendable income will be left in your budget after paying all your bills.
  //  Expendable income is 20% of the remaining money after paying for everything. If there is no money left over,
  //  return 0. Return the amount as dollars.

// Debug the code below
function expendableIncome(bills, budget) {
  var total = 0;
  for (var i = 0; i < bills.length; i ++) {
    total += Number(bills[i].cost);
  }
  if((Number(budget) - total) > 0 ) return "$" + (Number(budget) - total) * 0.2;
  else return 0;
}


// Example Function Invocations
var test1 = expendableIncome([
  {
    cost: "50",
    type: "water"
  },
  {
    cost: "30",
    type: "gas"
  },
  {
    cost: "100",
    type: "electricity"
  },
  {
    cost: "20",
    type: "recology"
  },
  {
    cost: "500",
    type: "rent"
  }], "2000") // ➞ "$260"
  
  // console.log(test1);

var test2 = expendableIncome([], "100") // ➞ "$20" 
// console.log(test2);

var test3 = expendableIncome([
  {
    cost: "1000",
    type: "rent",
  },
  {
    cost: "200",
    type: "electricity"
  }
], "1000") // ➞ "$0"

// console.log(test3);


// //Get these tests to pass
// console.log('test 1:', test1 === "$260")
// console.log('test 2:', test2 === "$20")
// console.log('test 3:', test3 === "$0")


//-------------------



// 3) --------------------------------------

/*Science Experiment:

  Do you know the story of the hungry caterpillar? If you don't, look it up! 
  It's a famouse kid's story about a caterpillar that eats many foods over a week to grow 
  and grow until it becomes a beautiful butterfly.

  You are testing out the book with a bunch of caterpillars. You have recorded their 
  eating habits over six days. You are now ready to report your findings.
 */


  var eatingHabits = [
    {
      day: 'Monday', 
      food: ['banana', 'ice cream', 'apple', 'leaf', 'cheese']
    },
    {
      day: 'Tuesday',  
      food: ['candy', 'cake', 'ice cream', 'cheese'],
    },
    {
      day: 'Wednesday', 
      food: ['leaf', 'cheese', 'jelly', 'hamburger'],
    },
    {
      day: 'Thursday',
      food:['hamburger', 'banana', 'leaf', 'tomato'],
    },
    {
      day: 'Friday',
      food:['ice cream', 'apple', 'leaf', 'pie', 'cake'],
    },
    {
      day: 'Saturday',
      food: ['apple', 'leaf', 'pie', 'cheese', 'candy', 'tomato'],
    }
  ]
  
  //a) Given an array of the days the caterpillars ate and the food they consumed, find out how many days a particular food was eaten.
  
    //hungryCaterpillars(eatingHabits, 'apple') //=> 3
    //hungryCaterpillars(eatingHabits, 'tomato') //=> 2
  
  // function hungryCaterpillars(arr, food) {
  //   // input is a arr of obj, and string of the food that you are checking for

  //   // create a return counter
  //   let returnCounter = 0;

  //   // iterate through the arr of objs
  //   for(let eachObj of arr) {
  //     if(eachObj.food.includes(food)) returnCounter += 1;
  //   }
  //   // return the counter
  //   return returnCounter;

  // }
  // console.log('caterpillars a: ', hungryCaterpillars(eatingHabits, 'apple')) //=> 3
  // console.log('caterpillars a: ', hungryCaterpillars(eatingHabits, 'tomato')); //=> 2
  
  //------------------------------

  /* FIND THIRD LARGEST VALUE IN AN ARRAY OF OBJECTS */
//take an array of movie objects and return the third highest rotten tomato rating as a percentage and the release Year 

// function thirdTopRatedMovie (arr){
//   // input is a arr of objs

//   // find the third top rate movie and return it

//   // create a arrOfRatings
//   let arrOfRatings = [];

//   // iterate through the arr of objs
//   for(let eachObj of arr) {
//     // push the ratings value into the arrOfRatings
//     arrOfRatings.push(eachObj.rating);
//   }

//   // sort the arrOfRatings using the arr.sort() method
//   arrOfRatings.sort();
//   // grab the 3rd element from the end of the arr and return it
//   return arrOfRatings[arrOfRatings.length - 3];
// }

var starWars = [
  {title: 'Episode IV: A New Hope', releaseYear: 1977, rating: 0.92},  //rated #3
  {title: 'Episode V: The Empire Strikes Back', releaseYear: 1980, rating: 0.94}, //rated #1
  {title: 'Episode VI: Return of the Jedi', releaseYear: 1983, rating: 0.82},
  {title: 'Episode I: The Phantom Menace', releaseYear: 1999, rating: 0.53},
  {title: 'Episode II: Attack of the Clones', releaseYear: 2002, rating: 0.65},
  {title: 'Episode III: Revenge of the Sith', releaseYear: 2005, rating: 0.80},
  {title: 'Episode VII: The Force Awakens', releaseYear: 2015, rating: 0.93}, //rated #2
  {title: 'Episode VIII: The Last Jedi', releaseYear: 2017, rating: 0.90},
  {title: 'Episode IV: The Rise of Skywalker', releaseYear: 2019, rating: 0.51},
  {title: 'Rogue One: A Star Wars Story', releaseYear: 2016, rating: 0.84},
  {title: 'Solo: A Star Wars Story', releaseYear: 2018, rating: 0.70}
]; 

// console.log(thirdTopRatedMovie(starWars))