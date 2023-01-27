var price = 15.00
var money = 20.00

if (money >= price) {
  console.log("buy the hammer")
} else {
  console.log("don't buy the hammer")
}

var weather = "sunny";

if (weather === "snow"){
  console.log("Bring a coat.");
} else if (weather === "rain"){
  console.log("Bring a rain jacket.");
} else {
  console.log("wear what you have on.")
}

var number = 10;

if (number % 2 === 0){
  console.log (" this is an even number");
} else {
  console.log("this is an odd number");
}

var musicians = 1;

if (musicians <= 0) {
  console.log("Not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if(musicians === 3){
  console.log("trio");
} else if(musicians === 4){
  console.log("quartet");
} else {
  console.log("this is a large group");
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "dining room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "poison";
var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === "billards room" && suspect ==="Mr. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "ballroom" && suspect ==="Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else if (room === "gallery" && suspect ==="Ms. Van Cleave") {
  weapon = "trophy";
  solved = true;
}
  else if (room === "dining room" && suspect ==="Mr. Parkes") {
    weapon = "knife";
    solved = true;
} else {
  console.log("You are wrong!")
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}
/* ****************************************** */

data =[true || true, false && false, !true, (13 > -7 ||(false == 0)), (10 === "10")&& (1<=2),(3 !=6 %3) && !(24 >25) && (!false)]

for (i = 0; i < data.length; i++ ){
  console.log(data[i])
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === true && isActive === false){
  console.log("Your account is no longer active.")
} else if (checkBalance === false){
  console.log("Thank you. Have a nice day!")
} else if(checkBalance === true && isActive === true && balance > 0){
  console.log(`Your balance is $${balance.toFixed(2)}`)
} else if(checkBalance === true && isActive === false && balance > 0) {
  console.log("Your account is no longer active")
} else if(checkBalance === true && isActive === true && balance === 0){
  console.log("Your account is empty.")
} else {
  console.log("Your balance is negative. Please contact the bank")
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
  console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 19.99;
var shirtLength = 28.99;
var shirtSleeve = 8.379;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

var smallSize =   [18, 28, 8.13];
var mediumSize =  [20 , 29, 8.38];
var LargeSize =   [22, 30, 8.63];
var xlSize =      [24, 31, 8.88];
var twoXlSize =   [26, 33, 9.63];
var threeXlSize = [28, 34, 10.13];

// WRITE YOUR CODE HERE
var size = "NA";

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
  size = "S"
} else if ((shirtWidth >= 20  && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.88)){
  size = "M"
} else if ((shirtWidth >= 22  && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
  size = "L"
} else if ((shirtWidth >= 26  && shirtWidth < 28) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
  size = "2XL"
} else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve ===10.13)){
  size = "3XL"
} else {
  size = "NA";
}
console.log(size);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = ( eatsPlants ? (eatsAnimals ? "omivore":"herbivore") : (eatsAnimals ? "carnivore":"undefined"))

console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch (education) {
  case "no high school diploma":
    var salary = 25636;
    break;
  case "a high school diploma":
    var salary = 35256;
    break;
  case "an Associate's degree":
    var salary = 41496;
    break;
  case "a Bachelor's degree":
    var salary = 59124;
    break;
  case "a Master's degree":
    var salary = 69732;
    break;
  case "a Professional degree":
    var salary = 89960;
    break;
  case "a Doctoral degree":
    var salary = 84396;
    break;
  default:
    console.log("What do degree do they have again?")
    break;
}