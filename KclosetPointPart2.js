/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let sqrtArray = [];
    for (let i = 0; i < points.length; i++) {
        sqrtArray.push(square(points[i][0], points[i][1]));
    }

    for (let i = Math.floor(k / 2 - 1); i >= 0; i--) {
        heapify(sqrtArray, k, i);
    }

    for (let i = k; i < points.length; i++) {
        if (square(points[i][0], points[i][1]) < sqrtArray[0]) {
            sqrtArray[0] = sqrtArray[i];
            heapify(sqrtArray, k, 0);
        }
    }

    let ans = [];
    let sqrArr = sqrtArray.splice(0, k);
    for (let i = 0; i < points.length; i++) {
        if (sqrArr.includes(square(points[i][0], points[i][1]))) {
            ans.push(points[i]);
        }
    }
    return ans;

};


var square = function (p1, p2) {
    let squareSum = p1 * p1 + p2 * p2
    return Math.sqrt(squareSum);
}

function heapify(arr, n, i) {
    let largerst = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < n && arr[left] > arr[largerst]) {
        largerst = left;
    }
    if (right < n && arr[right] > arr[largerst]) {
        largerst = right;
    }

    if (largerst != i) {
        let temp = arr[i];
        arr[i] = arr[largerst];
        arr[largerst] = temp;
        heapify(arr, n, largerst);
    }

}
