const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

function solve(data) {
    const [a, b, c] = data.toString().trim().split('\n').map(n => Number(n));

    if (c < 0) return 'NO SOLUTION';
    if (a === 0) return Math.sqrt(b) === c ? 'MANY SOLUTIONS' : 'NO SOLUTION';

    const x = (c ** 2 - b) / a;
    if (Math.round(x) !== x) return 'NO SOLUTION';

    return x.toString();
}

const result = solve(fileContent)
fs.writeFileSync("output.txt", result.toString())