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

///////////////////////////////////////////////

