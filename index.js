let celsius = 25; 
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);

let daysInMonth = 30; 
let hoursInMonth = daysInMonth * 24; 
let minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth, minutesInMonth);

let health = 100; 
let energy = 80; 
health -= 20; 
energy -= 30;
console.log(health, energy);

let purchaseAmount = 200; 
let discountedAmount = purchaseAmount * 0.9;
console.log(discountedAmount);

let floatNumber = 15.76; 
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

let floatString = "23.45"; 
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

let integerString = "42"; 
let parsedInteger = parseInt(integerString);
console.log(parsedInteger);

let number = 49; 
let squareRoot = Math.sqrt(number);
console.log(squareRoot);

let integerValue = 128; 
let stringNumber = "256"; 
let convertedToInteger = parseInt(stringNumber); 
let convertedToString = integerValue.toString();
console.log(convertedToInteger, convertedToString);
