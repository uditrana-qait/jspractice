var fruits = ["apple", "orange", "mango", "avacado"]

fruits.push("lemon")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('papaya')
console.log(fruits)
//deleting 
delete fruits[2]
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits[1] = 'polly'
console.log(fruits)

//splice - add element in the array
fruits.splice(1, 0, 'mango', 'guava')
console.log(fruits)

//slicing - creates new array and previous array remains same
var arr1 = fruits.slice(2)
console.log(arr1)
console.log(fruits)