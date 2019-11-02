// https://leetcode.com/problems/check-if-it-is-a-straight-line/

var getSlope = function (p1, p2) {
    let x = p1[0] - p2[0];
    let y = p1[1] - p2[1]
    return y / x;
}

var checkStraightLine = function (coordinates) {
    // input is array
    //output is bool
    // if there is only one coordinate return true. Thats the only edge case

    //get the globalSlope
    let globalSlope = getSlope(coordinates[0], coordinates[1]);
    for (let i = 1; i < coordinates.length - 1; i++) {
        let slope = getSlope(coordinates[i], coordinates[i + 1]);
        if (slope != globalSlope) {
            return false;
        }
    }
    return true;
};

