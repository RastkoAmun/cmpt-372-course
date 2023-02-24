const path = require('path')
const fs = require('fs')

let filename = process.argv[2]
let filePath = path.join(__dirname, filename);
console.log(filePath)

let content = fs.readFileSync(filePath)
console.log(content.toString())