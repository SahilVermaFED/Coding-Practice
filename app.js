// //////////////////////////////////////////////////////

// let todo = [];

// let req = prompt("Please enter your request");

// while (true) {
//   if (req == "quit") {
//     console.log("Quitting App");
//     break;
//   }

//   if (req == "list") {
//     console.log("----------------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("------------------------");
//   } else if (req == "add") {
//     let task = prompt("Please enter the task you want to add");
//     todo.push(task);
//     console.log("task added");
//   } else if(req == "delete") {
//     let index = prompt("Please enter the task index")
//     todo.splice(index,1)
//     console.log("task Deleted")
//   } else {
//     console.log("Wrong Request")
//   }

//   req = prompt("Please enter your request");
// }
// /////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// // Favourite Movie

// let favourite = "Vivah";
// let guess = prompt("Guess my Favourite Movie");
// while (guess != favourite && guess != "Quit") {
//   console.log("Wrong");
//   guess = prompt(" Wrong Guess!! Please try again");
// }
// if (guess == favourite) {
//     document.write("Congrats!")
// }

// else{
//     document.write("You Quit!")
// }

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

// let i = 1;
// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

///////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// // Loops with Array
// let fruits = ["Mango","Banana","Strawberry","Lichi","Papaya"]
// for (let i = fruits.length - 1; i >=0; i--){
//     document.write(i," " + fruits[i],"<br>")
// }

/////////////////////////////////////////////////////

/////////////////////////////////////////////////////

//for-of loop
// let fruits = ["orange","apple","litchi","mango","blueberry"];
// for (let fruit of fruits) {
//     document.write(fruit,"<br>")
// }

// for(char of "iamdon"){
//     document.write(char,"<br>")
// }

///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

// nested for of loop for complex arrays and complex structure
// let heroes = [
//   ["Ma", "PA", "Bhaiya"],
//   ["Babli", "Lamboo", "Shuli"],
// ];
// for (list of heroes) {
//   for (hero of list) {
//     document.write(hero, "<br>");
//   }
// }

// /* Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3] */

// let arr = [2,4,2,5,3,5,2,4,6,4,2,4,2,2,4,0,5,3]
// let num = 2

// for (let i = arr.length - 1; i >=0; i--) {
//     if(arr[i] == num) {
//         arr.splice(i,1)
//     }
// }
// document.write(arr)

// /* Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6*/

// let number = +prompt("Enter the number to find no of digits.")
// let count = 0;

// let copyCounter = number
// while(copyCounter > 0) {
//     count ++;
//     copyCounter = Math.floor(copyCounter/10); //if copyNumber is 287152, after this operation, it becomes 28715.
// }
// document.write(count)

// /* Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25 */

// let number = Number(prompt("Enter the number for sum of its digit"));
// let sum = 0;

// let copyNumber = number;
// while (copyNumber > 0) {
//   digit = copyNumber % 10; // if copyNumber is 287152, 287152 % 10 gives remainder 2, which is the last digit.
//   sum = sum + digit;
//   copyNumber = Math.floor(copyNumber / 10); // if copyNumber is 287152, after this operation, it becomes 28715.
// }
// document.write(sum);

// /*Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1 */

// let number = parseInt(prompt("Enter the number for factorial"));

// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//   factorial = factorial * i;
// }

// document.write(factorial);

//////////////////////////////////////////////

//////////////////////////////////////////////

// /*Qs5. Find the largest number in an array with only positive numbers. */

// let arr = [
//   2, 4, 2, 5, 3, 0, 65, 5, 234, 5, 42, 42, 32, 43, 3, 54, 34, 34, 532, 5, 668,
//   76, 8, 456, 45, 2,
// ];
// let largest = 0;

// for (let i = 0; i <= arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }
// document.write("Largest number among array is " + largest);

///////////////////////////////////////////////

///////////////////////////////////////////////

// const student = {
//     name : "Sahil",
//     age: 22,
//     marks: 71.9
// }
// document.write(student.age)

////////////////////////////////////////////

////////////////////////////////////////////

