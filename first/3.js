const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

function checkPhone(data) {
  let phoneNumbers = data.toString().trim().split('\n').map(n => preparePhone(n));
  const result = phoneNumbers.slice(1).map(n => isEqual(n, phoneNumbers[0])).join('\n');
  fs.writeFileSync("output.txt", result.toString())
}

function preparePhone(n) {
  n = n.trim().replace(/[\(\)-]/g, '').slice(-10);
  if (!n.slice(-10, -7)) { 
      n = '495' + n;
  }
  return n;
}

function isEqual(n, pattern) {
  return n === pattern ? 'YES' : 'NO';
}

checkPhone(fileContent)