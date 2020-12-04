const { getInput } = require('../inputHandler');

// To get part one result, just run with slopes[1]

const slopes = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 }
]

getInput('3').then(lines => {
    let totalTrees = [];
    slopes.forEach(slope => {
        totalTrees.push(getTreesFromSlope(slope.x, slope.y, lines));
    });
    let total = totalTrees[0];
    for (let i = 1; i < totalTrees.length; i++) {
        total *= totalTrees[i];
    }
    console.log(total);
});

function getTreesFromSlope(slopeX, slopeY, map) {
    let j = 0;
    let trees = 0;
    for (let i = 0; i < map.length; i += slopeY) {
        if (map[i][j] == '#') {
            trees++;
        }
        j += slopeX;
        if (j >= 31) {
            j -= 31;
        }
    }
    return trees;
}