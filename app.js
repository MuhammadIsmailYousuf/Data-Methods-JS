//Assignment 13 : DATA METHODS.
//Task 1:
//Write a program that displays current date and time in your browser.

var now = new Date();
console.log(now);

//Task 2:
//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var date = new Date();
var day = date.toString({weekday: "short" });

alert(day.substring(0,3));

//Task 3:
//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

let date1= new Date();
let day = date1.getDay();

if (day === 0 || day === 6) {
    alert("It's Fun day");
}

//Task 4:
//Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

let date2 = new Date();
let day = date2.getDate();

if (day < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

//Task 5:
//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

let date3 = new Date();
let hours = date3.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

//Task 6:
//Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date(2020, 11, 31);
console.log(laterDate);

//Task 7:
//Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var RamadanStart = new Date(1440, 5, 29); // Date for Ramadan 2020

var currentDate = new Date();
const match = Math.floor((currentDate.getTime() - RamadanStart.getTime()) / 1000 / 60 / 60 / 24);
console.log(`Days past since 1st Ramadan: ${match}`);

//Task 8:
//Write a program to ask the user about his age. Calculate and show his birth year in your browser.

function getBirthYear() {
    var age = parseInt(prompt("Please enter your age: "));
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - age;
    alert("You were born in " + birthYear);
  }
  
  getBirthYear()












