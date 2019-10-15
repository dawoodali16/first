// function showName (name){
// 	console.log(name)
// }

// showName('dawood');
// showName('sultan');
// showName('ali');
// showName('khan');

// function sum(val1, val2){
// 	var sum = val1+val2;
// 	return sum;
// }

// var a = sum(2,3)
// var b = sum(12,31)
// var c = sum(a,b)
// console.log(a, b, c)

// function greeting(parameterVariable) {
//     // This line prints 'Hello, World!' to the console:
//     console.log('Hello, World!');

//     // Write a line of code that prints parameterVariable to stdout using console.log:
//     console.log(parameterVariable);    
// }

//Function Practice:

// function monitorCount(rows, columns) {
//   return rows * columns;
// }
// function costOfMonitors(rows, columns){
//   return monitorCount(rows, columns) * 200;
// }
// const totalCost = costOfMonitors(5, 4);
// console.log(totalCost);

//Program to find cube using function

// function cube(num) {
// 	c = num * num * num;
// 	return c;
// }
// console.log(cube(5));

//functions to find diameter and area of circle
// function getDiameter(radius) {
// 	return (2 * radius + 'units');
// }
// function getArea(radius){
// 	return (3.14 * radius * radius);
// }
// console.log(getDiameter(10));
// console.log(getArea(10));

//find the max number
// function max(num1, num2){
// 	if (num1 > num2) {
// 		console.log('maximum');
// 	}
// 	else if (num2 > num1) {
// 		console.log('minimum');
// 	}
// 	else{
// 		console.log('incorrect');
// 	}
// 	return;
// }
// max(20, 10); // problem




// function even(num) {
// 	if (num % 2 === 0) {
// 		console.log('Its Even');
// 	}
// 	else {
// 		console.log('its odd')
// 	}
// 	return;
// }
// even(20);


// function isEven(n) {
//   n = Number(n);
//   return n%2 === 0 ;
// }

// function isOdd(n) {
//   return isEven(Number(n) + 1);n
// }
// console.log(isEven(20));

// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var sum = sumOfNumbers(1,2,3, 4);
// console.log(sum);


 //function that accepts a number as a parameter and check the number is prime or not.
// function testPrime(n) {
// 	if (n===1) {
// 		return false;
// 	}
// 	else if (n===2) {
// 		return true;
// 	}
// 	else{
// 		for (var i=2; i<n; i++){
// 			if (n % i===0) {
// 				return false;
// 			}	
// 		}
// 		return true;
// 	}
// }
// console.log(testPrime(12));

 
//Counts the number of vowels within a string
// function vovelCount(string) {
// 	var vov= 'aeiouAEIOU';
// 	var vovc= 0;
// 	for(var i=0; i<string.length; i++){
// 		if (vov.indexOf(string[i]) !== -1) {
// 			vovc +=1;
// 		}
// 	}
// 	return vovc;
// }
// console.log(vovelCount('HelloWorldImHigh')); //Problem of IndexOf syntax 


//function that returns a passed string with letters in alphabetical order.
// function order(alphabet) {
// 	return alphabet.split("").sort().join("");
// }
// console.log(order('HelloWorldImHighaaa'));

// var name = 'doowad ';

// console.log(name.split('').reverse().join(''));

// var arr = ' hello '
// console.log(arr.replaceall('l', 'a'))

// var arr = [1,2,3]
// var c = null
// if(typeof c === 'object' && c){
// 	console.log('OBJECT', )
// }
// else{
// 	console.log('NULL')
// }