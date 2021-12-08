// const arr = ["BEST", "the", "foo", "is", "JS"];

// for (let i = 0; i < arr.length; i += 1){
//   if (arr[i] === "foo") {
//     arr.splice(i, 1);

//   }
// }

// console.log(arr.join(" "));


{

    // Задача 1
    const apartment = {

        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
        tags: ["premium", "promoted", "top"],

    };
    
}

{

    // Задача 2
    const apartment = {

        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
        tags: ["premium", "promoted", "top"],
        owner: {
            name: "Henry",
            phone: "982-126-1588",
            email: "henry.carter@aptmail.com",
            },
    
};

}

{

    // Задача 3
    const apartment = {
        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
        tags: ["premium", "promoted", "top"],
    };

    // Change code below this line
    const aptRating = apartment.rating;
    const aptDescr = apartment.descr;
    const aptPrice = apartment.price;
    const aptTags = apartment.tags;
    // Change code above this line


}

{

    // Задача 4
    const apartment = {
        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
        tags: ["premium", "promoted", "top"],
        owner: {
            name: "Henry",
            phone: "982-126-1588",
            email: "henry.carter@aptmail.com",
    },
    };

    // Change code below this line
    const ownerName = apartment.owner.name;
    const ownerPhone = apartment.owner.phone;
    const ownerEmail = apartment.owner.email;
    const numberOfTags = apartment.tags.length;
    const firstTag = apartment.tags[0];
    const lastTag = apartment.tags[apartment.tags.length - 1];
    // Change code above this line


}

{

    // Задача 5
    const apartment = {
        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
        tags: ["premium", "promoted", "top"],
    };

    // Change code below this line
    const aptRating = apartment["rating"];
    const aptDescr = apartment["descr"];
    const aptPrice = apartment["price"];
    const aptTags = apartment["tags"];
    // Change code above this line

}

{

    // Задача 6
    const apartment = {
        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4,
        price: 2153,
        tags: ["premium", "promoted", "top"],
        owner: {
            name: "Henry",
            phone: "982-126-1588",
            email: "henry.carter@aptmail.com",
    },
    };

    // Change code below this line
    apartment.price = 5000;
    apartment.rating = 4.7;
    apartment.owner.name = "Henry Sibola";
    apartment.tags.push("trusted");

}

{

    // Задача 7
    const apartment = {
        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4.7,
        price: 5000,
        tags: ["premium", "promoted", "top", "trusted"],
        owner: {
            name: "Henry Sibola",
            phone: "982-126-1588",
            email: "henry.carter@aptmail.com",
    },
    };

// Change code below this line

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";

}

{

    // Задача 8
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,
  // Change code above this line
};


}


{

    // Задача 9
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
	[emailInputName]: "henry.carter@aptmail.com",
  	[passwordInputName]: "jqueryismyjam",


  // Change code above this line
};


}


{

    // Задача 10
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment){
	keys.push(key);
	values.push(apartment[key]);
};


}


{

    // Задача 11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if(apartment.hasOwnProperty(key)){ 
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

}

{

    // Задача 12
function countProps(object) {
  let propCount = 0;
  // Change code below this line
    for (const key in object) {

        if (object.hasOwnProperty(key)) {
        const keys = Object.keys(object);
            propCount = keys.length;
        }
        
   }
  // Change code above this line
    return propCount;
}


}

{

    // Задача 13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
	values.push(apartment[key]);
}

}

{

    // Задача 14
function countProps(object) {
  // Change code below this line
  let propCount = 0;

   const keys = Object.keys(object);
    propCount = keys.length;

  return propCount;
  // Change code above this line
}


}

{

    // Задача 15
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

}

{

    // Задача 16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
	const values = Object.values(salaries);
  	
  	for (const value of values){
    	totalSalary += value;
    }
  // Change code above this line
  return totalSalary;
}


}


{

    // Задача 17
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for(const color of colors){
hexColors.push(color.hex);
rgbColors.push(color.rgb);

}

}

{

    // Задача 18
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  for (const product of products) {
   
    const prices = [];

    if (product.name === productName) {
      prices.push(product.price);
      return prices[0];
    }
    
    // Change code above this line
  }
  return null;

  // Change code above this line
  }
  
  // console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

}


