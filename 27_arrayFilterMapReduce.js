//Filter method
var words = ['spray', 'limit', 'execute', 'destruction', 'present']

var result = words.filter(function(e){
    return e.length>5
})
console.log(result)
var result   = words.filter(function(e){
    return e === 'spray'
})
console.log(result)

// Map method
var ar = [3,6,8,9,12,5,21]
ar = ar.sort(function(a, b){
    return(a - b)
})
console.log(ar)
var aa = ar.map(function(e){
    return e*3
})
//var aa = ar.map(e => e*3)

console.log(aa)

//reduce method
 var as = ar.reduce(function(accumulator, currentvalue){
     return accumulator+currentvalue
 })
 console.log(as)