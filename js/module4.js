{
    // Задача 1
    function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza(null);
const pointer = makePizza;
}

{
    // Задача 2
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

}

{
    // Задача 3
function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese",  function eatPizza(pizzaName){
	//  console.log(`Eating pizza ${pizzaName}.`);
});

}

{
    // Задача 4
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
  
      for (const pizza of this.pizzas){
          if (pizza === pizzaName) {
              return onSuccess(pizzaName);
          }
      }
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

}

{
    // Задача 5
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

 orderedItems.forEach(function (number) {

	totalPrice += number;

});

  // Change code above this line
  return totalPrice;
}

// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 6
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.forEach(function (number) {

    if (number > value) {
      filteredNumbers.push(number);
    }
	
});
  
  // Change code above this line
  return filteredNumbers;
}

// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 7
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(function (number){
  	if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });

  return commonElements;
  // Change code above this line
}

// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 8
const calculateTotalPrice = (quantity, pricePerItem) =>{
	return quantity * pricePerItem;
};
// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 9
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 10
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 11
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 12
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
// Method calls with callbacks
// console.log(calculateTotalPrice([12, 85, 37, 4]));


}

{
    // Задача 13

function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];
  
  
    numbers.forEach((number, index) => {
    newArray.push(number);

      if (number % 2 === 0) {
          number = number + value;
          newArray.splice(index, 1, number);
      } 
      
  });
  
  return newArray;
  // Change code above this line
}

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 14

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 15

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 16

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 17

const getUserNames = users => {
  
  const names = users.map(value => value.name);  
	return names;
  };
// Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 18

const getUserEmails = users => {
  
  const emails = users.map(value => value.email);  
	return emails;  

  };
// Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 19

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(value => value % 2 === 0 );
const oddNumbers = numbers.filter(value => value % 2 !== 0 );

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 20

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
	(genre, index, array) =>array.indexOf(genre) === index
);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 21

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(value => value.rating >= MIN_RATING);
const booksByAuthor = books.filter(
	({author}) => author == AUTHOR
);

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 22

const getUsersWithEyeColor = (users, color) => {
  
    const usersEyeColors = users.filter(value => value.eyeColor == color);
    return usersEyeColors;
};

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 23

const getUsersWithAge = (users, minAge, maxAge) => {
  
 const userAge = users.filter(user => user.age >= minAge && user.age <= maxAge);
	return userAge;
};
// Ch
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 24

const getUsersWithFriend = (users, friendName) => {
  const userWhithFriends = users.filter(user => user.friends.includes(friendName));
  return userWhithFriends;
};
// Ch
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 25

const getFriends = (users) => {

    const allFriends = users.flatMap(user => user.friends);
    
    console.log(allFriends);
   
   const uniqueFriends = allFriends.filter(
   	(friend, index, array) => array.indexOf(friend) === index
   );
	return uniqueFriends;
};

// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 26

const getActiveUsers = (users) => {
  const userActive = users.filter(user => user.isActive === true);
	return userActive; 
};

// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 27

const getInactiveUsers = (users) => {
  const userActive = users.filter(user => user.isActive !== true);
	return userActive;  
};

// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 28

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find((option) => option.title === BOOK_TITLE);
const bookByAuthor = books.find((option) => option.author === AUTHOR);

// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 29

const getUserWithEmail = (users, email) => {
  const userEmail = users.find((option) => option.email === email);
  return userEmail;
};

// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 30

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every((value) => value%2===0);
const eachElementInFirstIsOdd = firstArray.every((value) => value%2!==0);

const eachElementInSecondIsEven = secondArray.every((value) => value%2===0);
const eachElementInSecondIsOdd = secondArray.every((value) => value%2!==0);

const eachElementInThirdIsEven = thirdArray.every((value) => value%2===0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value%2!==0);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 31

const isEveryUserActive = (users) => {
  const userActive = users.every((value) => value.isActive === true); 
  return userActive;
};
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 32

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 33

const isAnyUserActive = users => {
   const userActive = users.some(value => value.isActive === true);
  return userActive;
};
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 34

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((total, playtimes) => {
return total + playtimes;

}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 35
  
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
return total + player.playtime/player.gamesPlayed;

}, 0);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 36
  
const calculateTotalBalance = users => users.reduce(
    (totalBalance, user) => totalBalance + user.balance,0);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 37
  
const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 38
  
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 39
  
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 40
  
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 41
  
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort(
	(firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...books].sort(
	(firstAuthor, secondAuthor) => 
  secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...books].sort(
	(firstRating, secondRating) => firstRating.rating - secondRating.rating
);

const sortedByDescentingRating = [...books].sort(
	(firstRating, secondRating) => secondRating.rating - firstRating.rating
);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 42
  
const sortByAscendingBalance = users => [...users].sort(
	(a,b) => a.balance - b.balance
);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 43
  
  const sortByDescendingFriendCount = users => [...users]
    .sort((a, b) => b.friends.length - a.friends.length);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 44
  
const sortByName = users => [...users].sort(
	(a, b) => a.name.localeCompare(b.name)
);
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 45
  
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
	.filter(value => value.rating >= MIN_BOOK_RATING)
	.map(book => book.author)
	.sort((a,b) => a.localeCompare(b));
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 46
  
const getNamesSortedByFriendCount = users => [...users]
	.sort((a, b) => a.friends.length - b.friends.length)
	.map(value => value.name);
	
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}

{
    // Задача 47
  
const getSortedFriends = users => [...users]
	.flatMap(user => user.friends)
	.filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));
  
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}


{
    // Задача 48
  
const getTotalBalanceByGender = (users, gender) => [...users]
	.filter(user => user.gender === gender)
	.reduce((totalBalance, user) => totalBalance + user.balance,0);
  
// console.log(getFriends(users));
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


}
