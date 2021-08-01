const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

conditioning = data => {
    const settings = data.toString().trim().split('\n');
    const [tRoom, tCond] = settings[0].trim().split(' ').map(n => +n);
    const mode = settings[1].trim();
    let result;

    switch(mode) {
        case 'fan': {
            result = tRoom
            break
        }
        case 'auto': {
            result = tCond
            break
        }
        case 'heat': {
            result = tRoom < tCond ? tCond : tRoom
            break
        }
        case 'freeze': {
            result = tRoom > tCond ? tCond : tRoom
            break
        }
    }

    fs.writeFileSync("output.txt", result.toString())
}

conditioning(fileContent)