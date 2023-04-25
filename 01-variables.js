// JavaScript variable Declaration
var myFirstVariable;

//initialization

var patientId; //declaring the variable
patientId = 120024;
console.log(patientId);

// declare
var lastName;

//initialize
// a value type
lastName = "Laystrom";
console.log(lastName);

//re-initialize (re-assigning) the value
lastName = "Schitt";
console.log(lastName);

// var and hoisting (hoisting is a thing but not a practice that we should use)
//adding a string before variable in console log
programmer = "Ada Lovelace";
var programmer;
console.log("Programmer:", programmer);

// Let and Hoisting
//Let has to be declared before it can be initialized
let jsVersion;
jsVersion = "es12";
console.log("Let:", jsVersion);

//const and re-initialization
//can not re-initialize a const as it's constant
const humansBestFriend = "dog";
