var fs = require('fs')

fs.writeFileSync('files1.txt', 'First message of the world')
fs.appendFileSync('files1.txt', "\n hello world")
//fs.mkdirSync('ffile.txt')

fs.writeFileSync('secFile.txt','this is appended data: here it is !!!!')