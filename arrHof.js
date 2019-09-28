// Array HOM , parameter function >> callback

// array.forEach >>> Loop, (value, index, array) NO RETURN
// array.find >>> Loop+find, (value, index, array) RETURN >> undefined || value
// array.map
// array.filter
// array.reduce

var arr = [1,2,3,4,5];
var array = [
	{name: 'ali', age: 10},
	{name: 'kan', age: 1},
	{name: 'kashif', age: 20},
	{name: 'ahmed', age: 5}
];

// arr.forEach(cb)
// function cb(value, index, array){
// 	if(value%2===0) { console.log(value) }
// }

// var result = arr.find(function(v){
// 	if(v===9) return v
// })
// console.log(result)


var findAge = array.find(function(v, i, arr){
	if(v.age===20) return v
	// if(arr[i].age===20) return v
})

console.log(findAge)