/*  Thread / Twitter Post
// Create an object literal for the properties of thread/ twitter post includes - */

// const post = {
//     username: "@sahilverma",
//     content: "This is my #post",
//     likes:200,
//     reposts: 5,
//     tags: ["@pro","@draw"]
// }

// // console.log(post)
// // document.write(JSON.stringify(post))

// // for(const key in post) {
// //     if (post.hasOwnProperty(key)){
// //         document.body.innerHTML += `<p><strong>${key} : </strong> ${post[key]}</p>`
// //     }
// // }

// console.log(post.username)
// console.log(post["reposts"])
// console.log(post.tags[1])

///////////////////////////////////////////

///////////////////////////////////////////

// const students = {
//     name: "Sahil",
//     age:22,
//     city:"Mumbai",
//     marks:92.6
// }

// const newCity = (students.city = "Gurgaon")
// const newValue = (students.gender = "Male")
// const newMarks = (students.marks = [78,67,35,90])

// const deleteKeyValue = delete students.name
// console.log(deleteKeyValue) // gives true or false whether its deleted or not
// console.log(newCity)
// console.log(newValue)
// console.log(newMarks)
// console.log(students)

/////////////////////////////////////////

// //////////////////////////////////////

// // nested object o
// const classInfo = {
//   Sahil: { grade: "A+", city: "Gurgaon" },
//   Dev: { grade: "B+", city: "Alwar" },
//   Dharan: { grade: "C+", city: "Firozpur Jhirka" },
// };

// const newCityForSahil = (classInfo.Sahil.city = "Kurukshetra");
// console.log(newCityForSahil);
// console.log(classInfo);

/////////////////////////////////////////////

// //////////////////////////////////////////

// // Array of object
// const classInfo = [
//   { Sahil: { grade: "A+", city: "Gurgaon" } },
//   { Dev: { grade: "B+", city: "Alwar" } },
//   { Dharan: { grade: "C+", city: "Firozpur Jhirka" } },
// ];

// classInfo[classInfo.length] = { Pushpa: { grade: "A++", city: "Alwar" }}
// console.log(classInfo)

/////////////////////////////////////////////
// Math function Math.PI,
/*MMath.PI
3.141592653589793
Math.E
2.718281828459045
Math.abs(3*2+2-764657)
764649
Math.pow(a,b)
VM311:1 Uncaught ReferenceError: a is not defined
    at <anonymous>:1:10
(anonymous) @ VM311:1Understand this error
Math.pow(2,5)
32
Math.floor(8734.99)
8734
Math.ceil(3.8)
4
Math.ceil(-2.6)
-2
Math.random()
0.4323527657650821
Math.random()
0.8777840686384419
 */

// Qs. Generate a random number between 1 and 100

// console.log(Math.floor(Math.random() * 100 + 1));

/////////////////////////////////////////////////////////

///////////////////////////////////////////////

// Qs. Generate a random number between 1 and 5 for decimal number and also for proper integer value withoutr decimal

// let randomNumber = Math.random() * 5 + 1;
// const floorNumber = Math.floor(randomNumber)

// console.log(randomNumber)
// console.log(floorNumber)

//////////////////////////////////////////////

// ///////////////////////////////////////////////
// let randomNumber = Math.random() * 6 + 1;
// const diceRoll = Math.floor(randomNumber)

// document.write(diceRoll)

//////////////////////////////////////////////

//////////////////////////////////////////////
/* Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name. */
// const car = {
//     name:"Khownikshegue",
//     model:"SLR2",
//     color:"Green"
// }

// document.write(car.name)
/* Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States. */

// const person = {
//     name : "Seghal",
//     age: 25,
//     city : "Amsterdam"
// }

// person.city = "New York"
// person["country"] = "United States"

// console.log(person)

///////////////////////////////////////////

///////////////////////////////////////////

// // Lexical Scope : A variable defined outside a function can be be accessible inside another function defined after the variable declaration
// // The opposite is NOT true

// function outerScope() {
//     let x = 1;
//     let y = 2;
//     function innerScope() {
//         console.log(x,y)
//     }
//     innerScope()
// }

