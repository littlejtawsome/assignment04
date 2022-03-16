//STEP 1


// 1.Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

// var halfNumber = function halfNumber(a) {
//    console.log( "Half of " +  a  + "  is" + (a / 2) );
// };
//    halfNumber(5);

// STEP 2 
// 2.Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
   
// var squareNumber = function squareNumber(a) {
//     console.log("The result of squaring the number " + a + " is " + Math.pow(a,2));
// }
//    squareNumber(3);

//STEP 3
// 3.Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

//  function percentOf(a , b) {
//     console.log((a / b) + "  is 50% of "+ a);
//  }
//     percentOf(4, 2);


//STEP 4
// 4.Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

// function findModulus(a, b) {
//     // return(a % b);
//     console.log((b % a)+ " is the modulus of "+ a +" and " + b);
// }
//     findModulus( 4 , 10);


    
//STEP 5
// 5.Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task. -->
//신지영 첫번째 트라이.
// var numbersSum;
// function getSum(numArray) {
//    var numArray = parseInt(prompt("pick  numbers"));
//    alert("Your number is "+ numArray.split(',' + getSum());
//  console.log("Sum of getSum is " )
// }
//    getSum();

//신지영 두번째 트라이 .forEach(callback, thisArg)
// const arr = [];
// var element =parseInt( prompt("Enter your numbers"));

// arr.forEach(function(element){
//     console.log(element);
// });
// arr.forEach(element) => console.log(element));

//신지영 3번째 트라이
// <script>
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// document.getElementById("demo").innerHTML = numbers2;

// function myFunction() {
//   return value * 2;
// }

////권태혁 코드
//     var numbersSum;
//     function getSum(numArray) {
//     var sum = 0;
//     for(var i=0; i<numArray.length; i++){
//         sum = sum + numArray[i];
//     }
//     return sum;
// }

// function convertToNum(numArrayStr) {
//     let arr = numArrayStr.split(",");
//     let numArray = arr.map(Number);
//     return numArray;
// }

// function numberSum() {
//     let numberStr = prompt("Put numbers");
//     let numArray = convertToNum(numberStr);
//     let sum = getSum(numArray);
//     alert("Your numbers sum is " + sum);
// }

// numberSum();

