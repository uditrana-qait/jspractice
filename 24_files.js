var fs = require('fs')

var  data = fs.readFileSync('files.txt')

console.log(data.toString())
console.log("data printed")

console.log(fs.statSync('files.txt'))

fs.appendFileSync('files.txt', '\n data  will be saved here!!!')
fs.writeFileSync('files.txt', 'Data will be changed from here now. \nso please try to append next time you want add data!!!')