{

  // Задача 19
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getAllPropValues(propName) {
    // Change code below this line


    const propArray = [];
  

    for (const product of products) {

      const values = product[propName];
      const keys = Object.keys(product);
      // console.log(keys);

      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i] === propName) {
          propArray.push(values);
        }
      }

    }

    return propArray;

    // Change code above this line
  }
  
}

{
  // Решение 2

      // Задача 19
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line


  const propArray = [];
  

  for (const product of products) {

    // console.log(keys);
      if (product[propName]) {
        propArray.push(product[propName]);
        continue;
      }
    
    }

  return propArray;

  // Change code above this line
}

  
  // console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

}

{

    // Задача 20
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  let totalPrice = 0;
  

  for (const product of products) {

    const keys = Object.values(product);

    for (let i = 0; i < keys.length; i += 1){
      if (keys[i] === productName) {
        totalPrice = product.price * product.quantity;
      }
    }

    }

  return totalPrice;

  // Пиши код выше этой строки
}


// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

}

{

    // Задача 21
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  let totalPrice = 0;
  

  for (const product of products) {

    const keys = Object.values(product);

    for (let i = 0; i < keys.length; i += 1){
      if (keys[i] === productName) {
        totalPrice = product.price * product.quantity;
      }
    }

    }

  return totalPrice;

  // Пиши код выше этой строки
}


// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

}

{

    // Задача 21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

}


{

    // Задача 22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

}

{

    // Задача 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

}

{

    // Задача 24
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


}

{

  // Задача 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line


const {today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, 
   tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},     
       } = forecast;
}


{

  // Задача 26
// Change code below this line
function calculateMeanTemperature(forecast) {
  
  const {tomorrow: {low:tomorrowLow,high:tomorrowHigh}, today: {low:todayLow, high:todayHigh}} = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

}

{

  // Задача 27
// Change code below this line
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

}

{

  // Задача 28
// Change code below this line
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore =  Math.max(...allScores);
const worstScore = Math.min(...allScores);

}

{

  // Задача 29
// Change code below this line
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
}

{

  // Задача 30
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
	  return { ...{ category, priority, completed }, ...data };
  // Change code above this line
}
}

{

  // Задача 31
function add(...args) {
  let result = 0
  for (let i = 0; i < args.length; i += 1){
    result += args[i];
  }
  return result;
  }
  
}


{

  // Задача 32
function addOverNum(firstNumber, ...otherArgs) {
  let total = 0;


    for (const arg of otherArgs) {
      if (arg > firstNumber) {
        total += arg
      }
  }
  return total;
  // Change code above this line
}
  
//   console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
  
}


{

  // Задача 33
function findMatches(firstArg, ...otherArg) {
  const matches = [];

  for (const arg of firstArg) {
    // console.log(arg);
    for (const args of otherArg) {
      if (arg === args) {
        matches.push(arg);
      }
    }

  }
  return matches;
}

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
  
}

{

  // Задача 34
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName){
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName){
  	return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
  
}

{

  // Задача 35
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
    // Change code above this line
  },
};

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
  
}

{

  // Задача 36
const atTheOldToad = {
  // Change code below this line

	potions: [],

  // Change code above this line
};


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
  
}


{

  // Задача 37
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
	getPotions(){
      return this.potions;
    },
  // Change code above this line
};

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
  
}


{

  // Задача 38
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
	this.potions.push(potionName);


    // Change code above this line
  },
};


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
  
}


{

  // Задача 39
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
	const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);


    // Change code above this line
  },
};


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
  
}

{

  // Задача 40
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
	const potionIndex = this.potions.indexOf(oldName);
	this.potions.splice(potionIndex, 1, newName);
    // Change code above this line
  },
};



// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
  
}

{

  // Задача 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    
    for (const item of this.potions) {

      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
     this.potions.push(newPotion);
  },

  removePotion(potionName) {

    for (let i = 0; i < this.potions.length; i += 1){

      const item = this.potions[i];

      if (potionName === item.name) {
        return this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;

  },

  updatePotionName(oldName, newName) {

      for (let i = 0; i < this.potions.length; i += 1){

      const item = this.potions[i];

      if (oldName === item.name) {
        return item.name = newName;
      } 
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Stones skins", price: 240 }));
// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.removePotion("Dragon breaths"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Stone skins", "Invulnerability potion"));
// console.log(atTheOldToad.getPotions());
  
}


