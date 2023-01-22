x = 20 - (1 + 1 + 2 + 3 + 5)

console.log(x)

/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
 */
 

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

console.log("The file located at \"C:\\Desktop\My Documents\Roster\names.txt\" contains the names on the roster.")

// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}


var logic = "green" > "blue"

console.log(logic)


/*
 * Programming Quiz: Yosa Buson (2-6)
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */

var haiku = "Blowing from the west\nFallen leaves gather\nIn the east."
console.log(haiku);


var studentName = "John";
var haveEnrolledInCourse = false;
var haveCompletedTheCourse = false;

if (haveEnrolledInCourse){ 
  console.log("Welcome "+studentName+" to Udacity!"); // Will run only if haveEnrolledInCourse is true
}

console.log('test')
data = ["3">1, 3 != "3", true >= 0, 1 !== false, "false"=== 0, 3 === 3]

for (let i = 0; i < data.length; i++){
  console.log(data[i])
}

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib)

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"


/*
 * Programming Quiz: One Awesome Message (2-12)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */
 
 
// Add your code here


var firstName = "Shawn";
var interest = "Coding";
var hobby = "Basketball";
var awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`
console.log(awesomeMessage)