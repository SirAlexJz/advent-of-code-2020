const { getInput } = require('../main');

getInput('1').then(lines => {
    numbers = lines.map(number => Number(number));
    // Part One Solution
    // for (let i = 0; i < numbers.length; i++) {
    //     let num1 = numbers[i];
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         let num2 = numbers[j];
    //         let sum = num1 + num2;
    //         if (sum == 2020) {
    //             console.log(num1 * num2);
    //             return;
    //         }
    //     }
    // }

    // Part Two Solution
    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            for (let x = j + 1; x < numbers.length; x++) {
                let num3 = numbers[x];
                let sum = num1 + num2+ num3;
                if (sum == 2020) {
                    console.log(num1 * num2 * num3);
                    return;
                }
            }
        }
    }
});