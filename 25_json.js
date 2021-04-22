var jsn  = {name: "udit", age: 22, city: "newyork"}
var myjson = JSON.stringify(jsn)
console.log("this is a json String" +myjson)

var obj = JSON.parse(myjson)
console.log("This is real json" +obj)

//printing values
console.log(" Name = " +obj.name)
console.log(obj.age)
console.log(obj.city)

//looping in an Object
var person = {fname:"John", lname:"Doe", age:25};

var text = ""
for (x in person) {
  text += person[x];
}

console.log(text)