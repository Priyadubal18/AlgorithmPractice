/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let sqrtArray = [];
    for (let i = 0; i < points.length; i++) {
        sqrtArray.push(square(points[i][0], points[i][1]));
    }

    console.log(sqrtArray);

    sqrtArray.sort(function (a, b) {
        return a - b;
    })
    console.log(sqrtArray);
    let kValue = sqrtArray[K - 1];

    ansArray = [];
    for (let i = 0; i < points.length; i++) {
        if (square(points[i][0], points[i][1]) <= kValue) {
            ansArray.push(points[i]);

        }
    }

    return ansArray
};


var square = function (p1, p2) {
    let squareSum = p1 * p1 + p2 * p2
    return Math.sqrt(squareSum);
}

