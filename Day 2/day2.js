const { getInput } = require('../inputHandler');

getInput('2').then(lines => {
    let validPasswords = 0;
    lines.forEach(line => {
        let rule = generateRule(line.split(': ')[0]);
        let password = line.split(': ')[1];
        // Part 1 Solution
        // password = password.split(rule.letter).length - 1;
        // if (password >= rule.limits[0] && password <= rule.limits[1]) {
        //     validPasswords++;
        // }
    
        // Part 2 Solution
        let letterOccurances = 0;
        if (password[rule.limits[0] - 1] == rule.letter) {
            letterOccurances++;
        }
        if (password[rule.limits[1] - 1] == rule.letter) {
            letterOccurances++;
        }
        if (letterOccurances == 1) {
            validPasswords++;
        }
    });
    console.log(validPasswords);
});

function generateRule(rule) {
    rule = rule.split(' ');
    return {
        limits: rule[0].split('-').map(number => Number(number)),
        letter: rule[1]
    }
}