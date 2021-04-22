var fruits = ["apple", "orange", "mango", "avacado"]

//here sort method does as sorting according to the  string, So sorting of string is simple 
fruits.sort()
console.log(fruits)

fruits.reverse()
console.log(fruits) 

//But sorting of number require a compare function because here we can compare number as string like 25 is bigger than 100 in case of 
// string because 2 is bigger than 1 
var number = [1,6,7,2,90,12,32,56,78,9,22]
number.sort()
console.log(number) 
//so here we use compaer function
number.sort(function(a, b){
    return(a - b)
})
console.log(number)