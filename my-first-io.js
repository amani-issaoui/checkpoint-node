const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const nbr= buffer.toString().split('\n').length - 1;
console.log(nbr);

