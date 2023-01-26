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