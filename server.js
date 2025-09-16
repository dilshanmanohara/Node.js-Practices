console.log("Server is starting...");
console.log(global); 

const os = require('os');
const {add,divide,multiply,subtract} = require('./math');

module.exports = { add, subtract, multiply, divide };

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))