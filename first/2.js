const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

checkTriangle = data => {
    const [a, b, c] = data.toString().split('\n').map(x => +x);
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b & b + c > a) {
        fs.writeFileSync("output.txt", 'Yes');
    } else {
        fs.writeFileSync("output.txt", 'No');
    }
}

checkTriangle(fileContent)