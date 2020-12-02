const fs = require('fs');
const readline = require('readline');
const path = require('path');

module.exports = {
    getInput(day) {
        return new Promise((resolve, reject) => {
            let lines = [];
            const lineReader = readline.createInterface({
                input: fs.createReadStream(path.join(__dirname, 'Inputs', `day${day}.txt`))
            });
            lineReader.on('line', line => {
                lines.push(line);
            });
            lineReader.on('close', () => {
                resolve(lines);
            });
        });
    }
}