///////////////////////////////////////////

///////////////////////////////////////////
// Adding Element
// document.createElement("h1")
// let newP = document.createElement("p")
// newP.innerText = "Hi i am a disco dancer"
// let btn = document.createElement("button")
// btn.innerText = "Click Me"
// let body = document.querySelector("body")
// body.appendChild(newP)
// body.appendChild(btn)

// newP.append(" || Now i have added with append ||") // append added to the lasr
// newP.prepend("|| Hey i am because of prepend || ") // prepend added to the first

// // insertAdjacentElement(position, element)

// position includes "beforebegin", "afterbegin", "beforeend", "afternend"

// // higher order function
// /*A function that takes one or multiple function as an arguments */
// function multipleGreet(func, count) {
// for(let i = 1;i<= count;i++) {
// func()
// }
// }

// let greet = function () {
//   console.log("Hello!!");
// };
// multipleGreet(greet,5)

// /* higher order function which return a function */
// function oddOrEven(req) {
//   if (req == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (req == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("Wrong request");
//   }
// }

// let req = "even";

// oddOrEven(req)(4);

//////////////////////////////////////////
// this keyword refers to an object that is executing the current piece of code
// const student = {
//   name: "Sahil",
//   age: 22,
//   eng: 89,
//   math: 93,
//   phy: 88,
//   getAvg() {
//     console.log(this)
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} has average marks ${avg}`);
//   },
// };
// student.getAvg();

/* Try & catch thesestatemnets is used for find errorwhile execution and show us whats the result 
via try and catch our website doesnt crash as it executes error as a message string or what we want to execute after*/

/* Arrow fucntion
 */

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(1, 5));

// const cube = (n) => {
//   return n * n * n;
// };
// console.log(cube(5));

// Implicit return if some funcyion is called and single
// value is returned then we use implicit return wherre we use simple () parenthesis
// and without return
// const mul = (a, b) => a * b;

// console.log(mul(2, 3));

// set time out function doesnt affect the other
// fucntion working it works according to given time and setTimeout works only one single time
// console.log("Hi");
// setTimeout(() => {
//   console.log("verma classes");
// }, 3000);
// console.log("Welocome to ");

/* SetInterval works again and again with  after given duration 
if we want to stop execution then we have to use clearInterval which
gives when we make variable of setInterval and call that variable 
in clearinterval(var)then ot stop sexecuting
*/
// console.log("Hi");
// setInterval(() => {
//   console.log("verma classes");
// }, 1000);
// console.log("Welocome to ");

/* */
// const arrayAverage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total = total + number;
//   }
//   return total / arr.length;
// };
// let arr = [2, 4, 2, 6, 3, 5, 5, 5, 6, 3, 4, 3, 5, 3];

// console.log(arrayAverage(arr));

//
// const isEven = (num) => num % 2 === 0;

// console.log(isEven(4));

// // // for each
// let arr = [
//   {
//     name: "Sahil",
//     marks: 87,
//   },
//   {
//     name: "babli",
//     marks: 98,
//   },
//   {
//     name: "DevManus",
//     marks: 94.5,
//   },
// ];

// let gpa = arr.map((el) => {
//   return el.marks / 10;
// });

// console.log(gpa);
// arr.forEach((students) => {
//   console.log(students);
//   console.log(students.name, students.marks);
// });

// let num = [2, 5, 3, 4, 7, 3, 65, 3, 5, 5, 3, 5, 4, 3, 45];
// let even = num.filter((n) => n % 2 == 0);
// let odd = num.filter((o) => !(o % 2 == 0));
// console.log(`Even numbers = ${even}`);
// console.log(`Odd numbers = ${odd}`);
//////////////////////////////////////////////
// let arr = [2, 4, 5, 3, 5, 3, 2, 2];

// let max = -1;

// for (let i = 0; i <= arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);
// ///////////////////////////////////////////////
// // reduce
// let arr2 = [2, 3, 5, 5, 6, 4, 4, 65, 6, 5, 24, 45, 5, 56];
// let max = arr2.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(max);

///////////////////////////////////////////

///////////////////////////////////////////
// // Default parameter

// const sum = (a, b = 2) => a + b;
// const result1 = sum(4, 6);
// const result2 = sum(4); // here default parameter for b is 2 and a = 4
// console.log(result1);
// console.log(result2);

// spread operator

// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
// let arr = [0, 9, 8, 6, 3, 2, 4];
// console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[5]));
// // now using spread operator for short code and best result
// const result = Math.max(...arr);
// console.log(result);

// Array literals
// let chars = [..."Hero"];
// console.log(chars);

// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8];
// let newArr = [...arr];
// console.log(newArr);
// newArr.push(4);
// console.log(newArr);

//
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...odd, ...even];
// console.log(nums);

//////////////////////////////////

//////////////////////////////////
// // Object Literals
// let data = {
//   name: "Sahil Verma",
//   email: "sahilvpro@gmail.com",
//   passcode: "DON",
// };
// const dataCopy = { ...data, id: 123, gender: "Male" };
// console.log(dataCopy);

// // array to object
// let arr = [4, 1, 7, 2, 9, 2, 5, 7, 3];
// let obj = { ...arr }; // it alwasy sworks a s key value pair

// console.log(obj);

/////////////////////////////////

//////////////////////////////////

// rest operators
// const sum = (...args) => {
//   for (let i = 0; i < args.length; i++) {
//     console.log("You gave us " + args[i]);
//   }
// };

// console.log(sum(0, 3));

// const min = () => {
//   console.log(arguments.length);
// };

// function min2() {
//   console.log(arguments.length);
// }

// console.log(min(8, 7, 9, 0));
// console.log(min2(9, 8, 7, 6));

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

///////////////////////////////////////?
// // Destructuring in Array
// let names = ["Pushplata", "Dharmender", "Devesh", "Sahil"];
// let [mumma, papa, ...children] = names;
// console.log(mumma);
// console.log(papa);
// console.log(children);

// // Destructuring in object;
// let family = {
//   mukhiya: "Dharmender",
//   laxmi: "Pushplata",
//   BhrataShree: "Ishu",
//   chotu: "Sahil",
// };
// let { mukhiya: papa, laxmi: mummy } = family;
// console.log(papa);
// console.log(mummy);

/////////////////////////////
// /* . Square and sum the array elements using the arrow function and then find the
// average of the array. */
// let arr = [1, 2, 3, 4, 5];
// let square = arr.map((num) => num * num);
// console.log(square);
// let sum = square.reduce((sum, el) => sum + el, 0);
// console.log(sum);
// let avg = sum / arr.length;

// console.log(avg);

///////////////////////////////////

//////////////////////////////////
// // Qs2. Create a new array using the map function whose each element is equal to the
// // original element plus 5.

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((el) => el + 5);
// console.log(newArr);

//////////////////////////////////////

//////////////////////////////////////
// /* Qs3. Create a new array whose elements are in uppercase of words present in the
// original array. */
// let originalStr = ["sahil", "dharam", "pushpa", "devManus"];
// let newStr = originalStr.map((str) => str.toUpperCase());
// console.log(newStr);

// /* Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled. */

// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((el) => el * 2),
// ];
// console.log(doubleAndReturnArgs([1, 2, 3, 4], 3, 4));
// console.log(doubleAndReturnArgs([4, 5, 2], 5, 5, 4));

///////////////////////////////////////

//////////////////////////////////////
/* Qs5. Write a function called mergeObjects 
that accepts two objects and returns a new 
object which contains all the keys and values
 of the first object and second object. */
// const mergeObjects = (obj1, obj2) => ({
//   ...obj1,
//   ...obj2,
// });
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// const resultObject = mergeObjects(obj1, obj2);
// console.log(resultObject);

// // Call stack
// function one() {
//   return 1;
// }
// function two() {
//   return one() + one();
// }

// function three() {
//   let res = two() + one();
//   console.log(res);
// }
// three();
